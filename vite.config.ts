import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Define Config
  return defineConfig({
    plugins: [
      {
        name: "title-transform",
        transformIndexHtml(html) {
          return html.replace(
            /<title>(.*?)<\/title>/,
            `<title>${process.env.VITE_TITLE}</title>`
          );
        },
      },
      {
        name: "google-analytics",
        transformIndexHtml(html) {
          return html.replace(
            /%ANALYTICS_TAG%/g,
            process.env.VITE_GOOGLE_ANALYTICS as string
          );
        },
      },
    ],
  });
};
