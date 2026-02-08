# Portfolio Website

A professional portfolio website built with pure HTML, CSS, and JavaScript. Optimized for GitHub Pages deployment.

## Project Structure

```
personal-website/
├── index.html          # Main page
├── 404.html            # Custom 404 page
├── css/
│   └── styles.css      # Stylesheet (with dark/light theme support)
├── js/
│   └── main.js         # Interactions (theme toggle, animations, navigation)
├── assets/
│   └── favicon.svg     # SVG favicon
├── robots.txt          # SEO: search engine crawling rules
├── sitemap.xml         # SEO: sitemap for search engines
├── CNAME               # Custom domain (create when needed)
└── README.md           # This file
```

## Local Testing

1. **Serve locally** (pick any method):

   Python:
   ```bash
   python3 -m http.server 8000
   ```

   Node.js (npx):
   ```bash
   npx serve .
   ```

   VS Code: Install the "Live Server" extension, then right-click `index.html` and select "Open with Live Server".

2. Open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

### Option A: User/Organization Site (`yourusername.github.io`)

1. Create a repository named `yourusername.github.io` on GitHub.
2. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your repository.
4. Under **Source**, select `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Your site will be live at `https://yourusername.github.io`.

### Option B: Project Site

1. Create any repository on GitHub.
2. Push the code to the `main` branch (same steps as above).
3. Go to **Settings > Pages**, select `main` branch and `/ (root)`.
4. Your site will be at `https://yourusername.github.io/repository-name/`.

### Custom Domain (Optional)

1. In your repository, go to **Settings > Pages > Custom domain**.
2. Enter your domain (e.g., `www.yourdomain.com`).
3. Create a `CNAME` file in the root with your domain:
   ```
   www.yourdomain.com
   ```
4. Configure your DNS provider with the appropriate records. See [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Updating Content

### Personal Information

In `index.html`, search and replace the following placeholders:

| Placeholder | Replace with |
|---|---|
| `[Seu Nome]` | Your full name |
| `yourusername` | Your GitHub username |
| `your.email@example.com` | Your email address |
| `GA_MEASUREMENT_ID` | Your Google Analytics ID |
| `YOUR_FORM_ID` | Your Formspree form ID |

### Adding a New Project

Add a new `<article class="project-card">` inside the `.projects__grid` div in `index.html`. Copy an existing project card and update the title, description, tech stack, and links.

### Adding a Blog Post

Add a new `<article class="blog-card">` inside the `.blog__grid` div. Update the date, title, excerpt, and Medium link.

### Updating Skills

Edit the skill cards in the Skills section. Adjust the `data-level` attribute on `.skill-bar__fill` elements (0-100) to change the progress bar width.

### Contact Form

The contact form uses [Formspree](https://formspree.io). Sign up, create a form, and replace `YOUR_FORM_ID` in the form's `action` attribute.

### Theme Colors

Edit the CSS custom properties in `css/styles.css` under `:root` (light theme) and `[data-theme="dark"]` (dark theme).

## SEO Checklist

- [x] Semantic HTML structure
- [x] Meta description and keywords
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] robots.txt
- [x] sitemap.xml
- [x] Responsive design
- [ ] Replace placeholder OG image (`assets/og-image.png`)
- [ ] Update sitemap.xml URL to your actual domain
- [ ] Update robots.txt sitemap URL
- [ ] Submit sitemap to Google Search Console

## Browser Support

Tested for compatibility with modern browsers:
- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome for Android)
