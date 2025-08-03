---
layout: default
title: Our Activities
permalink: /activities/
---

# Our Activities

Here you'll find a list of all our club's activities and posts.

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
{% endfor %}
