const recipes = [
  {
    title: "Vietnamese Noodles with Lemongrass Chicken",
    source: "RecipeTin Eats",
    url: "https://www.recipetineats.com/vietnamese-chicken-noodle-bowl/comment-page-12/",
    time: "30 min",
    why: "Fresh herbs, crunchy veg, fish sauce, lime, and chicken thighs. Very close to the banh mi and poke-bowl side of your list.",
    tags: ["Vietnamese", "chicken", "noodles", "fresh"],
  },
  {
    title: "Korean Beef Bulgogi Rice Bowls",
    source: "RecipeTin Eats",
    url: "https://www.recipetineats.com/korean-beef-bulgogi-rice-bowls-the-easy-way/comment-page-2/",
    time: "25 min",
    why: "Fast beef mince bowl with soy, sesame, apple, carrot, greens, avocado, and pickled ginger.",
    tags: ["Korean", "beef", "rice bowl", "quick"],
  },
  {
    title: "Vietnamese Caramelised Pork Bowls",
    source: "RecipeTin Eats",
    url: "https://www.recipetineats.com/vietnamese-caramelised-pork-bowls/comment-page-14/",
    time: "20 min",
    why: "Sweet-salty pork mince over rice with cucumber and carrot. Easy fakeaway energy.",
    tags: ["Vietnamese", "pork", "rice bowl", "budget"],
  },
  {
    title: "Chicken Shawarma Bowls",
    source: "Canadian Living",
    url: "https://www.canadianliving.com/food/lunch-and-dinner/recipe/chicken-shawarma-bowls",
    time: "30 min",
    why: "Keeps the tahini, chicken, tomato, greens, and Middle Eastern flavour from your Appetise favourites.",
    tags: ["Middle Eastern", "chicken", "tahini", "salad"],
  },
  {
    title: "Stir-Fried Gochujang Chicken",
    source: "AP / Milk Street",
    url: "https://apnews.com/article/stirfried-chicken-recipe-milk-street-a8b4b8460a8a4d62c7310befe6c66cf7",
    time: "30 min",
    why: "Gochujang, ginger, garlic, soy, and chicken thighs. Simple, punchy, and made for rice.",
    tags: ["Korean", "chicken", "gochujang", "quick"],
  },
];

const sections = [
  "Meat",
  "Rice, Noodles & Grains",
  "Fresh Produce",
  "Sauces & Condiments",
  "Cans, Jars & Dry Goods",
  "Nice-to-Have",
];

const items = [
  { id: "chicken-thighs", section: "Meat", name: "Boneless skinless chicken thighs", quantity: 2.5, unit: "kg", note: "For lemongrass chicken, shawarma bowls, and gochujang chicken" },
  { id: "beef-mince", section: "Meat", name: "Beef mince", quantity: 500, unit: "g", note: "For bulgogi rice bowls" },
  { id: "pork-mince", section: "Meat", name: "Pork mince", quantity: 500, unit: "g", note: "For Vietnamese caramelised pork bowls" },
  { id: "rice", section: "Rice, Noodles & Grains", name: "Jasmine or medium grain rice", quantity: 2, unit: "kg bag", note: "Covers the rice bowl dinners" },
  { id: "vermicelli", section: "Rice, Noodles & Grains", name: "Vermicelli rice noodles", quantity: 200, unit: "g", note: "For lemongrass chicken noodle bowls" },
  { id: "bulgur", section: "Rice, Noodles & Grains", name: "Bulgur wheat", quantity: 1, unit: "small bag", note: "Swap with couscous, quinoa, or rice if needed" },
  { id: "lemongrass", section: "Fresh Produce", name: "Lemongrass", quantity: 1, unit: "stalk", note: "Paste is fine if fresh is unavailable" },
  { id: "garlic", section: "Fresh Produce", name: "Garlic", quantity: 2, unit: "bulbs", note: "Used across nearly every recipe" },
  { id: "ginger", section: "Fresh Produce", name: "Fresh ginger", quantity: 1, unit: "large knob", note: "For Korean and Vietnamese sauces" },
  { id: "onions", section: "Fresh Produce", name: "Brown or yellow onions", quantity: 2, unit: "", note: "For pork and bulgogi bowls" },
  { id: "red-onion", section: "Fresh Produce", name: "Red onion", quantity: 1, unit: "", note: "For shawarma bowl topping" },
  { id: "apple", section: "Fresh Produce", name: "Red apple", quantity: 1, unit: "", note: "For the bulgogi sauce" },
  { id: "limes", section: "Fresh Produce", name: "Limes", quantity: 5, unit: "", note: "For Vietnamese sauce and serving" },
  { id: "lemons", section: "Fresh Produce", name: "Lemons", quantity: 2, unit: "", note: "For tahini dressing" },
  { id: "cucumbers", section: "Fresh Produce", name: "Cucumbers", quantity: 3, unit: "", note: "For noodle bowls and crunchy sides" },
  { id: "carrots", section: "Fresh Produce", name: "Carrots", quantity: 5, unit: "", note: "For bowls and fresh sides" },
  { id: "iceberg", section: "Fresh Produce", name: "Iceberg lettuce", quantity: 1, unit: "", note: "For Vietnamese noodle bowls" },
  { id: "spinach", section: "Fresh Produce", name: "Baby spinach", quantity: 1, unit: "bag", note: "For bulgogi bowls" },
  { id: "greens", section: "Fresh Produce", name: "Mixed baby greens or cos lettuce", quantity: 1, unit: "large bag/head", note: "For shawarma bowls" },
  { id: "bean-sprouts", section: "Fresh Produce", name: "Bean sprouts", quantity: 1, unit: "bag", note: "For Vietnamese noodle bowls" },
  { id: "tomatoes", section: "Fresh Produce", name: "Tomatoes", quantity: 6, unit: "", note: "Or 2 punnets cocktail tomatoes" },
  { id: "avocado", section: "Fresh Produce", name: "Avocados", quantity: 2, unit: "", note: "For bulgogi bowls" },
  { id: "spring-onions", section: "Fresh Produce", name: "Spring onions", quantity: 1, unit: "bunch", note: "For garnishes and bowls" },
  { id: "mint", section: "Fresh Produce", name: "Fresh mint", quantity: 1, unit: "bunch", note: "For noodle bowls" },
  { id: "coriander", section: "Fresh Produce", name: "Fresh coriander", quantity: 2, unit: "bunches", note: "For Vietnamese and satay-style garnish" },
  { id: "parsley", section: "Fresh Produce", name: "Fresh parsley", quantity: 1, unit: "bunch", note: "For shawarma bowls" },
  { id: "chillies", section: "Fresh Produce", name: "Red chillies", quantity: 6, unit: "", note: "Use less for milder heat" },
  { id: "fish-sauce", section: "Sauces & Condiments", name: "Fish sauce", quantity: 1, unit: "bottle", note: "Key Vietnamese flavour" },
  { id: "soy-sauce", section: "Sauces & Condiments", name: "Soy sauce", quantity: 1, unit: "bottle", note: "Regular or light soy" },
  { id: "dark-soy", section: "Sauces & Condiments", name: "Dark soy sauce", quantity: 1, unit: "small bottle", note: "Optional; regular soy can cover it" },
  { id: "sesame-oil", section: "Sauces & Condiments", name: "Sesame oil", quantity: 1, unit: "bottle", note: "For Korean sauces and drizzles" },
  { id: "rice-vinegar", section: "Sauces & Condiments", name: "Rice vinegar", quantity: 1, unit: "bottle", note: "For Vietnamese and Korean sauces" },
  { id: "apple-cider-vinegar", section: "Sauces & Condiments", name: "Apple cider vinegar", quantity: 1, unit: "bottle", note: "For peanut sauce; white vinegar also works" },
  { id: "gochujang", section: "Sauces & Condiments", name: "Gochujang paste", quantity: 1, unit: "tub", note: "Check international aisle" },
  { id: "red-curry-paste", section: "Sauces & Condiments", name: "Red curry paste", quantity: 1, unit: "jar", note: "For satay-style sauce" },
  { id: "tahini", section: "Sauces & Condiments", name: "Tahini", quantity: 1, unit: "jar", note: "For shawarma dressing" },
  { id: "peanut-butter", section: "Sauces & Condiments", name: "Natural peanut butter", quantity: 1, unit: "jar", note: "Smooth is easiest for sauce" },
  { id: "pickled-ginger", section: "Sauces & Condiments", name: "Pickled ginger", quantity: 1, unit: "jar", note: "For bulgogi bowls" },
  { id: "coconut-milk", section: "Cans, Jars & Dry Goods", name: "Coconut milk", quantity: 1, unit: "400 ml can", note: "For peanut sauce" },
  { id: "brown-sugar", section: "Cans, Jars & Dry Goods", name: "Brown sugar", quantity: 1, unit: "pack", note: "For bulgogi and pork" },
  { id: "white-sugar", section: "Cans, Jars & Dry Goods", name: "White sugar", quantity: 1, unit: "pack", note: "For sauces" },
  { id: "sesame-seeds", section: "Cans, Jars & Dry Goods", name: "Sesame seeds", quantity: 1, unit: "packet", note: "For Korean bowls and garnish" },
  { id: "peanuts", section: "Cans, Jars & Dry Goods", name: "Roasted peanuts", quantity: 1, unit: "small bag", note: "Chop for garnish" },
  { id: "curry-powder", section: "Cans, Jars & Dry Goods", name: "Curry powder", quantity: 1, unit: "jar", note: "For satay-style chicken" },
  { id: "oil", section: "Cans, Jars & Dry Goods", name: "Neutral cooking oil", quantity: 1, unit: "bottle", note: "Canola, rice bran, or vegetable oil" },
  { id: "olive-oil", section: "Cans, Jars & Dry Goods", name: "Olive oil", quantity: 1, unit: "bottle", note: "For shawarma bowls" },
  { id: "salt-pepper", section: "Cans, Jars & Dry Goods", name: "Salt and black pepper", quantity: 1, unit: "each", note: "Pantry check" },
  { id: "sriracha", section: "Nice-to-Have", name: "Sriracha", quantity: 1, unit: "bottle", note: "Fits your Appetise favourites" },
  { id: "kewpie", section: "Nice-to-Have", name: "Kewpie mayo", quantity: 1, unit: "bottle", note: "Good for poke, bao, tacos, and leftovers" },
  { id: "kimchi", section: "Nice-to-Have", name: "Kimchi", quantity: 1, unit: "jar", note: "PAK'nSAVE has listed kimchi online, but stock may vary" },
  { id: "bao", section: "Nice-to-Have", name: "Bao buns or tortillas", quantity: 1, unit: "pack", note: "For turning leftovers into fakeaway night two" },
];

const watchItems = [
  "Gochujang, tahini, mirin, lemongrass, pickled ginger, and bao buns are the bits most worth checking online before you go.",
  "If bulgur is missing, use couscous, quinoa, or just make extra rice.",
  "If fresh lemongrass is not there, lemongrass paste is the low-stress swap.",
  "PAK'nSAVE Wainoni stock and prices can move around, especially for international aisle items.",
];

const state = {
  selectedSection: "All",
  hideChecked: false,
  servings: 4,
  checked: new Set(JSON.parse(localStorage.getItem("recipeShopChecked") || "[]")),
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

  if (!Number.isFinite(item.quantity) || item.unit.includes("bag") || item.unit.includes("bottle") || item.unit.includes("jar") || item.unit.includes("pack") || item.unit.includes("tub")) {
    return `${item.quantity} ${item.unit}`.trim();
  }

  const scaled = item.quantity * multiplier;
  const formatted = scaled >= 10 ? Math.round(scaled) : Number(scaled.toFixed(1)).toString();
  return `${formatted} ${item.unit}`.trim();
}

function saveChecked() {
  localStorage.setItem("recipeShopChecked", JSON.stringify([...state.checked]));
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

recipeGrid.addEventListener("click", (event) => {
  event.stopPropagation();
});

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
