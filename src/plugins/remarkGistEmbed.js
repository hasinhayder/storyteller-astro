/**
 * GitHub Gist Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #gist octocat/0831f3fbd83ac4d46451
 * #gist username/gist-id
 */

import { visit } from 'unist-util-visit';

export default function remarkGistEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#gist\s+(.+)$/);
        if (match) {
          const gistInput = match[1].trim();
          let src;

          // Check if it's already a full gist URL
          if (gistInput.startsWith('https://gist.github.com/')) {
            // Convert embed URL to script URL if needed
            src = gistInput.includes('.js') ? gistInput : gistInput.replace(/\/$/, '') + '.js';
          } else {
            // Assume it's just the gist ID
            src = `https://gist.github.com/${gistInput}.js`;
          }

          parent.children[index] = {
            type: 'html',
            value: `<div class="gist-embed" style="border-radius: 10px; overflow: hidden;"><script src="${src}"></script></div>`,
          };
        }
      }
    });
  };
}
