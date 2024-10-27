import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      __IMAGE_URL__:
        mode === "production"
          ? JSON.stringify(env.VITE_NGINX_IMAGE_URL)
          : JSON.stringify(env.VITE_LOCAL_IMAGE_URL),
    },
  };
});
