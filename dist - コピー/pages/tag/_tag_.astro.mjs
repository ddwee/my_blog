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
  const tags = /* @__PURE__ */ new Set();
  articles.forEach((article) => {
    if (article.tags) {
      article.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).map((tag) => ({
    params: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const listResponse = await fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const allArticles = await Promise.all(
    articleIds.map(async (id) => {
      const res = await fetch(new URL(`/articles/${id}.json`, Astro2.site || "http://localhost:4321"));
      return await res.json();
    })
  );
  const filteredArticles = allArticles.filter(
    (article) => article.tags && article.tags.includes(tag)
  );
  const articlesPerPage = 4;
  const currentPage = 1;
  const start = 0;
  const end = articlesPerPage;
  const articlesToShow = filteredArticles.slice(start, end);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u30BF\u30B0: ${tag} - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <div id="filterInfo"> <div class="filter-info"> <strong>タグ: ${tag}</strong> の記事
<a href="/" class="clear-filter">フィルタをクリア</a> </div> </div> <main id="content"> ${articlesToShow.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article, "filterType": "tag", "filterValue": tag })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/tag/${tag}/page/` })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/tag/[tag].astro", void 0);

const $$file = "D:/blog/src/pages/tag/[tag].astro";
const $$url = "/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
