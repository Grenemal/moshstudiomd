// vite.config.ts
import path from "node:path";
import process from "node:process";
import vue from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///D:/Users/Wanju/Documents/GitHub/moshstudiomdnew/node_modules/vite-plugin-node-polyfills/dist/index.js";
var __vite_injected_original_dirname = "D:\\Users\\Wanju\\Documents\\GitHub\\moshstudiomdnew";
var vite_config_default = defineConfig({
  base: process.env.SERVER_ENV === `NETLIFY` ? `` : ``,
  // 基本路径, 建议以绝对路径跟随访问目录
  define: {
    process
  },
  plugins: [
    vue(),
    UnoCSS(),
    // vueDevTools(),
    nodePolyfills({
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        fs: `memfs`
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__vite_injected_original_dirname, `index.html`)
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, `./src`)
    }
  },
  css: {
    devSourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxXYW5qdVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG1vc2hzdHVkaW9tZG5ld1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVXNlcnNcXFxcV2FuanVcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxtb3Noc3R1ZGlvbWRuZXdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1VzZXJzL1dhbmp1L0RvY3VtZW50cy9HaXRIdWIvbW9zaHN0dWRpb21kbmV3L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcblxyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfRU5WID09PSBgTkVUTElGWWAgPyBgYCA6IGBgLCAvLyBcdTU3RkFcdTY3MkNcdThERUZcdTVGODQsIFx1NUVGQVx1OEJBRVx1NEVFNVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1OERERlx1OTY4Rlx1OEJCRlx1OTVFRVx1NzZFRVx1NUY1NVxyXG4gIGRlZmluZToge1xyXG4gICAgcHJvY2VzcyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgVW5vQ1NTKCksXHJcbiAgICAvLyB2dWVEZXZUb29scygpLFxyXG4gICAgbm9kZVBvbHlmaWxscyh7XHJcbiAgICAgIG92ZXJyaWRlczoge1xyXG4gICAgICAgIC8vIFNpbmNlIGBmc2AgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2Vycywgd2UgY2FuIHVzZSB0aGUgYG1lbWZzYCBwYWNrYWdlIHRvIHBvbHlmaWxsIGl0LlxyXG4gICAgICAgIGZzOiBgbWVtZnNgLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgaW5kZXg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGBpbmRleC5odG1sYCksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9zcmNgKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLE9BQU8sVUFBVTtBQUM1VixPQUFPLGFBQWE7QUFFcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQVQ5QixJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsSUFBSSxlQUFlLFlBQVksS0FBSztBQUFBO0FBQUEsRUFDbEQsUUFBUTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUE7QUFBQSxJQUVQLGNBQWM7QUFBQSxNQUNaLFdBQVc7QUFBQTtBQUFBLFFBRVQsSUFBSTtBQUFBLE1BQ047QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDN0M7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
