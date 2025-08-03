# Math Club Blog Site

## Overview

This repository hosts the official blog site for the Math Club, built using Jekyll. The site serves as a central hub for sharing club activities, project updates, mathematical discussions, and resources. It is designed to be easily maintainable and deployable via GitHub Pages.

## Features

- **Blog Posts:** Dedicated section for articles, tutorials, and updates from club members.
- **Activities Page:** A comprehensive listing of all past and upcoming club activities.
- **Search Functionality:** Integrated search to easily find relevant content across the site.
- **Responsive Design:** Optimized for viewing on various devices (desktops, tablets, and mobile phones).
- **GitHub Pages Deployment:** Configured for seamless hosting and automatic deployment through GitHub Pages.

## Setup and Local Development

To set up and run the project locally, follow these steps:

### Prerequisites

- Ruby (version 2.7 or higher recommended)
- Bundler gem

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Dheeraj-Murthy/website-mathclub.git
    cd website-mathclub
    ```

2.  **Install Jekyll and other dependencies:**
    ```bash
    bundle install
    ```

### Running Locally

To serve the site locally and preview changes:

```bash
bundle exec jekyll serve
```

The site will typically be accessible at `http://127.0.0.1:4000/website-mathclub/`.

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages. Ensure the following:

1.  The repository name on GitHub matches the `baseurl` specified in `_config.yml` (currently `website-mathclub`).
2.  GitHub Pages is enabled for the `main` branch (or your chosen branch) and set to serve from the root directory.

Upon pushing changes to the configured branch, GitHub Actions will automatically build and deploy the site.

## Project Structure

```
.
├── _config.yml             # Jekyll configuration file
├── _includes/              # Reusable HTML snippets (e.g., navigation, footer)
├── _layouts/               # HTML templates for different page types
├── _posts/                 # Markdown files for blog posts
├── assets/                 # Static assets (CSS, JavaScript, images)
├── activities.markdown     # Page listing all club activities
├── index.markdown          # Homepage content
└── ...                     # Other project files
```

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is open-sourced under the MIT License. See the `LICENSE` file for more details.
