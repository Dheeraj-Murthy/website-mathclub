---
layout: page
title: All Tags
---

{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}

  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%b %-d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
