import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

const algorithm:('gzip' | 'brotli' | 'none') = 'gzip';

const viteCompressionOptions = {
  filter: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i , // 需要壓縮的檔案
  threshold: 1024, // 檔案容量大於這個值進行壓縮
  algorithm: algorithm , // 壓縮方式
  ext: 'gz', // 字尾名
  deleteOriginFile: true, // 壓縮後是否刪除壓縮原始檔
}
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),viteCompression(viteCompressionOptions)],
  publicDir:'public',
})
