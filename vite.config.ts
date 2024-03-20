import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
// import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    svgr(), 
    [
      // @ts-expect-error
      "@locator/babel-jsx/dist",
      {
      // @ts-expect-error
        env: "development",
      },
    ]
  ],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //   },
    // },
  },

});
