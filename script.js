const locations = [
  {
    id: 1,
    type: "task",
    name: "Ljubljanski grad",
    color: "red",
    coords: [46.04887723885512, 14.508516697767506],
    radius: 70,
    description: "A medieval castle with great views.",
    image: "https://i.ibb.co/chQ5wPQp/lj-1.png",
  },
  {
    id: 2,
    type: "task",
    name: "Zmajski most",
    color: "red",
    coords: [46.05195229742527, 14.510419508731907],
    radius: 40,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/9HpHqwQy/lj-2.jpg",
  },
  {
    id: 3,
    type: "task",
    name: "Prešernov trg",
    color: "red",
    coords: [46.051469570006105, 14.506069760382779],
    radius: 80,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/KxqvxWCH/lj-3.jpg",
  },
  {
    id: 4,
    type: "task",
    name: "Vurnikova hiša",
    color: "red",
    coords: [46.052895034553195, 14.506633258317502],
    radius: 50,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/sJMrW2DX/lj-4.jpg",
  },
  {
    id: 5,
    type: "task",
    name: "Kranjska klobasa",
    color: "red",
    coords: [46.05049640723421, 14.50784185214829],
    radius: 50,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/0RVkxxqx/lj-5.jpg",
  },
  {
    id: 6,
    type: "task",
    name: "Kavica ob Ljubljanici",
    color: "red",
    coords: [46.049769714464524, 14.505694765620948],
    radius: 50,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/bjNGzdHB/lj-6.jpg",
  },
  {
    id: 7,
    type: "task",
    name: "Nebotičnik",
    color: "red",
    coords: [46.05323058809274, 14.503629897616051],
    radius: 50,
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/s9ms6svk/lj-7.jpg",
  },
  {
    id: 8,
    type: "info",
    name: "Mesarski most",
    coords: [46.05171502773523, 14.508808453644127],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/N67jvWKg/lj-8.jpg",
  },
  {
    id: 9,
    type: "info",
    name: "Trznica",
    coords: [46.051136349597336, 14.509456541999482],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/gM8Z911k/lj-9.jpg",
  },
  {
    id: 10,
    type: "info",
    name: "Kongresni trg",
    coords: [46.04980559423642, 14.50358183508987],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/d3jwfwb/lj-10.jpg",
  },
  {
    id: 11,
    type: "info",
    name: "Trg republike",
    coords: [46.05110324079768, 14.50085678951613],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/FqXrMtkV/lj-11.jpg",
  },
  {
    id: 12,
    type: "info",
    name: "Staro mesto",
    coords: [46.04848968540639, 14.506199479030277],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/gZHb87T2/lj-12.jpg",
  },
  {
    id: 13,
    type: "info",
    name: "Rotovz",
    coords: [46.049998442421646, 14.50704535790634],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/B5Z8NZnK/lj-13.jpg",
  },
  {
    id: 14,
    type: "info",
    name: "Burek Olimpija",
    coords: [46.0567204182898, 14.506212890601223],
    description: "The central square of Ljubljana.",
    image: "https://i.ibb.co/ymbt5szT/lj-14.jpg",
  },
];

// Load saved progress
let stored = localStorage.getItem("doneLocations");

let doneLocations;

try {
  doneLocations = JSON.parse(stored);
  if (!Array.isArray(doneLocations)) {
    doneLocations = [];
  }
} catch (e) {
  doneLocations = [];
}

const map = L.map("map").setView([46.05119666413018, 14.50585464240494], 15);

// Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// GPS location
if (navigator.geolocation) {
  navigator.geolocation.watchPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    if (!window.userMarker) {
      window.userMarker = L.circleMarker([lat, lng], {
        radius: 8,
        color: "blue",
      }).addTo(map);
    } else {
      window.userMarker.setLatLng([lat, lng]);
    }
  });
}

// Create markers
const markers = [];

locations.forEach((loc) => {
  let marker;

  if (loc.type === "task") {
    marker = L.circle(loc.coords, {
      radius: loc.radius,
      color: loc.color,
    }).addTo(map);
  } else {
    marker = L.marker(loc.coords, {
      color: loc.color,
    }).addTo(map);
  }

  // Apply done style only for task markers
  if (loc.type === "task" && doneLocations.includes(loc.id)) {
    marker.getElement()?.classList.add("done-marker");
  }

  marker.on("click", () => {
    openCard(loc);
  });

  markers.push({ marker, id: loc.id, type: loc.type });
});

function openCard(loc) {
  const overlay = document.getElementById("cardOverlay");
  const body = document.getElementById("cardBody");

  const isDone = doneLocations.includes(loc.id);

  let content = `
    <center><h2>${loc.name}</h2></center>
    <p>${loc.description}</p>
    <img src="${loc.image}">
  `;

  if (loc.type === "task") {
    content += `
  <button class="action-btn ${isDone ? "done" : ""}" onclick="toggleDone(${loc.id}); closeCard();">
    ${isDone ? "✓ Completed" : "Mark as Done"}
  </button>
`;
  }

  body.innerHTML = content;
  overlay.classList.remove("hidden");
}

function closeCard() {
  const overlay = document.getElementById("cardOverlay");
  overlay.classList.add("hidden");
}

// Close button
document.getElementById("closeCard").addEventListener("click", closeCard);

// Close when clicking outside card
document.getElementById("cardOverlay").addEventListener("click", (e) => {
  if (!document.getElementById("cardContent").contains(e.target)) {
    closeCard();
  }
});

// Toggle Done
function toggleDone(id) {
  if (doneLocations.includes(id)) {
    doneLocations = doneLocations.filter((i) => i !== id);
  } else {
    doneLocations.push(id);
  }

  localStorage.setItem("doneLocations", JSON.stringify(doneLocations));
  updateMarkers();
  updateProgress();
}

// Update markers
function updateMarkers() {
  markers.forEach((m) => {
    const el = m.marker.getElement();
    if (!el) return;

    if (doneLocations.includes(m.id)) {
      el.classList.add("done-marker");
    } else {
      el.classList.remove("done-marker");
    }
  });
}

// Update progress
function updateProgress() {
  const taskLocations = locations.filter((l) => l.type === "task");
  const percent = (doneLocations.length / taskLocations.length) * 100;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  bar.style.width = percent + "%";
  text.innerText = Math.round(percent) + "%";

  bar.classList.remove("progress-low", "progress-mid", "progress-high");

  if (percent < 40) {
    bar.classList.add("progress-low");
  } else if (percent < 80) {
    bar.classList.add("progress-mid");
  } else {
    bar.classList.add("progress-high");
  }
}

updateProgress();
