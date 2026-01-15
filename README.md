# mdlreact

This folder is intended to become the **source-of-truth** repo for the site currently served at `https://react.mydirectlender.com/`.

## Current hosting
- InterServer shared hosting
- Document root folder: `mdlreact`
- cPanel features available: SSH Access + Git Version Control

## Recommended deployment model (shared hosting)
This project is an **Express** server (`index.js`) that serves static files from `public/`.
The simplest shared-hosting deploy is:

1) Push changes to GitHub.
2) In **cPanel → Git Version Control**, pull the latest commit.
3) Deploy into the docroot using `.cpanel.yml` (rsyncs repo contents into `/home/bigsplas/mdlreact/`).

## Next steps
1) Create a GitHub repo from this folder and push it.
2) In cPanel Git Version Control, clone that repo to a path **outside** the docroot (recommended).
3) Use the repo's Deploy feature (which reads `.cpanel.yml`) to deploy into the docroot.

## Notes
- If the site is a SPA (React Router), the hosting must rewrite unknown routes to `index.html`.
- SSH/SFTP works only if SSH access is enabled in cPanel.

## Files of interest
- `index.js`: Express server.
- `public/index.html`: SPA entry.
- `.cpanel.yml`: cPanel deploy recipe.
