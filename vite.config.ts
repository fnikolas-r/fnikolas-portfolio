import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"; //This is for development only

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
