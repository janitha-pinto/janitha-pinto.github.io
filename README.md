# Ceylon Spice Catering — Website

A simple, static 5-page website for a Sri Lankan catering business in Melbourne, built with plain HTML/CSS/JS so it can be hosted for free on GitHub Pages.

## Pages

- `index.html` — Home (hero, about, featured dishes, testimonials, video, CTA)
- `menu.html` — Full sample menu (short eats, hoppers, rice & curry, kottu, desserts, beverages)
- `events.html` — Catering packages, event types, booking process
- `gallery.html` — Filterable photo/video gallery with a lightbox
- `contact.html` — Contact details, enquiry form, map placeholder

All photos/videos are currently **styled placeholders** — dashed boxes that tell you what to shoot and roughly what size to use. See `assets/images/README.md` for the full shot list and instructions on swapping them for real media.

## Before you launch: things to personalise

Search each HTML file for these and update them:

- **Business name / tagline** — currently "Ceylon Spice Catering" (placeholder), update in the `<title>`, `.brand`, and footer on every page
- **Phone number** — `+61 400 000 000` (placeholder)
- **Email** — `hello@example.com` (placeholder) — also update `data-mailto="hello@example.com"` in `contact.html`
- **Address** — `123 Example Street, Melbourne VIC 3000` (placeholder)
- **Social links** — the `IG` / `FB` / `WA` icons in the footer and contact page currently link to `#`
- **Menu prices & dishes** — sample only, update with your real offerings
- **Google Map embed** — replace the placeholder box in `contact.html` with a real `<iframe>` from Google Maps ("Share" → "Embed a map")

## Running locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:

  ```
  npx serve .
  ```

  or, with Python installed:

  ```
  python -m http.server 8000
  ```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `ceylon-spice-catering`).
2. From this folder, push it up:

   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. On GitHub: go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Save. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is without running Jekyll processing.

### Using a custom domain later

If you move to your own domain (e.g. `www.ceylonspicecatering.com.au`) while still hosting on GitHub Pages, add a `CNAME` file to the repo root containing just the domain name, and point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Moving off GitHub Pages later

Because this is plain static HTML/CSS/JS with no build step, it will run unmodified on any static host (Netlify, Vercel, Cloudflare Pages, S3, etc.) — just upload the folder contents. If you want a working contact form without redirecting to email, services like [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) can be dropped into `contact.html` with minimal changes.
