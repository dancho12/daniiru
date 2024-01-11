import {
  fileURLToPath,
  URL
} from 'node:url'
import {
  resolve,
  dirname
} from 'node:path'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// import vitePluginRequire from "vite-plugin-require";
// import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(
        import.meta.url)), './src/i18n/locales/**'), // provide a path to the folder where you'll store translation data (see below)
    }),
    // vitePluginRequire()
    // requireTransform({}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url)),
    }
  }
})