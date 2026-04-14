const locations = [
  {
    id: 1,
    type: "task",
    name: "Ljubljana Castle 🏰",
    color: "red",
    coords: [46.04887723885512, 14.508516697767506],
    radius: 70,
    description: "Since you only have one day, you’ve got to conquer the peak immediately! 🏃‍♂️ This fortress has watched over the city for centuries, and it’s the best spot to see exactly where you'll be heading for the rest of your afternoon. It’s a steep climb (or a quick funicular ride 🚠), but the view of the Alps is worth the sweat! 🏔️<br><br><b>The Mission:</b><br> Since you’re the <i>Kings and Queens of the Hill</i> for today, find the highest accessible point and take a photo re-enacting a dramatic royal coronation. 🤴 One person must be kneeling while the others use whatever is on hand (a scarf, a water bottle, or a map) to crown them!",
    image: "img/lj-1.jpg",
  },
  {
    id: 2,
    type: "task",
    name: "Dragon Bridge 🐉",
    color: "red",
    coords: [46.05195229742527, 14.510419508731907],
    radius: 40,
    description: "Legend says the dragons wag their tails when a virgin crosses the bridge, but since they haven’t moved since 1901, we’re starting to worry... 😅 These creatures became the city's symbol because the Greek hero Jason supposedly slewed a monster 🐉 in the nearby river while traveling with the Argonauts. 🛶<br><br><b>The Mission:</b></br>Don't just stand next to them! Pick your favorite dragon and take a photo of the whole group <i>terrified</i> and running away from its fiery breath in the background. High drama only! 😱🔥",
    image: "img/lj-2.jpg",
  },
  {
    id: 3,
    type: "task",
    name: "Prešeren Square & Triple Bridge 🌉",
    color: "red",
    coords: [46.051469570006105, 14.506069760382779],
    radius: 80,
    description: "This is the heart of the city, named after a poet who was so obsessed with a girl (Julija) that he stared at her house for eternity. ❤️ The Triple Bridge is right next to it — three bridges side-by-side because, apparently, one just wasn't enough to handle the sheer amount of romantic drama in this square!<br><br><b>The Mission:</b><br>You need to play a game of <i>The Floor is Lava</i> across the bridges. 🔥 Your group must be caught in a photo mid-air or balanced precariously on one foot, looking like you are desperately trying to cross one of the bridges 🌉 without touching the ground. The more panicked the faces, the better!",
    image: "img/lj-3.jpg",
  },
  {
    id: 4,
    type: "task",
    name: "Vurnik House 🎨",
    color: "red",
    coords: [46.052895034553195, 14.506633258317502],
    radius: 50,
    description: "This is arguably the most <i>Instagrammable</i> building in town featuring a facade decorated by the architect's wife with traditional Slovenian embroidery patterns in the colors of the national flag. 🇸🇮<br><br><b>The Mission:</b><br>Use the building as your backdrop and strike your best <i>High Fashion Vogue</i> pose. 👠 Think <i>Blanca Padilla</i> meets Slovenian architecture. We want you to make super dramatic model faces and stiff poses that match the straight lines of the colorful patterns! 📸",
    image: "img/lj-4.jpg",
  },
  {
    id: 5,
    type: "task",
    name: "Kranjska Klobasa 🌭",
    color: "red",
    coords: [46.05049640723421, 14.50784185214829],
    radius: 50,
    description: "You can’t say you’ve lived in Slovenia 🇸🇮 (even for a day!) until you’ve faced the Kranjska Sausage. It’s protected by EU law, which basically means it’s a national treasure you can eat with mustard and a bit of a spicy kick! 🌶️<br><br><b>The Mission:</b><br>Find a spot with a giant sausage 🌭 hanging outside. Then order one and take a photo of the group sharing a single sausage — but try not to actually eat each other’s faces! 🐶🍝",
    image: "img/lj-5.jpg",
  },
  {
    id: 6,
    type: "task",
    name: "Coffee near the Ljubljanica River ☕",
    color: "red",
    coords: [46.049769714464524, 14.505694765620948],
    radius: 50,
    description: "Ljubljana has a massive <i>coffee culture.</i> ☕ People will sit by the river for three hours over one tiny cup of espresso just to watch the world go by. 🕒 Even on a tight schedule, you have to squeeze in at least 15 minutes of being <i>productively lazy</i>.<br><br><b>The Mission:</b><br>Find a spot by the river, order your coffees, and take a photo. ☕ Everyone must have their cup at their lips at the exact same time, pinkies up, looking extremely posh and sophisticated as if you’re at a royal tea party. 🧋",
    image: "img/lj-6.jpg",
  },
  {
    id: 7,
    type: "task",
    name: "Nebotičnik 🏙️",
    color: "red",
    coords: [46.05323058809274, 14.503629897616051],
    radius: 50,
    description: "When it was built, it was the tallest building in the Balkans! It has a beautiful spiral staircase and a rooftop bar with the best view of the castle. 🥂 It’s the perfect place to feel like a high-roller on a student budget before your day ends. 🌇<br><br><b>The Mission:</b><br>Enter the lobby and find the famous spiral staircase! You need to take a <i>Human Slinky</i> photo. 🌀 Line up on the stairs so that each person’s head is visible at a different level of the spiral, looking up at the camera above.",
    image: "img/lj-7.jpg",
  },
  {
    id: 8,
    type: "info",
    name: "Butcher's Bridge 🍖",
    coords: [46.05171502773523, 14.508808453644127],
    description: "Don't let the name fool you—it's not nearly as bloody as it sounds today, though it sits right where the old butcher stalls used to be. 🥩 Today, it’s Ljubljana's <i>Love Bridge,</i> covered in thousands of padlocks left by couples who think their love is as permanent as a piece of hardware. 🔒❤️",
    image: "img/lj-8.jpg",
  },/*
  {
    id: 9,
    type: "info",
    name: "Trznica",
    coords: [46.051136349597336, 14.509456541999482],
    description: "The central square of Ljubljana.",
    image: "img/lj-9.jpg",
  },*/
  {
    id: 10,
    type: "info",
    name: "Congress Square 🏛️",
    coords: [46.04977288014472, 14.503612252261918],
    description: "This square was renovated in 1821 to host the Holy Alliance congress, where the big leaders of Europe gathered to redraw the map of the continent 🌍 after Napoleon was defeated. 🇫🇷 It’s surrounded by the University, the Philharmonic, and the Ursuline Church, making it the most sophisticated spot in town. ✨ <br><br>In the middle lies Park Zvezda (Star Park), so named because the walking paths form a star shape. 🌟 It is a legendary spot for students to <i>study,</i> which in Ljubljana usually means sitting in the grass with a beer while pretending to read a textbook. 🍻",
    image: "img/lj-10.jpg",
  },/*
  {
    id: 11,
    type: "info",
    name: "Republic Square 🏢",
    coords: [46.05110324079768, 14.50085678951613],
    description: "This is the giant concrete heart of Slovenian politics, designed in a <i>Brutalist</i> style that looks like a 1970s sci-fi movie set. 🛸 This is the exact location where Slovenia’s independence was officially declared in 1991! 🇸🇮 The two massive triangular towers were designed to be the <i>Gate to the City,</i> though today they mostly look like giant grey monoliths watching your every move. 🧐",
    image: "img/lj-11.jpg",
  },*/
  {
    id: 12,
    type: "info",
    name: "Old Town 🏘️",
    coords: [46.04848968540639, 14.506199479030277],
    description: "Walking through the Old Town is like stepping into a postcard that smells like fresh pastries and old stone. 🥐 This area is a maze of medieval streets squeezed between the castle hill and the river, filled with Baroque houses that have survived fires, earthquakes, and centuries of rowdy residents.<br><br>It’s the perfect place to get lost because every narrow alleyway usually leads to a hidden courtyard or a tiny bar selling Slovenian honey brandy (Medica). 🍯",
    image: "img/lj-12.jpg",
  },
  {
    id: 13,
    type: "info",
    name: "Town Hall & Robba Fountain 🏛️⛲",
    coords: [46.05004575151646, 14.507098953926233],
    description: "The Town Hall has been the seat of city power since the late 1400s, and its clock tower has been telling <i>Ljubljančani</i> they’re late for work for centuries. ⏰ In the courtyard (which you can enter for free), you’ll find a statue of Narcissus and some very fancy Venetian-style architecture.<br><br>Right in front sits the Robba Fountain — representing the three Slovenian rivers: the Sava, the Krka, and the Ljubljanica. 🌊 Interestingly, the fountain you see outside is actually a high-quality replica; the 18th-century original was moved inside the National Gallery to protect it from pigeons and acidic rain. 🏛️",
    image: "img/lj-13.jpg",
  },
  {
    id: 14,
    type: "info",
    name: "Burek Olimpija 🍕🥐",
    coords: [46.0567204182898, 14.506212890601223],
    description: "This is not just a bakery; it is a legendary pilgrimage site for anyone who has ever stayed out past midnight in Ljubljana. Burek—a greasy, flaky pastry filled with cheese, meat, or pizza toppings—is the unofficial fuel of the city’s nightlife and the ultimate cure for a long night of Erasmus parties. 🌙 <i>Olimpija</i> has been serving it since 1970, and it is widely considered the gold standard for late-night snacks. 🏆<br><br>There is an ongoing, heated debate in the city about whether Burek Olimpija or their rival, Nobel Burek, is the best, but Olimpija wins points for pure nostalgia.",
    image: "img/lj-14.jpg",
  },
  {
    id: 15,
    type: "task",
    name: "Republic Square 🏢",
    color: "red",
    coords: [46.05044275417689, 14.50031045767263],
    radius: 70,
    description: "Republic Square is the giant concrete heart of Slovenian politics, designed in a <i>Brutalist</i> style that looks like a 1970s sci-fi movie set. 🛸 This is the exact location where Slovenia’s independence was officially declared in 1991! The square is intentionally massive because it was designed for huge public gatherings and parades back in the Yugoslav era.<br><br><b>The Mission:</b><br>Since this square looks like a futuristic movie set from the 70s, you’re going to film a <i>Slovenian Spy Thriller</i> poster. 🎬 You need to create the <i>Triangular Tower</i> pose. 📐 Split the group in two and have each half lean toward the center to form a triangle with your bodies, mimicking the shape of the two massive towers behind you. 🤫",
    image: "img/lj-11.jpg",
  },
  {
    id: 16,
    type: "info",
    name: "National Assembly 🇸🇮",
    coords: [46.05133264836481, 14.501145418687917],
    description: "The National Assembly is where the political magic (and drama) happens in Slovenia. 🏛️ Completed in 1959, the building is a classic example of <i>modernist</i> architecture. It features a massive bronze portal covered in sculptures of naked figures that look like they’ve been hitting the gym 24/7. 💪 These statues represent <i>the working people</i>—from farmers to scientists—living their best lives while holding up the weight of the nation. 🚜🔬<br><br>Inside, the halls are lined with rare Slovenian marble and a giant mural that tells the entire history of the Slovenian people, from the early Slavs to the modern era. 🎨",
    image: "img/lj-16.jpg",
  },
  {
    id: 17,
    type: "info",
    name: "Metelkova Mesto 🎨",
    coords: [46.05695693207856, 14.516915935165047],
    description: "Metelkova mesto is the artistic and alternative soul of Ljubljana, born from the ruins of former Yugoslav military barracks. 🏚️ In 1993, a group of activists occupied the space to save it from demolition, and today it’s one of the most successful urban squats in Europe! ✊ Every inch is covered in wild graffiti, mosaics, and sculptures that look like they belong in a surrealist dream. 🎭<br><br>By day, it's a quiet gallery of street art; by night, it transforms into a legendary nightlife hub with bars and clubs where the party never seems to end. 🌙🍻",
    image: "img/lj-17.jpg",
  },
  {
    id: 18,
    type: "info",
    name: "The Roman Wall 🧱",
    coords: [46.04567034262621, 14.498597105707665],
    description: "The Roman Wall in the Mirje district is a 2,000-year-old reminder that Ljubljana used to be a Roman city called Emona. 🏛️ This massive stone structure once marked the southern boundary of the Empire's civilization, protecting its citizens from the <i>barbarians</i> outside. 🛡️<br><br>In the 1930s, the famous architect Jože Plečnik added his own creative touch by building a stone pyramid and an arched gateway right into the ancient ruins. 📐 It’s the perfect place to sit on a bench and imagine Roman soldiers marching past while you’re actually just steps away from a trendy modern neighborhood. ⚔️🌿",
    image: "img/lj-18.jpg",
  },
  {
    id: 19,
    type: "info",
    name: "Tivoli Park 🌳",
    coords: [46.05388734283935, 14.496574058632673],
    description: "Tivoli Park is the massive, green backyard of Ljubljana, stretching right into the city center. 🌲 It was designed in 1813 when the French were in town, which is why it has that elegant, Parisian garden vibe with grand promenades and fountains. ⛲ It’s the ultimate spot for a siesta in the grass, a jog through the forest trails, or a visit to the Jakopič Promenade to see the latest outdoor photography exhibition. 📸<br><br>Whether you’re looking for a quiet picnic spot or a place to escape the summer heat under giant oak trees, Tivoli is the place where the city goes to breathe. 🧘‍♂️🍃",
    image: "img/lj-19.jpg",
  },
  {
    id: 20,
    type: "info",
    name: "The New Train Station 🏗️",
    coords: [46.058786669014786, 14.512827135802247],
    description: "The construction of the new EmonikaClick to open side panel for more information hub is the biggest makeover Ljubljana has seen in decades, turning the old railway area into a futuristic gateway for the city. 🚆 Right now, it’s a giant landscape of cranes and excavators as they build a state-of-the-art passenger terminal, shopping centers, and offices. 🛠️<br><br>Historically, the railway was what connected Ljubljana to the world in the 1840s, and this massive project is meant to bring that connection into the 21st century. 🏗️ It’s a work in progress, but soon it will be a sleek, modern hub that makes arriving in Slovenia feel like stepping into the future! 🚉✨",
    image: "img/lj-20.jpg",
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
function startGPS() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.watchPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (!window.userMarker) {
        window.userMarker = L.circleMarker([lat, lng], {
          radius: 8,
          color: 'blue'
        }).addTo(map);
      } else {
        window.userMarker.setLatLng([lat, lng]);
      }
    },
    err => {
      alert("Location access denied or unavailable");
      console.error(err);
    },
    {
      enableHighAccuracy: true
    }
  );
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
    <img src="${loc.image}">
    <center><h3>${loc.name}</h3></center>
    <p>${loc.description}</p>
  `;

  if (loc.type === "task") {
    content += `
  <button class="action-btn ${isDone ? "done" : ""}" onclick="toggleDone(${loc.id}); closeCard();">
    ${isDone ? "Retake photo" : "Done ✓"}
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
    doneLocations = doneLocations.filter(i => i !== id);

    // Reset completion popup
    localStorage.removeItem("completedShown");
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
  const taskLocations = locations.filter(l => l.type === "task");
  const percent = (doneLocations.length / taskLocations.length) * 100;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  bar.style.width = percent + "%";
  text.innerText = Math.round(percent) + "%";

  // 🎉 Show completion popup
  if (percent === 100) {
    showCompletion();
  }
}

updateProgress();

window.addEventListener("load", () => {
  const gpsEnabled = localStorage.getItem("gpsEnabled");

  if (gpsEnabled) {
    startGPS();
    document.getElementById("gpsModal").style.display = "none";
  }
});

function enableGPS() {
  startGPS();
  localStorage.setItem("gpsEnabled", "true");

  document.getElementById("gpsModal").style.display = "none";
}

function showCompletion() {
  // Prevent showing multiple times
  if (localStorage.getItem("completedShown")) return;

  document.getElementById("completionModal").classList.remove("hidden");
  localStorage.setItem("completedShown", "true");
}

function closeCompletion() {
  document.getElementById("completionModal").classList.add("hidden");
}
