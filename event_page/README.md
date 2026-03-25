# Event Page Project

A lightweight event discovery app that loads event metadata from JSON and renders a responsive event catalog with filtering and detail pages.

## 📚 Project Structure

- `index.html`: Main event listing page.
- `admin.html`: Admin interface for managing event data.
- `css/style.css`: Primary site styling.
- `css/admin.css`: Admin panel styling.
- `js/main.js`: Main page script entry.
- `js/admin.js`: Admin dashboard script.
- `js/modules/dataFetcher.js`: Data fetching utilities.
- `js/modules/events.js`: Event rendering and event logic.
- `js/modules/ui.js`: UI helpers and handlers.
- `data/events.json`: Master event list and metadata.
- `event_details/*.json`: Individual event detail records.

## 🚀 Features

- Dynamic event card generation from JSON data.
- Search and filter events by name or type.
- Manage event data via the admin view (add/edit/delete logic).
- Detail view for each event with rich metadata.
- Modular JavaScript architecture with ES6 modules.

## ▶️ How to Run Locally

1. Open `event_page/index.html` in a browser (or use a local server for better behaviour).

2. For local server:

```bash
cd event_page
npx http-server .
```

3. Visit `http://localhost:8080` (or printed URL) in browser.

## 🛠️ Notes

- Add new events to `data/events.json` and include matching detail JSON in `event_details/`.
- Use browser console for debugging script errors and DOM behavior.

## 🧩 Contribution

- Fork, branch, commit, and raise a PR with improvements.
- Ensure consistency in JSON schema and UI styling.

