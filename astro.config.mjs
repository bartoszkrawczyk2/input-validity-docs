import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://input-validity.pages.dev/",
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      title: "input-validity",
      social: {
        github: "https://github.com/bartoszkrawczyk2/input-validity",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Introduction", link: "/getting-started/introduction" },
            { label: "How to install", link: "/getting-started/install" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Examples", link: "/guides/examples" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
