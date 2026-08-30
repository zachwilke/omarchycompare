/*
 * Runs before <body> is parsed so a light reader never sees a dark flash.
 * Dark is the default, so only "light" needs stamping.
 *
 * This lives in /public rather than as an inline <script> in the layout on
 * purpose: React 19 logs a console error for script tags rendered inside a
 * component, and next/script's beforeInteractive queues INLINE code for
 * Next's loader — which paints dark first. A blocking src script does not.
 *
 * The key and the colour are mirrored in lib/theme.ts. Keep them in step.
 */
(function () {
  try {
    if (localStorage.getItem("omarchycompare-theme") !== "light") return;

    document.documentElement.dataset.theme = "light";

    var paintChrome = function () {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", "#f8f9fb");
    };

    // The meta tag may not be parsed yet depending on where this lands.
    paintChrome();
    document.addEventListener("DOMContentLoaded", paintChrome, { once: true });
  } catch (error) {
    // Blocked storage — the dark default stands.
  }
})();
