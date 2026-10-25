/* ML Studio 站点脚本 —— 无依赖 */
(function () {
  "use strict";

  /* ============================================================
     1. 仓库地址：只改这一处，页面上所有 GitHub / Releases 链接同步
        带 download-link 属性的按钮会指向 /releases
     ============================================================ */
  var REPO_URL = "https://github.com/Marvin-LiJunZan/ML-Studio";

  if (REPO_URL) {
    document.querySelectorAll("[data-repo]").forEach(function (el) {
      el.href = el.hasAttribute("download-link") ? REPO_URL + "/releases" : REPO_URL;
    });
  }

  /* ---------- 2. 主题切换 ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeBtn");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("mls-site-theme", theme); } catch (e) {}
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", theme === "dark" ? "切换到浅色主题" : "切换到深色主题");
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    setTheme(root.getAttribute("data-theme") || "light");
  }

  /* ---------- 3. 导航：滚动描边 + 移动端展开 ---------- */
  var nav = document.querySelector(".nav");
  var navLinks = document.getElementById("navLinks");
  var navToggle = document.getElementById("navToggle");

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "收起导航菜单" : "展开导航菜单");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 4. 滚动入场 ---------- */
  var revealTargets = []
    .concat(Array.from(document.querySelectorAll(".section-head, .card, .step, .feature")))
    .concat(Array.from(document.querySelectorAll(".hero-shot, .report-example, .code-card, .download-card")));

  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // 同组元素做一点错峰，避免整排同时弹入
        var delay = (Array.prototype.indexOf.call(el.parentElement.children, el) % 4) * 70;
        setTimeout(function () { el.classList.add("is-in"); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- 5. 页脚年份 ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
