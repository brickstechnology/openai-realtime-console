import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      svgr(), // Transforms SVGs into React components
  ],
  resolve: {
    alias: {
      // Setup base path aliases if needed
      '@': resolve(__dirname, './src'),
    },
  },
  // Support for environment variables like in Create React App
  define: {
    'process.env': process.env,
  },
  server: {
    port: env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000,
    open: false,
  },
  // CSS preprocessor options
  css: {
    preprocessorOptions: {
      scss: {
        // Add any SCSS options if needed
      },
    },
  },
  build: {
    outDir: 'build', // Same output directory as CRA
  },
  }
}); 
