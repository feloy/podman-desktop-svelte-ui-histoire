import config from './tailwind.config.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ['./src/**/*.{svelte,ts,css}', './node_modules/@podman-desktop/**/*.{svelte,ts,css}'],
};


