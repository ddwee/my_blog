import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../../chunks/Sidebar_De376onF.mjs';
import { $ as $$ArticleCard, a as $$Pagination } from '../../chunks/Pagination_DakFGdiv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const listResponse = await fetch(new URL("/articles/list.json", "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const yearMonths = /* @__PURE__ */ new Set();
  articleIds.forEach((id) => {
    const yearMonth = id.substring(0, 6);
    yearMonths.add(yearMonth);
  });
  return Array.from(yearMonths).map((yearMonth) => ({
    params: { yearMonth }
  }));
}
const $$yearMonth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$yearMonth;
  const { yearMonth } = Astro2.params;
  const listResponse = await fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const filteredIds = articleIds.filter((id) => id.startsWith(yearMonth));
  const articlesPerPage = 4;
  const currentPage = 1;
  const start = 0;
  const end = articlesPerPage;
  const idsToShow = filteredIds.slice(start, end);
  const articles = await Promise.all(
    idsToShow.map(async (id) => {
      const res = await fetch(new URL(`/articles/${id}.json`, Astro2.site || "http://localhost:4321"));
      return await res.json();
    })
  );
  const totalPages = Math.ceil(filteredIds.length / articlesPerPage);
  const year = yearMonth.substring(0, 4);
  const month = parseInt(yearMonth.substring(4, 6));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${year}\u5E74${month}\u6708\u306E\u30A2\u30FC\u30AB\u30A4\u30D6 - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <div id="filterInfo"> <div class="filter-info"> <strong>${year}年${month}月</strong> の記事
<a href="/" class="clear-filter">フィルタをクリア</a> </div> </div> <main id="content"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article, "filterType": "archive", "filterValue": yearMonth })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/archive/${yearMonth}/page/` })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/archive/[yearMonth].astro", void 0);

const $$file = "D:/blog/src/pages/archive/[yearMonth].astro";
const $$url = "/archive/[yearMonth]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$yearMonth,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
