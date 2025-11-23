// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
  experimental: {
    
  },

    markdown: {
    // 画像最適化を有効化
    image: {
      service: {
        entrypoint: 'astro/assets/services/sharp'
      }
    }
  }
});