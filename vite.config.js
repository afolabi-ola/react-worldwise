import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      fix: true,
      cache: false,
      overrideConfigFile: '.eslintrc.cjs', // Explicitly specify your ESLint config file
      failOnError: false, // Disable overlay for ESLint errors
    }),
  ],
  server: {
    open: true,
  },
});
// import eslintPlugin from 'vite-plugin-eslint';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [
//     eslintPlugin({
//       emitWarning: true,
//       emitError: true,
//       failOnError: false, // Disable overlay for ESLint errors
//       failOnWarning: false,
//     }),
//   ],
//   server: {
//     hmr: {
//       overlay: false, // Disable overlay for all errors
//     },
//   },
// });
