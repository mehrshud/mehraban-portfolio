import { defineConfig } from 'vite';
import tailwind from 'vite-plugin-tailwind';
export default defineConfig({
  plugins: [tailwind()],
  build: {
    outDir: 'build'
  }
});
