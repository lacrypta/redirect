import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Define Config
  return defineConfig({
    plugins: [
      {
        name: "html-transform",
        transformIndexHtml(html) {
          return html.replace(
            /<title>(.*?)<\/title>/,
            `<title>${process.env.VITE_TITLE}</title>`
          );
        },
      },
    ],
  });
};
