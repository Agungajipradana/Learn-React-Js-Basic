// Importing defineConfig from Vite to define the project configuration
import { defineConfig } from "vite";

// Importing the official Vite plugin for React to enable Fast Refresh and other optimizations
import react from "@vitejs/plugin-react";

// Exporting the Vite configuration using defineConfig
// https://vite.dev/config/ - Official documentation for Vite configuration
export default defineConfig({
  // Adding the React plugin to enable support for React in the project
  plugins: [react()],

  // Configuration for the build process
  build: {
    rollupOptions: {
      input: {
        // Defining multiple entry points for the build
        index: "index.html", // Main entry point
        hello_world: "hello-world.html", // Additional entry point for a separate HTML file
      },
    },
  },
});
