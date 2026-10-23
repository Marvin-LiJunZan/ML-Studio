/* 首帧前定下主题，避免浅色闪一下（外置以支持严格 CSP） */
(function () {
  try {
    var saved = localStorage.getItem("mls-site-theme");
    var system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", saved || system);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
