# Portfolio Eksembl

## Tech stack
- ### Vite + React
- ### lucide Icon, React router, Tailwind CSS

## Deploy to GitHub Pages

The site is configured to deploy via GitHub Actions.

1. Push the project to a GitHub repository:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. In the repo, go to **Settings → Pages → Build and deployment**, set
   **Source** to **GitHub Actions**. The `deploy.yml` workflow will build and
   publish the site to:
   `https://<username>.github.io/<repo>/`

3. Re-run the workflow manually from **Actions → Deploy to GitHub Pages →
   Run workflow** if needed.

## Custom domain (eksembl.dev)

The repo already contains a `public/CNAME` file with `eksembl.dev`, so the
workflow ships it automatically. Set up DNS on your domain provider:

1. Apex domain `eksembl.dev` — add four `A` records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   (optionally also `AAAA` records for `2606:50c0::` — `8000`, `8100`,
   `8200`, `8300`)

2. For `www.eksembl.dev` — add a `CNAME` to `<username>.github.io`.

3. In the repo go to **Settings → Pages → Custom domain**, enter
   `eksembl.dev` and save. Once DNS propagates, tick **Enforce HTTPS**.

The site will be available at `https://eksembl.dev`.

### Notes
- `vite.config.js` uses `base: '/'` — assets load from the domain root.
- Routing uses `HashRouter`, so URLs look like `#/` and `#/Projects` — no
  server-side fallback is required on GitHub Pages.