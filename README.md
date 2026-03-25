# JavaScript Projects Collection

A curated collection of front-end and full-stack JavaScript projects demonstrating interactive UI, state management, file-based data feeds, and admin workflows.

## 📁 Repository Structure

- `event_page/`: Event listing and detailed event explorer.
  - `index.html`: Main event discovery page.
  - `admin.html`: Administrator interface (add/edit events).
  - `css/`: Styling for event pages.
  - `js/`: Scripts including modular `modules/` for data fetch, event generation, UI updates.
  - `data/events.json`: Event feed used by the app.
  - `event_details/*.json`: Individual event detail data files.
- `mess_project/`: Restaurant ordering system (menu, orders, user profiles, Firebase functions).
  - `index.html`, `admin/admin.html`, `orders/orders.html`, `profile/profile.html`
  - `functions/`: Cloud function code (Node.js + Firebase).
- `snake_game/`: Classic browser-based snake game.
  - `index.html`, `script.js`, `style.css`.

## 🛠️ Projects in This Repository

### 1. Event Page (`event_page`)
- Description: Browse, search, and view event details with structured JSON data.
- Highlights:
  - Dynamic event cards from `data/events.json`.
  - Client-side filtering by name/category.
  - Detail pages generated from `event_details` JSON files.
  - Admin view for managing events and real-time preview.
- Technologies: HTML, CSS, JavaScript (ES6 modules), Fetch API.

### 2. Prem Nagri Restaurant Ordering Platform (`mess_project`)
- Description: Full-featured restaurant order system with admin controls and Firebase integration.
- Highlights:
  - Menu view with add-to-cart and custom item quantity.
  - Order processing and history on `success.html`/`cancel.html`.
  - Admin panel for menu and orders.
  - Firebase Functions (`mess_project/functions/index.js`).
- Technologies: HTML, CSS, JavaScript, Firebase.

### 3. Snake Game (`snake_game`)
- Description: Web-based Snake game with controls and score tracking.
- Highlights:
  - Game loop and collision detection.
  - Responsive canvas layout.
  - Minimal dependency, pure JavaScript logic.
- Technologies: HTML, CSS, JavaScript.

## 🚀 Run Locally

1. Clone the repo:

```bash
git clone https://github.com/XYZcode94/javascript.git
cd javascript
```

2. Serve static files with a local server (recommended):

```bash
# VS Code Live Server extension
# or
npx http-server .
```

3. Open the desired project:
- `event_page/index.html`
- `mess_project/index.html`
- `snake_game/index.html`

## 🤝 Contributing

- Fork the repository.
- Create a feature branch: `git checkout -b feature/<name>`.
- Commit, push, then open a PR.
- Add/modify project docs and ensure code clarity.

## 📌 Notes

- The `event_page` data files are JSON-driven, so new events can be added by updating `data/events.json` and `event_details/*.json`.
- For `mess_project`, ensure your Firebase config and emulators are set correctly before running functions.

## 📜 License

- MIT License (unless specified otherwise in subfolders).
