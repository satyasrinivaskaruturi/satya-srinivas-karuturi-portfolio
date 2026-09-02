# Satya Srinivas Karuturi — Recruiter Portfolio

A recruiter-first, responsive personal portfolio built as a static website.

## Included

- Premium responsive UI
- Actual professional portrait
- Downloadable source resume
- Dark/light mode
- Mobile navigation
- Project case-study presentation
- Technical ecosystem
- Internship timeline
- Credentials
- Contact / LinkedIn / GitHub CTAs
- Accessible semantic HTML and reduced-motion support
- No fabricated metrics or experience

## Run locally

Open `index.html` directly in a browser, or use any static server.

Example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Go to Settings → Pages.
4. Deploy from the `main` branch and `/root`.
5. The site is static and requires no build step.

## Deploy to Vercel / Netlify

Upload the project folder. No build command is required for the static version.

## Update candidate information

Most content is in `index.html`.

Replace:
- `assets/profile.jpg` with a new portrait if required.
- `assets/Satya_Srinivas_Karuturi_Resume.docx` with the current resume.
- LinkedIn/GitHub URLs in `index.html` when needed.

## Notes

The project uses Google Fonts from the web when online. For fully offline use, replace the font import with locally available fonts.
