import { c as createComponent, a as createAstro, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DV-HJCWE.mjs';
import { $ as $$Layout, a as $$Header, b as $$Sidebar } from '../../chunks/Sidebar_De376onF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch(new URL("/articles/list.json", "http://localhost:4321"));
  const articleIds = await response.json();
  return articleIds.map((id) => ({
    params: { id }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const [articleResponse, listResponse] = await Promise.all([
    fetch(new URL(`/articles/${id}.json`, Astro2.site || "http://localhost:4321")),
    fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"))
  ]);
  const [article, articleIds] = await Promise.all([
    articleResponse.json(),
    listResponse.json()
  ]);
  const currentIndex = articleIds.indexOf(id);
  const nextId = currentIndex > 0 ? articleIds[currentIndex - 1] : null;
  const prevId = currentIndex < articleIds.length - 1 ? articleIds[currentIndex + 1] : null;
  let nextArticle = null;
  let prevArticle = null;
  if (nextId) {
    const nextResponse = await fetch(new URL(`/articles/${nextId}.json`, Astro2.site || "http://localhost:4321"));
    nextArticle = await nextResponse.json();
  }
  if (prevId) {
    const prevResponse = await fetch(new URL(`/articles/${prevId}.json`, Astro2.site || "http://localhost:4321"));
    prevArticle = await prevResponse.json();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article.title} - \u79C1\u306E\u65E5\u8A18` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="main-content"> <main> <article> <div class="date">${article.date}</div> <h2>${article.title}</h2> <div class="meta"> <a${addAttribute(`/category/${article.category}`, "href")} class="category">${article.category}</a> ${article.tags && renderTemplate`<div class="tags"> ${article.tags.map((tag) => renderTemplate`<a${addAttribute(`/tag/${tag}`, "href")} class="tag">#${tag}</a>`)} </div>`} </div> <div class="article-content">${unescapeHTML(article.content.replace(/\n/g, "<br>"))}</div> </article> <!-- 前後の記事ナビゲーション + ホームボタン --> <nav class="article-nav"> ${prevArticle ? renderTemplate`<a${addAttribute(`/article/${prevArticle.id}`, "href")} class="article-nav-item prev"> <span class="nav-label">← 過去の記事</span> <span class="nav-title">${prevArticle.title}</span> </a>` : renderTemplate`<div class="article-nav-item-spacer"></div>`} <a href="/" class="home-button" id="homeButton" title="記事一覧に戻る"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> <polyline points="9 22 9 12 15 12 15 22"></polyline> </svg> </a> ${nextArticle ? renderTemplate`<a${addAttribute(`/article/${nextArticle.id}`, "href")} class="article-nav-item next"> <span class="nav-label">新しい記事 →</span> <span class="nav-title">${nextArticle.title}</span> </a>` : renderTemplate`<div class="article-nav-item-spacer"></div>`} </nav> </main> </div> </div> ` })} ${renderScript($$result, "D:/blog/src/pages/article/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/blog/src/pages/article/[id].astro", void 0);

const $$file = "D:/blog/src/pages/article/[id].astro";
const $$url = "/article/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
