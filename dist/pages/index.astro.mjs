import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../chunks/Sidebar_De376onF.mjs';
import { $ as $$ArticleCard, a as $$Pagination } from '../chunks/Pagination_DakFGdiv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const listResponse = await fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"));
  const articleIds = await listResponse.json();
  const articlesPerPage = 4;
  const currentPage = 1;
  const start = 0;
  const end = articlesPerPage;
  const idsToShow = articleIds.slice(start, end);
  const articles = await Promise.all(
    idsToShow.map(async (id) => {
      const res = await fetch(new URL(`/articles/${id}.json`, Astro2.site || "http://localhost:4321"));
      return await res.json();
    })
  );
  const totalPages = Math.ceil(articleIds.length / articlesPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u79C1\u306E\u65E5\u8A18" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <main id="content"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </main> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/page/" })}`} </div> </div> ` })}`;
}, "D:/blog/src/pages/index.astro", void 0);

const $$file = "D:/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
