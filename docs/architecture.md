# Architecture

The page is a static app:

- `index.html` provides the structure.
- `vegetarian.html` provides the separate vegetarian version.
- `styles.css` handles shared layout, responsive design, and visual states.
- `app.js` contains the original recipe data, shopping-list data, rendering logic, filters, serving scaling, and local storage.
- `vegetarian.js` contains the vegetarian recipe data, shopping-list data, rendering logic, filters, serving scaling, and local storage.

There is no backend, database, authentication, or external API call.
