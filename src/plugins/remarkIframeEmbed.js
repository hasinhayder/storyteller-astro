/**
 * Iframe Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #iframe example.com
 * #iframe astro.build/
 */

import { visit } from 'unist-util-visit';

export default function remarkIframeEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node || !parent || !node.children) return;

      const textNode = node.children.find((child) => child.type === 'text');
      if (!textNode) return;

      const text = textNode.value.trim();

      if (text.startsWith('#iframe ')) {
        let url = text.slice(8).trim();

        // Automatically add https:// if missing protocol
        if (!url.includes('://')) {
          url = 'https://' + url;
        }

        parent.children[index] = {
          type: 'html',
          value: `<iframe width="100%" class="aspect-ratio" style="aspect-ratio: 16/9; border-radius:10px; min-height: 400px;" src="${url}" frameborder="0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        };
      }
    });
  };
}
