# mdlreact

This folder is intended to become the **source-of-truth** repo for the site currently served at `https://react.mydirectlender.com/`.

## Current hosting

- InterServer shared hosting
- Document root folder: `mdlreact`
- cPanel features available: SSH Access + Git Version Control

## Recommended deployment model (shared hosting)

This project is an **Express** server (`index.js`) that serves static files from `public/`.
The simplest shared-hosting deploy is:

1. Push changes to GitHub.
2. In **cPanel → Git Version Control**, pull the latest commit.
3. Deploy into the docroot using `.cpanel.yml` (rsyncs repo contents into `/home/bigsplas/mdlreact/`).

## Next steps

1. Create a GitHub repo from this folder and push it.
2. In cPanel Git Version Control, clone that repo to a path **outside** the docroot (recommended).
3. Use the repo's Deploy feature (which reads `.cpanel.yml`) to deploy into the docroot.

## Notes

- If the site is a SPA (React Router), the hosting must rewrite unknown routes to `index.html`.
- SSH/SFTP works only if SSH access is enabled in cPanel.

## Files of interest

- `index.js`: Express server.
- `public/index.html`: SPA entry.
- `.cpanel.yml`: cPanel deploy recipe.

## Optional: auto-deploy on every push (GitHub Actions)

If you want a "hook" so you don't have to click **Update from Remote** / **Deploy HEAD Commit** in cPanel every time, this repo includes a workflow that deploys over SSH:

- `.github/workflows/auto-deploy-cpanel.yml`

### Required GitHub repo secrets

Create these in GitHub → **Settings** → **Secrets and variables** → **Actions**:

- `CPANEL_SSH_HOST`: your SSH host (example: `wordpress200.is.cc`)
- `CPANEL_SSH_USER`: your cPanel/SSH username (example: `bigsplas`)
- `CPANEL_SSH_KEY`: a private key (recommended: a dedicated deploy key for this repo)

If your private key is passphrase-protected, also set:

- `CPANEL_SSH_PASSPHRASE`: the passphrase for `CPANEL_SSH_KEY`

Optional:

- `CPANEL_SSH_PORT`: usually `22`
- `CPANEL_REPO_PATH`: server clone path (default: `/home/<user>/repos/mdlreact`)
- `CPANEL_DOCROOT`: live docroot (default: `/home/<user>/mdlreact`)

### What it does

On push to `main`, GitHub Actions SSHes into your server, updates the server-side clone, then `rsync`s the repo into the docroot.

### SSH key tip (cPanel)

Some cPanel screens require setting a passphrase when *generating* a key. For GitHub Actions, either:

- Use a passphrase (store it in `CPANEL_SSH_PASSPHRASE`), or
- Generate a key locally with no passphrase and use cPanel **Import Key** to add the public key to the server.

### Disable

Delete `.github/workflows/auto-deploy-cpanel.yml` or disable GitHub Actions for the repo.
