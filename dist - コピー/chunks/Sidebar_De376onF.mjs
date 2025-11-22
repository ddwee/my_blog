import { c as createComponent, a as createAstro, e as addAttribute, d as renderScript, b as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot, m as maybeRenderHead, h as defineScriptVars } from './astro/server_DV-HJCWE.mjs';
import 'clsx';
/* empty css                               */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/blog/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/blog/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <h1><a href="/">私の日記</a></h1> <p>日々の出来事を綴ります</p> </header>`;
}, "D:/blog/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const response = await fetch(new URL("/articles/list.json", Astro2.site || "http://localhost:4321"));
  const articleIds = await response.json();
  const archiveData = {};
  articleIds.forEach((id) => {
    const year = id.substring(0, 4);
    const month = id.substring(4, 6);
    if (!archiveData[year]) {
      archiveData[year] = {};
    }
    if (!archiveData[year][month]) {
      archiveData[year][month] = 0;
    }
    archiveData[year][month]++;
  });
  const years = Object.keys(archiveData).sort((a, b) => b.localeCompare(a));
  return renderTemplate(_a || (_a = __template(["", '<aside class="sidebar"> <h3>\u30A2\u30FC\u30AB\u30A4\u30D6</h3> <select class="archive-select" id="yearSelect"> <option value="">\u5E74\u3092\u9078\u629E</option> ', ' </select> <ul class="archive-list" id="archiveList"></ul> </aside> <script>(function(){', "\n  function initArchive() {\n    const yearSelect = document.getElementById('yearSelect');\n    const archiveList = document.getElementById('archiveList');\n\n    if (!yearSelect || !archiveList) return;\n\n    // \u65E2\u5B58\u306E\u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u30AF\u30EA\u30A2\n    const newYearSelect = yearSelect.cloneNode(true);\n    yearSelect.parentNode.replaceChild(newYearSelect, yearSelect);\n\n    newYearSelect.addEventListener('change', (e) => {\n      const selectedYear = e.target.value;\n      \n      if (!selectedYear) {\n        archiveList.innerHTML = '';\n        return;\n      }\n\n      const months = archiveData[selectedYear];\n      const sortedMonths = Object.keys(months).sort((a, b) => b.localeCompare(a));\n      \n      archiveList.innerHTML = sortedMonths.map(month => `\n        <li>\n          <a href=\"/archive/${selectedYear}${month}\">\n            <span>${parseInt(month)}\u6708</span>\n            <span class=\"count\">(${months[month]}\u4EF6)</span>\n          </a>\n        </li>\n      `).join('');\n    });\n  }\n\n  // \u521D\u56DE\u5B9F\u884C\n  initArchive();\n\n  // View Transitions\u5BFE\u5FDC\uFF1A\u30DA\u30FC\u30B8\u9077\u79FB\u5F8C\u3082\u518D\u5B9F\u884C\n  document.addEventListener('astro:page-load', initArchive);\n})();<\/script>"], ["", '<aside class="sidebar"> <h3>\u30A2\u30FC\u30AB\u30A4\u30D6</h3> <select class="archive-select" id="yearSelect"> <option value="">\u5E74\u3092\u9078\u629E</option> ', ' </select> <ul class="archive-list" id="archiveList"></ul> </aside> <script>(function(){', "\n  function initArchive() {\n    const yearSelect = document.getElementById('yearSelect');\n    const archiveList = document.getElementById('archiveList');\n\n    if (!yearSelect || !archiveList) return;\n\n    // \u65E2\u5B58\u306E\u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u30AF\u30EA\u30A2\n    const newYearSelect = yearSelect.cloneNode(true);\n    yearSelect.parentNode.replaceChild(newYearSelect, yearSelect);\n\n    newYearSelect.addEventListener('change', (e) => {\n      const selectedYear = e.target.value;\n      \n      if (!selectedYear) {\n        archiveList.innerHTML = '';\n        return;\n      }\n\n      const months = archiveData[selectedYear];\n      const sortedMonths = Object.keys(months).sort((a, b) => b.localeCompare(a));\n      \n      archiveList.innerHTML = sortedMonths.map(month => \\`\n        <li>\n          <a href=\"/archive/\\${selectedYear}\\${month}\">\n            <span>\\${parseInt(month)}\u6708</span>\n            <span class=\"count\">(\\${months[month]}\u4EF6)</span>\n          </a>\n        </li>\n      \\`).join('');\n    });\n  }\n\n  // \u521D\u56DE\u5B9F\u884C\n  initArchive();\n\n  // View Transitions\u5BFE\u5FDC\uFF1A\u30DA\u30FC\u30B8\u9077\u79FB\u5F8C\u3082\u518D\u5B9F\u884C\n  document.addEventListener('astro:page-load', initArchive);\n})();<\/script>"])), maybeRenderHead(), years.map((year) => {
    const totalCount = Object.values(archiveData[year]).reduce((a, b) => a + b, 0);
    return renderTemplate`<option${addAttribute(year, "value")}>${year}年 (${totalCount}件)</option>`;
  }), defineScriptVars({ archiveData }));
}, "D:/blog/src/components/Sidebar.astro", void 0);

export { $$Layout as $, $$Header as a, $$Sidebar as b };
