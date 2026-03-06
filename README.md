# Beauty Sleep Studio PDX

Lash extensions, lifts & brow lamination in Portland's Nob Hill — by licensed esthetician Haley.

**Live site:** [beautysleepstudiopdx.com](https://www.beautysleepstudiopdx.com)

## Stack

- Static HTML + Tailwind CSS (compiled at build time)
- Netlify Forms (spam-filtered contact form with honeypot)
- Netlify Functions (`submission-created` hook for notifications)
- Fonts: Playfair Display (headings), DM Sans (body) via Google Fonts

## Local development

```bash
npm install
npm run dev        # watches src/styles.css → ./styles.css
```

Open `index.html` in a browser (or use any local server).

## Build

```bash
npm run build
```

Compiles and minifies Tailwind CSS from `src/styles.css` into `./styles.css` at the project root.

## Deploy

Push to a connected Git repo — Netlify handles the rest via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `.` (project root)
- **Functions directory:** `netlify/functions`

### Environment variables (optional)

Set these in the Netlify dashboard to enable form submission notifications:

| Variable | Purpose |
|---|---|
| `SLACK_WEBHOOK_URL` | Post new inquiries to a Slack channel |
| `SENDGRID_API_KEY` | Email notifications on form submit |

## Project structure

```
├── index.html                 # Source HTML
├── src/styles.css             # Tailwind directives + custom CSS
├── tailwind.config.js         # Theme (colors, fonts, spacing)
├── postcss.config.js
├── netlify.toml               # Build config, headers, redirects
├── netlify/functions/
│   └── submission-created.js  # Fires on every form submission
├── styles.css                 # Built output (gitignored)
└── images/                    # Local images
```
