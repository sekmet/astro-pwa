import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
    site: "https://siterapido.netlify.app/",
    integrations: [
      react(),
      image({
        serviceEntryPoint: "@astrojs/image/sharp",
      }),
      sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
      }),
      webmanifest({
        /**
         * required
         **/
        name: 'Meu Site Rapido',
        /**
         * optional
         **/
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
  
        short_name: 'SiteRapido',
        description: 'Criamos sites rápidos, ultra rápidos!',
        start_url: '/',
        theme_color: '#2b5797',
        background_color: '#2b5797',
        display: 'standalone',
      }),
    ],
    vite: {
      ssr: {
        external: ["svgo"],
      },
    },
  });
  
