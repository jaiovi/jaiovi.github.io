// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jaiovi.github.io',
  base: '/jaiovi.github.io',
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Outfit",
    cssVariable: "--font-body",
  }],
  viewTransitions: true,
});
