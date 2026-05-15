# Data Model

## Recipes
Each recipe has:

- `title`
- `source`
- `url`
- `time`
- `why`
- `tags`

## Shopping Items
Each item has:

- `id`
- `name`
- `section`
- `quantity`
- `unit`
- `note`
- `pantry`

Quantities are stored against the four-serving baseline for the full five-recipe meal plan.

The original and vegetarian pages use separate browser local storage keys so ticking items on one list does not affect the other.

## Custom Items
Each page also stores custom supermarket items in local storage.

Each custom item has:

- `id`
- `name`
- `section`
- `quantity`
- `checked`

Reset clears both generated checklist progress and custom items for the current page.
