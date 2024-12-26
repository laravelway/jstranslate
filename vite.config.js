import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/translate.js'],
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: 'resources/translate.js',
            name: 'Translate',
            fileName: (format) => `translate.${format}.js`,
            formats: ['es', 'cjs', 'umd'], // Generate multiple formats
        },

        rollupOptions: {
            globals: {
                // Add global dependencies if needed
            },
            // output: {
            //     entryFileNames: `[name].js`,
            //     chunkFileNames: `[name].js`,
            //     assetFileNames: `[name].[ext]`,
            // },
        },
    }
});
