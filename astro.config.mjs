// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import getPort from 'get-port';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      hmr: {
        host: "localhost",
        port: await getPort(),
        protocol: "ws",
      },
    },
  },
  integrations: [
    starlight({
      title: "AppSwap",
      logo: {
        src: "./public/favicon.svg",
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/appswap-dev/docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "guides/introduction" },
          ],
        },
        {
          label: "CLI",
          autogenerate: { directory: "cli" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
