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
