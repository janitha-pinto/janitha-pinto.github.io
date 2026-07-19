# Images & Videos To Add

Every dashed placeholder box on the site tells you exactly what to shoot/upload and roughly what size works best. General guidelines:

- Put real photos in this `assets/images/` folder (create subfolders like `food/`, `events/`, `gallery/` if that helps you stay organised).
- Use `.jpg` for photos, `.webp` if you want smaller file sizes.
- Compress images before adding them (aim under ~300KB each) — tools like [squoosh.app](https://squoosh.app) work well. Large images will slow the site down and use up your GitHub Pages bandwidth.
- Once you have a photo, replace a placeholder `<div class="placeholder ...">...</div>` block in the HTML with a normal `<img>` tag, e.g.:

  ```html
  <img src="assets/images/food/rice-and-curry.jpg" alt="Rice and curry banquet spread">
  ```

- For videos, either:
  - Embed a YouTube/Vimeo link with an `<iframe>`, or
  - Add a small `.mp4` file and use `<video src="assets/images/reel.mp4" controls></video>`

## Shot list (from the placeholders currently on the site)

- Hero shot: full rice & curry banquet spread (landscape, 1200x900px)
- Chef plating food / kitchen action shot (square, 800x800px)
- Rice & curry spread, Kottu roti on the griddle, Egg hoppers stack (product shots)
- Wedding table, corporate lunch, birthday spread, festival buffet (event types)
- Behind-the-scenes video (event highlights or cooking process)
- Gallery: a mix of food, wedding, corporate, festival photos + 2 short videos
- Contact page: doesn't need a photo, but add a Google Maps embed for your service area
