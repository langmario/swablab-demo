import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.swablab.de",
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      DIRECTUS_HOST: envField.string({ context: "client", access: "public" }),
    },
  },
});
