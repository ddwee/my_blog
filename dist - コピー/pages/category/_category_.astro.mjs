import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../../chunks/Sidebar_De376onF.mjs';
import { $ as $$ArticleCard, a as $$Pagination } from '../../chunks/Pagination_DakFGdiv.mjs';
export { renderers } from '../../renderers.mjs';

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
  const categories = /* @__PURE__ */ new Set();
  articles.forEach((article) => {
    if (article.category) {
      categories.add(article.category);
    }
  });
  return Array.from(categories).map((category) => ({
    params: { category }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
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
  const currentPage = 1;
  const start = 0;
  const end = articlesPerPage;
  const articlesToShow = filteredArticles.slice(start, end);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u30AB\u30C6\u30B4\u30EA: ${category} - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <div id="filterInfo"> <div class="filter-info"> <strong>カテゴリ: ${category}</strong> の記事
<a href="/" class="clear-filter">フィルタをクリア</a> </div> </div> <main id="content"> ${articlesToShow.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article, "filterType": "category", "filterValue": category })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/category/${category}/page/` })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/category/[category].astro", void 0);

const $$file = "D:/blog/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
