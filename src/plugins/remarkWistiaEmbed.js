/**
 * Wistia Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #wistia 123456789
 */

import { visit } from 'unist-util-visit';

export default function remarkWistiaEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#wistia\s+([\w-]+)$/);
        if (match) {
          const hashedId = match[1];
          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" class='aspect-ratio' style="aspect-ratio: 16/9; border-radius:10px;" src="https://fast.wistia.net/embed/iframe/${hashedId}" frameborder="0" allowfullscreen></iframe>`,
          };
        }
      }
    });
  };
}
