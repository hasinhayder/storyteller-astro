/**
 * Google Maps Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #googlemaps New York City
 * #googlemaps Dhaka Parliament Building
 */

import { visit } from 'unist-util-visit';

export default function remarkGoogleMapsEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#googlemaps\s+(.+)$/);
        if (match) {
          let mapQuery = match[1].trim();
          // Build the embed URL for Google Maps
          const embedUrl = `https://www.google.com/maps/embed?q=${encodeURIComponent(mapQuery)}`;

          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" class="aspect-ratio" style="aspect-ratio: 16/9; border-radius:10px;" src="${embedUrl}" frameborder="0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`,
          };
        }
      }
    });
  };
}
