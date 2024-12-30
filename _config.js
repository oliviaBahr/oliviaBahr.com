import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import icons from "lume/plugins/icons.ts";
import highlight from "lume/plugins/code_highlight.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume({ src: "./src" });

site.use(sourceMaps());
site.use(base_path());
site.use(check_urls());
site.use(code_highlight());
site.use(icons());
site.use(
  highlight({
    theme: {
      name: "foundation",
      path: "/styles/code_theme.css",
      languages: ["shell", "bash"],
    },
    options: {
      ignoreUnescapedHTML: true,
    },
  })
);
site.use(
  google_fonts({
    cssFile: "styles/main.css",
    fonts: {
      text: "https://fonts.googleapis.com/css2?family=Sono:wght@200..800",
      shrikhand: "https://fonts.googleapis.com/css2?family=Shrikhand",
      mono: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800",
    },
  })
);
site.use(
  tailwindcss({
    content: ["./src/**/*.vto"],
    options: {
      theme: {
        extend: {
          colors: {
            paper: {
              50: "#FFFCF0",
              100: "#F9F5E9",
              200: "#F2F0E5",
              300: "#E6E4D9",
              400: "#DAD8CE",
              500: "#CECDC3",
              600: "#B7B5AC",
              700: "#6F6E69",
              800: "#343331",
            },
            dark: {
              red: "#AF3029",
              orange: "#BC5215",
              yellow: "#AD8301",
              green: "#66800B",
              cyan: "#24837B",
              blue: "#205EA6",
              purple: "#5E409D",
              magenta: "#A02F6F",
            },
            light: {
              red: "#D14D41",
              orange: "#DA702C",
              yellow: "#D0A215",
              green: "#879A39",
              cyan: "#3AA99F",
              blue: "#4385BE",
              purple: "#8B7EC8",
              magenta: "#CE5D97",
            },
          },
        },
      },
    },
  })
);
site.use(postcss());

site.copy("static");
site.copy("_assets");
site.copy("styles");

site.filter("enumerate", (pages) => {
  if (!Array.isArray(pages)) {
    return {};
  }
  return pages.reduce((acc, page, index) => {
    acc[index] = page;
    return acc;
  }, {});
});

export default site;
