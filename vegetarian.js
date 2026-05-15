const recipes = [
  {
    title: "Vegan Banh Mi Bowl",
    source: "Kathy's Vegan Kitchen",
    url: "https://www.kathysvegankitchen.com/bahn-mi-bowl/",
    time: "35 min",
    why: "Spicy tofu, pickled vegetables, coriander, cucumber, and a punchy dressing. It keeps the banh mi taco energy in bowl form.",
    tags: ["Vietnamese", "tofu", "pickles", "fresh"],
  },
  {
    title: "Korean-style Gochujang Tofu Bowl",
    source: "Mindful Chef",
    url: "https://www.mindfulchef.com/healthy-recipes/korean-style-tofu-gochujang-bowl",
    time: "30 min",
    why: "Sticky tofu, gochujang, rice, avocado, and pickled cucumber. This is the direct vegetarian match for the Korean favourites.",
    tags: ["Korean", "tofu", "gochujang", "rice bowl"],
  },
  {
    title: "Chickpea Shawarma Bowl with Tahini Dressing",
    source: "Lele Recipes",
    url: "https://lelerecipes.com/recipe/chickpea-shawarma-bowl-tahini-dressing",
    time: "45 min",
    why: "Roasted chickpeas, couscous, cucumber, tomato, red onion, parsley, and tahini. A tidy vegetarian shawarma bowl.",
    tags: ["Middle Eastern", "chickpeas", "tahini", "couscous"],
  },
  {
    title: "Vegetarian Poke Bowl",
    source: "Tastemade",
    url: "https://www.tastemade.com/recipes/vegetarian-poke-bowl",
    time: "50 min",
    why: "Sweet potato, sushi rice, edamame, cucumber, avocado, radish, sesame, soy, and spicy mayo. Poke without salmon.",
    tags: ["poke", "sweet potato", "edamame", "sushi rice"],
  },
  {
    title: "Tofu Poke Bowl",
    source: "House Foods",
    url: "https://www.house-foods.com/recipes/tofu-poke-bowl",
    time: "40 min",
    why: "Marinated tofu with soy, rice vinegar, sesame, ginger, garlic, spinach, avocado, and rice. Easy and supermarket-friendly.",
    tags: ["tofu", "poke", "sesame", "quick"],
  },
];

const sections = [
  "Vegetarian Protein",
  "Rice, Noodles & Grains",
  "Fresh Produce",
  "Sauces & Condiments",
  "Cans, Jars & Dry Goods",
  "Nice-to-Have",
];

const items = [
  { id: "tofu", section: "Vegetarian Protein", name: "Firm or extra-firm tofu", quantity: 4, unit: "blocks", note: "For banh mi, gochujang, and poke bowls" },
  { id: "chickpeas", section: "Vegetarian Protein", name: "Canned chickpeas", quantity: 2, unit: "400 g cans", note: "For shawarma bowls" },
  { id: "edamame", section: "Vegetarian Protein", name: "Shelled edamame", quantity: 1, unit: "bag", note: "Frozen section, for poke bowls" },
  { id: "sushi-rice", section: "Rice, Noodles & Grains", name: "Sushi rice or short grain rice", quantity: 1.5, unit: "kg bag", note: "For poke and Korean bowls" },
  { id: "brown-rice", section: "Rice, Noodles & Grains", name: "Brown rice or jasmine rice", quantity: 1, unit: "kg bag", note: "For tofu poke bowls or swaps" },
  { id: "couscous", section: "Rice, Noodles & Grains", name: "Couscous", quantity: 1, unit: "box", note: "For chickpea shawarma bowls" },
  { id: "rice-noodles", section: "Rice, Noodles & Grains", name: "Vermicelli rice noodles", quantity: 200, unit: "g", note: "Optional banh mi bowl base if not using rice" },
  { id: "sweet-potatoes", section: "Fresh Produce", name: "Kumara or orange sweet potatoes", quantity: 2, unit: "large", note: "For vegetarian poke bowls" },
  { id: "cucumbers", section: "Fresh Produce", name: "Cucumbers", quantity: 3, unit: "", note: "For poke, pickles, and shawarma" },
  { id: "carrots", section: "Fresh Produce", name: "Carrots", quantity: 5, unit: "", note: "For banh mi pickles and bowls" },
  { id: "radishes", section: "Fresh Produce", name: "Radishes", quantity: 1, unit: "bunch", note: "For poke and banh mi crunch" },
  { id: "avocados", section: "Fresh Produce", name: "Avocados", quantity: 4, unit: "", note: "For poke and Korean bowls" },
  { id: "spinach", section: "Fresh Produce", name: "Baby spinach", quantity: 1, unit: "bag", note: "For tofu poke bowls" },
  { id: "lettuce", section: "Fresh Produce", name: "Cos or iceberg lettuce", quantity: 1, unit: "head", note: "For banh mi bowl greens" },
  { id: "tomatoes", section: "Fresh Produce", name: "Tomatoes", quantity: 4, unit: "", note: "For shawarma bowls" },
  { id: "red-onion", section: "Fresh Produce", name: "Red onion", quantity: 1, unit: "", note: "For shawarma bowls" },
  { id: "shallots", section: "Fresh Produce", name: "Shallots", quantity: 2, unit: "", note: "For crispy poke topping" },
  { id: "spring-onions", section: "Fresh Produce", name: "Spring onions", quantity: 1, unit: "bunch", note: "For poke and Korean bowls" },
  { id: "garlic", section: "Fresh Produce", name: "Garlic", quantity: 2, unit: "bulbs", note: "For sauces and marinades" },
  { id: "ginger", section: "Fresh Produce", name: "Fresh ginger", quantity: 1, unit: "large knob", note: "For tofu marinades" },
  { id: "lemons", section: "Fresh Produce", name: "Lemons", quantity: 3, unit: "", note: "For tahini dressing" },
  { id: "limes", section: "Fresh Produce", name: "Limes", quantity: 3, unit: "", note: "For banh mi bowls and rice" },
  { id: "coriander", section: "Fresh Produce", name: "Fresh coriander", quantity: 2, unit: "bunches", note: "For banh mi and Korean bowls" },
  { id: "parsley", section: "Fresh Produce", name: "Fresh parsley", quantity: 1, unit: "bunch", note: "For shawarma bowls" },
  { id: "jalapenos", section: "Fresh Produce", name: "Jalapenos or red chillies", quantity: 4, unit: "", note: "For banh mi heat" },
  { id: "soy", section: "Sauces & Condiments", name: "Soy sauce or tamari", quantity: 1, unit: "bottle", note: "For tofu marinades and poke sauce" },
  { id: "rice-vinegar", section: "Sauces & Condiments", name: "Rice vinegar", quantity: 1, unit: "bottle", note: "For pickles and sauces" },
  { id: "sesame-oil", section: "Sauces & Condiments", name: "Sesame oil", quantity: 1, unit: "bottle", note: "For Korean and poke flavour" },
  { id: "gochujang", section: "Sauces & Condiments", name: "Gochujang paste", quantity: 1, unit: "tub", note: "Check international aisle" },
  { id: "tahini", section: "Sauces & Condiments", name: "Tahini", quantity: 1, unit: "jar", note: "For shawarma dressing" },
  { id: "sriracha", section: "Sauces & Condiments", name: "Sriracha", quantity: 1, unit: "bottle", note: "For spicy mayo and bowls" },
  { id: "mayo", section: "Sauces & Condiments", name: "Mayonnaise or Kewpie mayo", quantity: 1, unit: "bottle", note: "Use vegan mayo if needed" },
  { id: "honey-maple", section: "Sauces & Condiments", name: "Honey or maple syrup", quantity: 1, unit: "bottle", note: "Use maple syrup for vegan" },
  { id: "vegetable-stock", section: "Cans, Jars & Dry Goods", name: "Vegetable stock", quantity: 1, unit: "carton or cubes", note: "For couscous" },
  { id: "sesame-seeds", section: "Cans, Jars & Dry Goods", name: "Sesame seeds", quantity: 1, unit: "packet", note: "For poke and Korean bowls" },
  { id: "shawarma-spice", section: "Cans, Jars & Dry Goods", name: "Shawarma spice blend", quantity: 1, unit: "jar", note: "Or use cumin, paprika, curry powder, cinnamon, and coriander" },
  { id: "cornstarch", section: "Cans, Jars & Dry Goods", name: "Cornflour/cornstarch", quantity: 1, unit: "box", note: "For crispier tofu" },
  { id: "brown-sugar", section: "Cans, Jars & Dry Goods", name: "Brown sugar", quantity: 1, unit: "pack", note: "For sauces" },
  { id: "oil", section: "Cans, Jars & Dry Goods", name: "Neutral cooking oil", quantity: 1, unit: "bottle", note: "Canola, rice bran, or vegetable oil" },
  { id: "olive-oil", section: "Cans, Jars & Dry Goods", name: "Olive oil", quantity: 1, unit: "bottle", note: "For shawarma bowls" },
  { id: "salt-pepper", section: "Cans, Jars & Dry Goods", name: "Salt and black pepper", quantity: 1, unit: "each", note: "Pantry check" },
  { id: "furikake", section: "Nice-to-Have", name: "Furikake", quantity: 1, unit: "jar", note: "Check that it is vegetarian if your friend avoids fish flakes" },
  { id: "pickled-ginger", section: "Nice-to-Have", name: "Pickled ginger", quantity: 1, unit: "jar", note: "Great on poke and Korean bowls" },
  { id: "kimchi", section: "Nice-to-Have", name: "Vegetarian kimchi", quantity: 1, unit: "jar", note: "Some kimchi contains fish sauce, so check label" },
  { id: "nori", section: "Nice-to-Have", name: "Nori seaweed sheets", quantity: 1, unit: "pack", note: "For poke bowls" },
];

const watchItems = [
  "Check labels for vegetarian gochujang, kimchi, furikake, and mayo if your friend is strict vegetarian or vegan.",
  "Firm tofu is the safest all-rounder; extra-firm is even better for crisping.",
  "Frozen shelled edamame is usually easier than fresh.",
  "If shawarma spice is missing, use cumin, smoked paprika, curry powder, coriander, cinnamon, salt, and pepper.",
];

const state = {
  selectedSection: "All",
  hideChecked: false,
  servings: 4,
  checked: new Set(JSON.parse(localStorage.getItem("vegetarianRecipeShopChecked") || "[]")),
};

const recipeGrid = document.querySelector("#recipeGrid");
const shoppingList = document.querySelector("#shoppingList");
const filters = document.querySelector("#filters");
const watchList = document.querySelector("#watchList");
const progressFill = document.querySelector("#progressFill");
const progressText = document.querySelector("#progressText");
const checkedCount = document.querySelector("#checkedCount");
const visibleCount = document.querySelector("#visibleCount");
const mealCount = document.querySelector("#mealCount");
const servingsInput = document.querySelector("#servings");
const hideCheckedButton = document.querySelector("#hideChecked");

function formatQuantity(item) {
  const multiplier = state.servings / 4;

  if (!Number.isFinite(item.quantity) || item.unit.includes("bag") || item.unit.includes("bottle") || item.unit.includes("jar") || item.unit.includes("pack") || item.unit.includes("tub") || item.unit.includes("box") || item.unit.includes("carton")) {
    return `${item.quantity} ${item.unit}`.trim();
  }

  const scaled = item.quantity * multiplier;
  const formatted = scaled >= 10 ? Math.round(scaled) : Number(scaled.toFixed(1)).toString();
  return `${formatted} ${item.unit}`.trim();
}

function saveChecked() {
  localStorage.setItem("vegetarianRecipeShopChecked", JSON.stringify([...state.checked]));
}

function renderRecipes() {
  recipeGrid.innerHTML = recipes.map((recipe) => `
    <article class="recipe-card">
      <div>
        <p class="recipe-meta">${recipe.source} • ${recipe.time}</p>
        <h3>${recipe.title}</h3>
        <p>${recipe.why}</p>
        <div class="tag-row">
          ${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <a href="${recipe.url}" target="_blank" rel="noreferrer">View recipe</a>
    </article>
  `).join("");
}

function renderFilters() {
  const allSections = ["All", ...sections];
  filters.innerHTML = allSections.map((section) => `
    <button type="button" class="filter-button${state.selectedSection === section ? " active" : ""}" data-section="${section}">
      ${section}
    </button>
  `).join("");
}

function getVisibleItems() {
  return items.filter((item) => {
    const sectionMatch = state.selectedSection === "All" || item.section === state.selectedSection;
    const checkedMatch = !state.hideChecked || !state.checked.has(item.id);
    return sectionMatch && checkedMatch;
  });
}

function renderShoppingList() {
  const visibleItems = getVisibleItems();
  const grouped = sections
    .map((section) => ({
      section,
      items: visibleItems.filter((item) => item.section === section),
    }))
    .filter((group) => group.items.length > 0);

  shoppingList.innerHTML = grouped.length
    ? grouped.map((group) => `
      <article class="section-card">
        <h3>${group.section}</h3>
        <div class="item-list">
          ${group.items.map((item) => {
            const isChecked = state.checked.has(item.id);
            return `
              <label class="shop-item${isChecked ? " checked" : ""}">
                <input type="checkbox" data-id="${item.id}" ${isChecked ? "checked" : ""}>
                <span>
                  <span class="item-name">${item.name}</span>
                  <span class="item-note">${item.note}</span>
                </span>
                <span class="item-quantity">${formatQuantity(item)}</span>
              </label>
            `;
          }).join("")}
        </div>
      </article>
    `).join("")
    : `<article class="section-card"><h3>Nothing showing</h3><div class="item-list"><p class="shop-item">Change the filter or show ticked items.</p></div></article>`;

  visibleCount.textContent = visibleItems.length;
}

function renderWatchList() {
  watchList.innerHTML = watchItems.map((item) => `<li>${item}</li>`).join("");
}

function renderProgress() {
  const checked = state.checked.size;
  const total = items.length;
  const percent = total ? Math.round((checked / total) * 100) : 0;

  progressFill.style.width = `${percent}%`;
  checkedCount.textContent = checked;
  progressText.textContent = checked === 0
    ? "Nothing ticked yet."
    : `${checked} of ${total} items ticked off.`;
  mealCount.textContent = state.servings * recipes.length;
}

function renderAll() {
  servingsInput.value = state.servings;
  hideCheckedButton.classList.toggle("active", state.hideChecked);
  hideCheckedButton.textContent = state.hideChecked ? "Show ticked" : "Hide ticked";
  renderFilters();
  renderShoppingList();
  renderProgress();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;
  state.selectedSection = button.dataset.section;
  renderAll();
});

shoppingList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox'][data-id]");
  if (!checkbox) return;
  if (checkbox.checked) {
    state.checked.add(checkbox.dataset.id);
  } else {
    state.checked.delete(checkbox.dataset.id);
  }
  saveChecked();
  renderAll();
});

document.querySelector("#resetList").addEventListener("click", () => {
  state.checked.clear();
  saveChecked();
  renderAll();
});

hideCheckedButton.addEventListener("click", () => {
  state.hideChecked = !state.hideChecked;
  renderAll();
});

document.querySelector("#openAllRecipes").addEventListener("click", () => {
  recipes.forEach((recipe) => window.open(recipe.url, "_blank", "noreferrer"));
});

document.querySelector("#decreaseServings").addEventListener("click", () => {
  state.servings = Math.max(2, state.servings - 1);
  renderAll();
});

document.querySelector("#increaseServings").addEventListener("click", () => {
  state.servings = Math.min(8, state.servings + 1);
  renderAll();
});

servingsInput.addEventListener("input", () => {
  const next = Number(servingsInput.value);
  if (Number.isFinite(next)) {
    state.servings = Math.min(8, Math.max(2, Math.round(next)));
    renderAll();
  }
});

renderRecipes();
renderWatchList();
renderAll();
