/**
 * PDF Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #pdf pdfobject.com/pdf/sample.pdf
 */

import { visit } from 'unist-util-visit';

export default function remarkPdfEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node || !parent || !node.children) return;

      const textNode = node.children.find((child) => child.type === 'text');
      if (!textNode) return;

      const text = textNode.value.trim();

      if (text.startsWith('#pdf ')) {
        let url = text.slice(5).trim();

        // Automatically add https:// if missing protocol
        if (!url.includes('://')) {
          url = 'https://' + url;
        }

        parent.children[index] = {
          type: 'html',
          value: `<iframe src="${url}" width="100%" class="aspect-ratio" style="aspect-ratio: 16/9; border-radius: 10px; min-height: 600px;" type="application/pdf" allowfullscreen></iframe>`,
        };
      }
    });
  };
}
