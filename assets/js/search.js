// Client-side search with Lunr.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Fetch search index
    fetch('{{site.baseurl}}/search.json')
        .then(res => res.json())
        .then(posts => {
            const idx = lunr(function() {
                this.ref('id');
                this.field('title');
                this.field('content');
                this.field('tags');

                posts.forEach((post, id) => {
                    this.add({ id, ...post });
                });
            });

            searchInput.addEventListener('input', (e) => {
                const query = e.target.value;
                const results = idx.search(query);

                searchResults.innerHTML = results.map(result => {
                    const post = posts[result.ref];
                    return `
            <div class="post-card">
              <h3><a href="${post.url}">${post.title}</a></h3>
              <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
              </div>
              <p>${post.excerpt}</p>
            </div>
          `;
                }).join('');
            });
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const postItems = document.querySelectorAll('.post-list > li');

    postItems.forEach(item => {
        // Get the URL from the existing link
        const link = item.querySelector('.post-link');
        if (!link) return;

        const url = link.href;

        // Make the entire item clickable
        item.style.cursor = 'pointer';
        item.style.position = 'relative';

        // Create an invisible overlay
        const overlay = document.createElement('a');
        overlay.href = url;
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.zIndex = '1';

        // Add hover effect via class
        item.classList.add('clickable-post');

        item.appendChild(overlay);
    });
});
