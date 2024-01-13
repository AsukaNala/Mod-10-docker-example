import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", //this host can listen on all IP addresses
    port: 8080, //default is 5173 but can change port in .config fuile
  },
});
