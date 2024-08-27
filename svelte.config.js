import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {

    files: {
      appTemplate: 'index.html'
    }
  },
  plugins: [sveltekit()]
};

export default config;
