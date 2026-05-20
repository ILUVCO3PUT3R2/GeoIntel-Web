This folder contains the static landing page and a small component used for the dashboard.

Structure:

GeoIntel-website/
├── public/
│   └── index.html          ← The main HTML shell
├── src/
│   ├── components/
│   │   ├── Navbar.js       ← Navigation bar
│   │   ├── HeroSection.js  ← Big header with globe
│   │   ├── MapView.js      ← 🗺️ THE GOOGLE MAP COMPONENT
│   │   ├── Dashboard.js    ← Client portal preview
│   │   └── Footer.js       ← Footer
│   ├── App.js              ← Main app file (routes pages together)
│   ├── index.js            ← Entry point (don't touch this)
│   └── index.css           ← Global styles
├── .env                    ← Your SECRET API key goes here (NEVER share this file)
├── package.json            ← Project config + deploy scripts
└── README.md               ← Project description

- `index.html` - Landing page entry (now references external assets).
- `assets/css/site.css` - Site-wide CSS extracted from the original inline styles.
- `assets/js/main.js` - Site JS (module) that initializes the dashboard and page interactions.
- `public/components/src/Domain/Dashboard.js` - Reusable dashboard renderer (exports `renderDashboard`).

Run / Development
- To view the static landing page:
  ```bash
  cd GeoIntel/website
  python3 -m http.server 8000
  ```
  
Environment variables
---------------------

This project uses a small runtime env file for client-side SDKs. To configure your Google Maps API key:

1. Create a `.env` file in `website/` with the following entry:

```
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_KEY
```

2. Run the generator to export a browser-friendly file (this writes `assets/js/env.js`):

```bash
cd website
node generate-env.js
```

3. Start the static server and open `http://localhost:8000`.

Security note: The generated `assets/js/env.js` and `.env` are ignored by `.gitignore`. Restrict your API key in the Google Cloud Console to allowed referrers.
  Then open:
  ```text
  http://localhost:8000
  ```
  If port 8000 is already in use, choose another port:
  ```bash
  python3 -m http.server 8001
  ```

Notes
- The dashboard is mounted into the `#dashboard-root` element by `assets/js/main.js`.
- The CSS and JS are loaded from `assets/css/site.css` and `assets/js/main.js`.
- If you open `index.html` directly using `file://`, module imports may fail. Use a local server instead.
