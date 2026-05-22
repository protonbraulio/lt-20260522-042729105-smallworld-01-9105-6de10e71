import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://lt-20260522-042729105-smallworld-01-9105-6de10e71.pages.dev",
  integrations: [sitemap()],
});
