const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

module.exports = defineConfig(({ command }) => {
  const alias = {
    '@': path.resolve(__dirname, 'src'),
  };
  const extensions = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'];

  if (command === 'serve') {
    return {
      plugins: [vue()],
      resolve: {
        alias,
        extensions,
      },
      server: {
        host: '0.0.0.0',
        port: 8080,
      },
    };
  }

  return {
    plugins: [vue()],
    resolve: {
      alias,
      extensions,
    },
    build: {
      sourcemap: false,
      emptyOutDir: false,
      rollupOptions: {
        input: {
          'base-editor': path.resolve(__dirname, 'src/base-editor.js'),
          'codemirror-editor': path.resolve(__dirname, 'src/codemirror-editor.js'),
          preview: path.resolve(__dirname, 'src/preview.js'),
          'preview-html': path.resolve(__dirname, 'src/preview-html.js'),
        },
        external: ['vue'],
        output: [
          {
            dir: 'es',
            format: 'es',
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
            exports: 'named',
            globals: {
              vue: 'Vue',
            },
          },
          {
            dir: 'lib',
            format: 'cjs',
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
            exports: 'named',
            globals: {
              vue: 'Vue',
            },
          },
        ],
      },
    },
  };
});
