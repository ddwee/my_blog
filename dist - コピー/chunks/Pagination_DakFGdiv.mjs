import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, d as renderScript, b as renderTemplate } from './astro/server_DV-HJCWE.mjs';
import 'clsx';
/* empty css                               */

const $$Astro$1 = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article, filterType, filterValue } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class="date">${article.date}</div> <h2><a${addAttribute(`/article/${article.id}`, "href")} class="article-link"${addAttribute(article.id, "data-article-id")}${addAttribute(filterType, "data-filter-type")}${addAttribute(filterValue, "data-filter-value")}>${article.title}</a></h2> <div class="meta"> <a${addAttribute(`/category/${article.category}`, "href")} class="category">${article.category}</a> ${article.tags && renderTemplate`<div class="tags"> ${article.tags.map((tag) => renderTemplate`<a${addAttribute(`/tag/${tag}`, "href")} class="tag">#${tag}</a>`)} </div>`} </div> </article> ${renderScript($$result, "D:/blog/src/components/ArticleCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/blog/src/components/ArticleCard.astro", void 0);

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl } = Astro2.props;
  function generatePageNumbers(current, total) {
    const pages = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(total);
      } else if (current >= total - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = total - 3; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(total);
      }
    }
    return pages;
  }
  const pageNumbers = generatePageNumbers(currentPage, totalPages);
  return renderTemplate`${maybeRenderHead()}<div class="pagination" data-astro-cid-d776pwuy> ${pageNumbers.map((pageNum) => pageNum === "..." ? renderTemplate`<span class="page-number ellipsis" data-astro-cid-d776pwuy>...</span>` : renderTemplate`<a${addAttribute(`${baseUrl}${pageNum}`, "href")}${addAttribute(`page-number ${pageNum === currentPage ? "active" : ""}`, "class")} data-astro-cid-d776pwuy> ${pageNum} </a>`)} </div> `;
}, "D:/blog/src/components/Pagination.astro", void 0);

export { $$ArticleCard as $, $$Pagination as a };
