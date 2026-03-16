import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: 'resources/translate.js',
            name: 'Translate',
            fileName: (format) => `translate.${format}.js`,
            formats: ['es', 'cjs', 'umd'],
        },
        rollupOptions: {
            // lodash and markdown-it are bundled for standalone use
        },
    },
});
