import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import base_path from "lume/plugins/base_path.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import mdx from "lume/plugins/mdx.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume();

site.use(jsx());
site.use(base_path());
site.use(check_urls());
site.use(code_highlight());
site.use(mdx({
  extensions: [".mdx", ".md"],
}));
site.use(nav());
site.use(pagefind());
site.use(sitemap());
site.use(google_fonts({
    fonts: {
        text: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Quicksand:wght@300..700&display=swap"
    }
}));

site.data("layout", "Layout.tsx");
site.copy("static");

export default site;
