import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../../../../chunks/Sidebar_De376onF.mjs';
import { $ as $$ArticleCard, a as $$Pagination } from '../../../../chunks/Pagination_DakFGdiv.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const articlesPath = join(process.cwd(), "public", "articles", "list.json");
    const articleIds = JSON.parse(readFileSync(articlesPath, "utf-8"));
    const yearMonthMap = /* @__PURE__ */ new Map();
    articleIds.forEach((id) => {
      const yearMonth = id.substring(0, 6);
      if (!yearMonthMap.has(yearMonth)) {
        yearMonthMap.set(yearMonth, []);
      }
      yearMonthMap.get(yearMonth).push(id);
    });
    const articlesPerPage = 4;
    const paths = [];
    yearMonthMap.forEach((ids, yearMonth) => {
      const totalPages = Math.ceil(ids.length / articlesPerPage);
      for (let i = 1; i <= totalPages; i++) {
        paths.push({
          params: { yearMonth, page: String(i) }
        });
      }
    });
    return paths;
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return [];
  }
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { yearMonth, page } = Astro2.params;
  const currentPage = parseInt(page || "1");
  let articles = [];
  let totalPages = 1;
  let year = "2024";
  let month = 1;
  try {
    const articlesPath = join(process.cwd(), "public", "articles", "list.json");
    const articleIds = JSON.parse(readFileSync(articlesPath, "utf-8"));
    const filteredIds = articleIds.filter((id) => id.startsWith(yearMonth));
    const articlesPerPage = 4;
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const idsToShow = filteredIds.slice(start, end);
    articles = await Promise.all(
      idsToShow.map(async (id) => {
        const articlePath = join(process.cwd(), "public", "articles", `${id}.json`);
        return JSON.parse(readFileSync(articlePath, "utf-8"));
      })
    );
    totalPages = Math.ceil(filteredIds.length / articlesPerPage);
    year = yearMonth.substring(0, 4);
    month = parseInt(yearMonth.substring(4, 6));
  } catch (error) {
    console.error("Error loading articles:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${year}\u5E74${month}\u6708\u306E\u30A2\u30FC\u30AB\u30A4\u30D6 - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <div id="filterInfo"> <div class="filter-info"> <strong>${year}年${month}月</strong> の記事
<a href="/" class="clear-filter">フィルタをクリア</a> </div> </div> <main id="content"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article, "filterType": "archive", "filterValue": yearMonth })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/archive/${yearMonth}/page/` })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/archive/[yearMonth]/page/[page].astro", void 0);

const $$file = "D:/blog/src/pages/archive/[yearMonth]/page/[page].astro";
const $$url = "/archive/[yearMonth]/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
