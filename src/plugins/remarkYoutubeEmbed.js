/**
 * YouTube Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #youtube eQXG75XirdE
 */

import { visit } from 'unist-util-visit';

export default function remarkYoutubeEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#youtube\s+([\w-]+)$/);
        if (match) {
          const videoId = match[1];
          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" class='aspect-ratio' style="aspect-ratio: 16/9; border-radius:10px;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`,
          };
        }
      }
    });
  };
}
