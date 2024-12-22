import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import base_path from "lume/plugins/base_path.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import mdx from "lume/plugins/mdx.ts";
import nav from "lume/plugins/nav.ts";
// import pagefind from "lume/plugins/pagefind.ts";
// import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(tailwindcss({
  extensions: [".mdx", ".tsx"],
  options: {
    theme: {
      extend: {
        colors: {
          // Base tones
          stone: {
            950: "#100F0F", // black
            900: "#1C1B1A",
            850: "#282726",
            800: "#343331",
            750: "#403E3C",
            700: "#575653",
            600: "#6F6E69",
            500: "#878580",
            300: "#B7B5AC",
            200: "#CECDC3",
            150: "#DAD8CE",
            100: "#E6E4D9",
            50: "#F2F0E5",
            paper: "#FFFCF0",
          },
          // Dark colors
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
          paper: {
            0: "#FFFCF0",
            10: "#F9F5E9",
            20: "#F2F0E5",
            30: "#E6E4D9",
            40: "#DAD8CE",
            50: "#CECDC3",
            60: "#B7B5AC",
            70: "#6F6E69",
            80: "#343331",
          },
          // Light colors
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
}));
site.use(postcss());

site.use(jsx());
site.use(mdx({ extensions: [".mdx", ".md"] }));
site.use(base_path());
site.use(check_urls());
site.use(code_highlight());
site.use(nav());
// site.use(pagefind());
// site.use(sitemap());
site.use(google_fonts({
  cssFile: "styles.css",
  fonts: {
    text:
      "https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap",
    display:
      "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap",
    yeseva: "https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap",
    shrikhand:
      "https://fonts.googleapis.com/css2?family=Shrikhand&display=swap",
  },
}));

site.data("layout", "Layout.tsx");
site.copy("static");
site.copy("styles.css");

export default site;
