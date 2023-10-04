import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import path from 'path';

const SRC_PATH = path.resolve(__dirname, 'src');
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'icons');

// Общие настройки
export default defineConfig(() => {
  return {
    base: '/Portfolio',
    server: {
      open: true,
    },
    build: {
      outDir: './build',
    },
    // Плагины
    plugins: [
      // Оптимизация изображений
      ViteImageOptimizer({
        png: {
          quality: 75,
        },
      }),
      // Создание SVG-спрайта (Inline)
      createSvgSpritePlugin({
        svgFolder: SVG_FOLDER_PATH,
        transformIndexHtmlTag: {
          injectTo: 'body',
        },
      }),
    ],
  };
});
