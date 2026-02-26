import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        // Specifichiamo a Vite di generare i file dentro le risorse di Spring
        outDir: "../../src/main/resources/static",
        emptyOutDir: true, // Pulisce la cartella prima di ogni build
    },
});
