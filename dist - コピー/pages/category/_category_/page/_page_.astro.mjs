import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../../../../chunks/Sidebar_De376onF.mjs';
import { $ as $$ArticleCard, a as $$Pagination } from '../../../../chunks/Pagination_DakFGdiv.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const listResponse = await fetch(new URL("/articles/list.json", "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const articles = await Promise.all(
    articleIds.map(async (id) => {
      const res = await fetch(new URL(`/articles/${id}.json`, "http://localhost:4321"));
      return await res.json();
    })
  );
  const categoryMap = /* @__PURE__ */ new Map();
  articles.forEach((article) => {
    if (article.category) {
      if (!categoryMap.has(article.category)) {
        categoryMap.set(article.category, []);
      }
      categoryMap.get(article.category).push(article);
    }
  });
  const articlesPerPage = 4;
  const paths = [];
  categoryMap.forEach((articles2, category) => {
    const totalPages = Math.ceil(articles2.length / articlesPerPage);
    for (let i = 1; i <= totalPages; i++) {
      paths.push({
        params: { category, page: String(i) }
      });
    }
  });
  return paths;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { category, page } = Astro2.params;
  const currentPage = parseInt(page);
  const listResponse = await fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const allArticles = await Promise.all(
    articleIds.map(async (id) => {
      const res = await fetch(new URL(`/articles/${id}.json`, Astro2.site || "http://localhost:4321"));
      return await res.json();
    })
  );
  const filteredArticles = allArticles.filter((article) => article.category === category);
  const articlesPerPage = 4;
  const start = (currentPage - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  const articlesToShow = filteredArticles.slice(start, end);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u30AB\u30C6\u30B4\u30EA: ${category} - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <div id="filterInfo"> <div class="filter-info"> <strong>カテゴリ: ${category}</strong> の記事
<a href="/" class="clear-filter">フィルタをクリア</a> </div> </div> <main id="content"> ${articlesToShow.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article, "filterType": "category", "filterValue": category })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/category/${category}/page/` })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/category/[category]/page/[page].astro", void 0);

const $$file = "D:/blog/src/pages/category/[category]/page/[page].astro";
const $$url = "/category/[category]/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
