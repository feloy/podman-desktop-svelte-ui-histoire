import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  plugins: [
    HstSvelte(),
  ],
  setupFile: '/histoire-setup.ts',
  vite: {
		base: '/podman-desktop-svelte-ui-histoire/',
	},
  routerMode: 'hash'
});

