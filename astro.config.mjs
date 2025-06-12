import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    site: 'https://yourdomain.com', // adapte à ton URL finale
});
