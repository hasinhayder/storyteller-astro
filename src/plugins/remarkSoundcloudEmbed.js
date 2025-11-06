/**
 * SoundCloud Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #soundcloud soundcloud.com/hasin-hayder/love-will-keep-us-alive-1
 */

import { visit } from 'unist-util-visit';

export default function remarkSoundcloudEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node || !parent || !node.children) return;

      const textNode = node.children.find((child) => child.type === 'text');
      if (!textNode) return;

      const text = textNode.value.trim();

      if (text.startsWith('#soundcloud ')) {
        let url = text.slice(12).trim();

        // Prepend https:// if missing
        if (!url.includes('://')) {
          url = 'https://' + url;
        }

        const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

        parent.children[index] = {
          type: 'html',
          value: `
<div style="border-radius: 10px; overflow: hidden;">
  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="${iframeSrc}"></iframe>
  <div style="font-size: 10px; color: #cccccc; line-break: anywhere; word-break: normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100; padding: 0 12px 12px;">
    <a href="https://soundcloud.com" target="_blank" style="color: #cccccc; text-decoration: none;">Listen on SoundCloud</a>
  </div>
</div>`.trim(),
        };
      }
    });
  };
}
