const steels = [
  {
    id: "shirogami-1",
    name: "Shirogami #1",
    family: "carbon",
    summary: "Maximum traditional sharpness with very high care needs.",
    bestFor: "Pure sharpness and fast sharpening",
    ratings: { sharpness: 5, edgeLife: 3, sharpening: 5, corrosion: 1 }
  },
  {
    id: "shirogami-2",
    name: "Shirogami #2",
    family: "carbon",
    summary: "White carbon bite with a slightly calmer, tougher feel than #1.",
    bestFor: "Classic carbon feel with easy sharpening",
    ratings: { sharpness: 5, edgeLife: 3, sharpening: 5, corrosion: 1 }
  },
  {
    id: "ginsan",
    name: "Ginsan (Silver #3)",
    family: "stainless",
    summary: "Carbon-like refinement with stainless convenience.",
    bestFor: "Daily prep, moisture, and lower maintenance",
    ratings: { sharpness: 4.5, edgeLife: 4, sharpening: 4, corrosion: 5 }
  },
  {
    id: "aogami-1",
    name: "Aogami #1",
    family: "carbon",
    summary: "Blue steel balance: sharp, durable, and still pleasant to sharpen.",
    bestFor: "A balanced carbon upgrade",
    ratings: { sharpness: 4.5, edgeLife: 4, sharpening: 4, corrosion: 1 }
  },
  {
    id: "aogami-2",
    name: "Aogami #2",
    family: "carbon",
    summary: "Blue steel with a practical balance of edge life, toughness, and sharpenability.",
    bestFor: "Classic blue-paper balance",
    ratings: { sharpness: 4.5, edgeLife: 4, sharpening: 4, corrosion: 1 }
  },
  {
    id: "aogami-super",
    name: "Aogami Super",
    family: "carbon",
    summary: "High edge retention with more sharpening effort.",
    bestFor: "Carbon edge life",
    ratings: { sharpness: 4.5, edgeLife: 5, sharpening: 3, corrosion: 1 }
  },
  {
    id: "vg1",
    name: "VG1",
    family: "stainless",
    summary: "Takefu stainless with good sharpness and easy care, simpler than VG10.",
    bestFor: "Reliable stainless at moderate hardness",
    ratings: { sharpness: 4, edgeLife: 3.5, sharpening: 3.5, corrosion: 4.5 }
  },
  {
    id: "vg10",
    name: "VG10",
    family: "stainless",
    summary: "Famous Japanese cobalt stainless: clean edge, strong corrosion resistance, and solid retention.",
    bestFor: "All-around Japanese stainless",
    ratings: { sharpness: 4.5, edgeLife: 4, sharpening: 3, corrosion: 5 }
  },
  {
    id: "aus10",
    name: "AUS10",
    family: "stainless",
    summary: "Aichi stainless with more carbon than AUS8, giving better bite and edge life.",
    bestFor: "Tough, approachable stainless",
    ratings: { sharpness: 4, edgeLife: 3.5, sharpening: 3.5, corrosion: 4.5 }
  },
  {
    id: "aus8",
    name: "AUS8",
    family: "stainless",
    summary: "User-friendly Japanese stainless that sharpens easily and resists corrosion well.",
    bestFor: "Beginner-friendly stainless",
    ratings: { sharpness: 3.5, edgeLife: 3, sharpening: 4, corrosion: 4.5 }
  },
  {
    id: "sg2-r2",
    name: "SG2/R2",
    family: "powder",
    summary: "Powder stainless with long edge life and low rust worry.",
    bestFor: "Premium stainless edge retention",
    ratings: { sharpness: 4.5, edgeLife: 5, sharpening: 2, corrosion: 5 }
  },
  {
    id: "hap40",
    name: "HAP40",
    family: "powder",
    summary: "High-speed powder steel with huge edge retention and more sharpening effort.",
    bestFor: "Long service between sharpenings",
    ratings: { sharpness: 4.5, edgeLife: 5, sharpening: 1.5, corrosion: 3 }
  },
  {
    id: "zdp-189",
    name: "ZDP-189",
    family: "powder",
    summary: "Extreme edge retention, but demanding to sharpen.",
    bestFor: "Longest cutting sessions between sharpening",
    ratings: { sharpness: 4.5, edgeLife: 5, sharpening: 1, corrosion: 4 }
  },
  {
    id: "sld",
    name: "SLD",
    family: "tool",
    summary: "Semi-stainless tool steel with strong wear resistance and a toothy working edge.",
    bestFor: "Hard prep work and edge life",
    ratings: { sharpness: 4, edgeLife: 4.5, sharpening: 2.5, corrosion: 3 }
  },
  {
    id: "skd11",
    name: "SKD11",
    family: "tool",
    summary: "Japanese D2-style tool steel: durable, wear resistant, and only semi-stainless.",
    bestFor: "Tough edge retention",
    ratings: { sharpness: 4, edgeLife: 4.5, sharpening: 2.5, corrosion: 2.5 }
  },
  {
    id: "52100",
    name: "52100",
    family: "carbon",
    summary: "Classic carbon steel with solid balance and moderate upkeep.",
    bestFor: "A practical carbon workhorse",
    ratings: { sharpness: 4.5, edgeLife: 4, sharpening: 4, corrosion: 2 }
  },
  {
    id: "26c3",
    name: "26C3 (Spicy White)",
    family: "carbon",
    summary: "Very fine-grained carbon steel for keen edges.",
    bestFor: "White-steel-like sharpness with character",
    ratings: { sharpness: 5, edgeLife: 3, sharpening: 5, corrosion: 1 }
  },
  {
    id: "sk5",
    name: "SK5",
    family: "carbon",
    summary: "Straightforward Japanese carbon steel: easy to sharpen, tough, and reactive.",
    bestFor: "Budget carbon and utility knives",
    ratings: { sharpness: 4, edgeLife: 3, sharpening: 4.5, corrosion: 1 }
  },
  {
    id: "mbs26",
    name: "MBS-26",
    family: "stainless",
    summary: "Fine-grained Japanese stainless known for clean sharpening and dependable kitchen performance.",
    bestFor: "Thin, precise stainless gyuto and petty knives",
    ratings: { sharpness: 4, edgeLife: 3.5, sharpening: 4, corrosion: 4.5 }
  },
  {
    id: "cromova18",
    name: "CROMOVA 18",
    family: "stainless",
    summary: "GLOBAL's famous stainless: stain resistant, tough, and easy to live with.",
    bestFor: "Low-maintenance daily cooking",
    ratings: { sharpness: 3.5, edgeLife: 3, sharpening: 4, corrosion: 5 }
  }
];

const priorities = [
  { key: "sharpness", label: "Maximum sharpness", value: 4 },
  { key: "edgeLife", label: "Edge retention", value: 3 },
  { key: "sharpening", label: "Ease of sharpening", value: 3 },
  { key: "corrosion", label: "Corrosion resistance", value: 5 }
];

const metrics = [
  { key: "sharpness", label: "Maximum sharpness" },
  { key: "edgeLife", label: "Edge retention" },
  { key: "sharpening", label: "Ease of sharpening" },
  { key: "corrosion", label: "Corrosion resistance" }
];

let selectedSteelIds = ["ginsan", "aogami-2", "vg10", "aus10"];

const controls = document.getElementById("controls");
const steelOptions = document.getElementById("steelOptions");
const selectionCount = document.getElementById("selectionCount");
const selectAll = document.getElementById("selectAll");
const clearSelection = document.getElementById("clearSelection");
const scoreCards = document.getElementById("scoreCards");
const comparisonRows = document.getElementById("comparisonRows");
const steelDetails = document.getElementById("steelDetails");
const topPick = document.getElementById("topPick");
const topReason = document.getElementById("topReason");

function selectedSteels() {
  return steels.filter((steel) => selectedSteelIds.includes(steel.id));
}

function createControls() {
  controls.innerHTML = priorities.map((item) => `
    <div class="control-row">
      <label for="${item.key}">${item.label}</label>
      <output id="${item.key}Value" for="${item.key}">${item.value}</output>
      <input id="${item.key}" type="range" min="0" max="5" step="1" value="${item.value}">
    </div>
  `).join("");

  priorities.forEach((item) => {
    const input = document.getElementById(item.key);
    input.addEventListener("input", () => {
      item.value = Number(input.value);
      document.getElementById(`${item.key}Value`).textContent = item.value;
      render();
    });
  });
}

function createSteelOptions() {
  steelOptions.innerHTML = steels.map((steel) => `
    <label class="steel-option" for="${steel.id}">
      <input id="${steel.id}" type="checkbox" value="${steel.id}" ${selectedSteelIds.includes(steel.id) ? "checked" : ""}>
      <span>
        <strong>${steel.name}</strong>
        <small>${steel.bestFor}</small>
      </span>
    </label>
  `).join("");

  steels.forEach((steel) => {
    const input = document.getElementById(steel.id);
    input.addEventListener("change", () => {
      if (input.checked) {
        selectedSteelIds = [...selectedSteelIds, steel.id];
      } else {
        selectedSteelIds = selectedSteelIds.filter((id) => id !== steel.id);
      }

      if (selectedSteelIds.length === 0) {
        selectedSteelIds = [steel.id];
        input.checked = true;
      }

      render();
    });
  });
}

function syncOptionChecks() {
  steels.forEach((steel) => {
    const input = document.getElementById(steel.id);
    if (input) input.checked = selectedSteelIds.includes(steel.id);
  });
}

function weightedScore(steel) {
  const totalWeight = priorities.reduce((sum, item) => sum + item.value, 0) || 1;
  const score = priorities.reduce((sum, item) => {
    return sum + steel.ratings[item.key] * item.value;
  }, 0);

  return Math.round((score / (totalWeight * 5)) * 100);
}

function familyLabel(steel) {
  if (steel.family === "powder") return "Powder stainless";
  if (steel.family === "tool") return "Tool / semi-stainless";
  if (steel.family === "stainless") return "Stainless";
  return "Carbon";
}

function renderScores() {
  const ranked = selectedSteels()
    .map((steel) => ({ ...steel, score: weightedScore(steel) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  const topScore = ranked[0].score;
  const winners = ranked.filter((steel) => steel.score === topScore);

  topPick.textContent = winners.map((steel) => steel.name).join(", ");
  topReason.textContent = winners.length === 1
    ? winners[0].summary
    : `${winners.length} steels tie at ${topScore}%. Compare their detail cards to choose by feel and maintenance.`;
  selectionCount.textContent = `${ranked.length} selected`;
  selectAll.textContent = ranked.length === steels.length ? "All selected" : "Select all";

  scoreCards.innerHTML = ranked.map((steel) => `
    <article class="score-card ${steel.family}">
      <div class="score-head">
        <span>${steel.name}</span>
        <strong>${steel.score}%</strong>
      </div>
      <div class="meter"><span style="width:${steel.score}%"></span></div>
      <p>${steel.summary}</p>
    </article>
  `).join("");
}

function ratingText(value) {
  if (value === 5) return "5 / 5";
  if (value === 4.5) return "4.5 / 5";
  return `${value} / 5`;
}

function dots(value, family) {
  const full = Math.floor(value);
  const half = value % 1 !== 0;
  return `<div class="dots" aria-label="${ratingText(value)}">${Array.from({ length: 5 }, (_, index) => {
    const active = index < full || (half && index === full);
    const halfClass = half && index === full ? " half" : "";
    return `<span class="dot${active ? ` on ${family}` : ""}${halfClass}"></span>`;
  }).join("")}</div>`;
}

function renderComparisons() {
  const chosen = selectedSteels();
  comparisonRows.style.setProperty("--selected-count", chosen.length);

  comparisonRows.innerHTML = metrics.map((metric) => {
    const best = Math.max(...chosen.map((steel) => steel.ratings[metric.key]));
    const cells = chosen.map((steel) => {
      const value = steel.ratings[metric.key];
      const isBest = value === best;
      return `
        <div class="metric-cell ${isBest ? `best ${steel.family}` : ""}">
          <strong>${steel.name}</strong>
          <span>${ratingText(value)} · ${familyLabel(steel)}</span>
          ${dots(value, steel.family)}
        </div>
      `;
    }).join("");

    return `
      <div class="comparison-row">
        <div class="metric-name">${metric.label}</div>
        ${cells}
      </div>
    `;
  }).join("");
}

function renderDetails() {
  steelDetails.innerHTML = selectedSteels().map((steel) => `
    <article class="detail-card ${steel.family}">
      <div>
        <span>${familyLabel(steel)}</span>
        <h3>${steel.name}</h3>
      </div>
      <p>${steel.summary}</p>
      <strong>${steel.bestFor}</strong>
    </article>
  `).join("");
}

function render() {
  renderScores();
  renderComparisons();
  renderDetails();
}

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-toggle-icon");
const themeLabel = themeToggle.querySelector(".theme-toggle-label");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "Light" : "Dark";
}

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

createControls();
createSteelOptions();
selectAll.addEventListener("click", () => {
  selectedSteelIds = steels.map((steel) => steel.id);
  syncOptionChecks();
  render();
});

clearSelection.addEventListener("click", () => {
  selectedSteelIds = ["ginsan"];
  syncOptionChecks();
  render();
});
render();
