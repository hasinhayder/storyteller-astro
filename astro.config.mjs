// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import remarkYoutubeEmbed from './src/plugins/remarkYoutubeEmbed.js'
import remarkVimeoEmbed from './src/plugins/remarkVimeoEmbed.js'
import remarkWistiaEmbed from './src/plugins/remarkWistiaEmbed.js'
import remarkGoogleMapsEmbed from './src/plugins/remarkGoogleMapsEmbed.js'
import remarkIframeEmbed from './src/plugins/remarkIframeEmbed.js'
import remarkPdfEmbed from './src/plugins/remarkPdfEmbed.js'
import remarkGistEmbed from './src/plugins/remarkGistEmbed.js'
import remarkAscinemaEmbed from './src/plugins/remarkAscinemaEmbed.js';
import remarkSoundcloudEmbed from './src/plugins/remarkSoundcloudEmbed.js';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    markdown: {
        remarkPlugins: [
            remarkYoutubeEmbed,
            remarkVimeoEmbed,
            remarkWistiaEmbed,
            remarkGoogleMapsEmbed,
            remarkIframeEmbed,
            remarkPdfEmbed,
            remarkGistEmbed,
            remarkAscinemaEmbed,
            remarkSoundcloudEmbed,
        ],
    },
});