# Recipe Shopping Page

## Purpose
This project turns a set of liked recipes and recommended similar recipes into an interactive local shopping page for planning a PAK'nSAVE Wainoni grocery trip.

## Stack
- Static HTML
- CSS
- Vanilla JavaScript
- No build step or external package manager

## Commands
- Open `index.html` directly in a browser.
- Optional local server from this folder: `python -m http.server 8080`

## Conventions
- Keep the app small and dependency-free unless a feature clearly needs a library.
- Use semantic HTML and accessible form controls for checklist interactions.
- Keep shopping data in `app.js` as plain objects so it is easy to edit.
- Use concise comments only where behavior is not obvious.

## Safety Rules
- Do not add accounts, payment flows, tracking, or external API calls without asking first.
- Do not store personal data beyond browser-local checklist state.
- Keep local storage keys scoped to this project.

## Review Guidelines
- Check the page at desktop and mobile widths.
- Verify checkboxes, filters, serving controls, and reset controls work.
- Confirm the shopping list stays grouped by supermarket-friendly sections.

## Before Change Checklist
- Read `STATUS.md` and `DECISIONS.md`.
- Identify whether the change affects content, behavior, or layout.
- Keep changes small and reversible.

## After Change Checklist
- Open the page and test the changed interaction.
- Update `STATUS.md` after meaningful work.
- Summarise changed files, checks run, risks, and next steps.
