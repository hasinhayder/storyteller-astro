---
title: "Rich Media Embeds: YouTube, Vimeo, Maps, PDFs & More"
description: "Complete guide to Storyteller's embed system - integrate YouTube, Vimeo, Maps, PDFs, Gists, and more with simple markdown shortcodes."
pubDate: 2025-11-06
author: "The Storyteller"
category: "Web Dev"
tags: ["astro", "plugins", "embeds", "markdown", "demo"]
featured: true
thumb: "https://images.unsplash.com/photo-1567606404839-dea8cec4d278?auto=format&fit=crop&w=400&q=80"
large: "https://images.unsplash.com/photo-1567606404839-dea8cec4d278?auto=format&fit=crop&w=2400&q=80"
---

Welcome to the comprehensive showcase of Storyteller's rich media embed capabilities! This article demonstrates how to seamlessly integrate various types of content into your blog posts using simple markdown shortcodes. From videos and maps to documents and code snippets, Storyteller makes embedding rich media effortless.

## YouTube Videos

Embed YouTube videos using the `#youtube` shortcode followed by the video ID:

#youtube eQXG75XirdE

## Vimeo Videos

Embed Vimeo videos using the `#vimeo` shortcode:

#vimeo 76979871

## Wistia Videos

Embed Wistia videos using the `#wistia` shortcode:

#wistia 26sk4lmiix

## Google Maps

Embed Google Maps using the `#googlemaps` shortcode with a query or URL:

#googlemaps Admiral Residency, Sarkhej

## PDFs

Embed PDF documents using the `#pdf` shortcode:

#pdf pdfobject.com/pdf/sample.pdf

## GitHub Gists

Embed GitHub Gists using the `#gist` shortcode:

#gist octocat/0831f3fbd83ac4d46451

## Asciinema Recordings

Embed Asciinema terminal recordings using the `#asciinema` shortcode:

#asciinema 239367

## SoundCloud Tracks

Embed SoundCloud tracks using the `#soundcloud` shortcode:

#soundcloud soundcloud.com/hasin-hayder/love-will-keep-us-alive-1

## How It Works

These shortcodes are processed by custom remark plugins that transform them into proper HTML embeds. Each plugin handles the specific requirements of the platform, including:

- Proper iframe sizing and responsive design
- Loading optimizations
- Privacy considerations
- Accessibility features

## Usage Tips

- Always test your embeds in both light and dark themes
- Ensure the content you're embedding is appropriate for your audience
- Check that embedded content loads properly on mobile devices
- Consider the impact on page load times when using multiple embeds

## Customization

The embed plugins are highly customizable. You can modify the appearance and behavior by editing the corresponding plugin files in the `src/plugins/` directory. Each plugin is designed to be lightweight and focused on a specific embed type.

Happy embedding! 🎉
