document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    let idx, posts;

    // Fetch the search index
    fetch(SEARCH_INDEX_URL)
        .then(res => res.json())
        .then(data => {
            posts = data;
            idx = lunr(function () {
                this.ref('id');
                this.field('title');
                this.field('content');
                this.field('tags');

                posts.forEach((post, id) => {
                    this.add({ id, ...post });
                });
            });
        });

    // Show results
    const showResults = (query) => {
        if (!idx || !query) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }

        const results = idx.search(query);
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
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
        }

        searchResults.style.display = 'block';
    };

    // Listen for input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        showResults(query);
    });

    // Hide results on outside click
    document.addEventListener('click', (e) => {
        if (
            e.target !== searchInput &&
            !searchResults.contains(e.target)
        ) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
        }
    });

    // Optional: Clear on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            searchInput.blur();
        }
    });
});
