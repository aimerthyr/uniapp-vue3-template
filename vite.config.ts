import uni from '@dcloudio/vite-plugin-uni';
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniTailwind()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@api': resolve(__dirname, './src/api'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@stores': resolve(__dirname, './src/stores'),
      '@uni_modules': resolve(__dirname, './uni_modules'),
    },
  },
});
