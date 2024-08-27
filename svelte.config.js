import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build', 
      assets: 'build',
      fallback: 'index.html',  
    }),
    files: {
      appTemplate: 'index.html'  
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/FlorescaKarl' : '', 
    },
   
  },
  plugins: [sveltekit()]
};

export default config;
