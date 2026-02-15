import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://ianwest.dev",
  adapter: cloudflare(),
  env: {
    schema: {
      TURSO_DATABASE_URL: envField.string({ context: "server", access: "secret" }),
      TURSO_AUTH_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});
