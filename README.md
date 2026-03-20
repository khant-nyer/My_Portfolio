
  # Portfolio website

  This is a code bundle for Portfolio website. The original project is available at https://www.figma.com/design/sKlVLFptaEe7xgB84O3V8k/Portfolio-website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## CI/CD (Render + GitHub Actions)

This repository includes a GitHub Actions workflow at `.github/workflows/render-cicd.yml` that:

- Runs `npm ci` and `npm run build` for pull requests into `main` (CI validation).
- Runs the same build checks on pushes to `main`.
- Triggers a Render deployment after a successful `main` build using a Render Deploy Hook (CD).

### Setup required

1. In Render, open your service and create a **Deploy Hook**.
2. In GitHub, add a repository secret named `RENDER_DEPLOY_HOOK_URL` with that hook URL.
3. Push to `main` to automatically trigger a deploy after the build passes.

