// ===================== PAGE NAVIGATION ===================== //

function showSection(id) {
  console.log("Switching to section:", id);
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fallback = document.getElementById('error-fallback');
    if (fallback) fallback.style.display = 'none';
  } else {
    showErrorFallback(`Section "${id}" not found.`);
  }

  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(links).find(link => link.getAttribute('onclick')?.includes(id));
  if (activeLink) activeLink.classList.add('active');

  if (id === "arts") {
  currentArtCategory = "Show All";
  filteredArtsData = [...sortedArtsData];
  renderArtsSection();
}

  if (id === "characters") {
  renderCharacterCategories("all");
}

}


function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const selected = document.getElementById(tabId);
  if (selected) selected.classList.add('active');

  // New: mark the active button
  const buttons = document.querySelectorAll('.tab-menu button');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeButton = Array.from(buttons).find(btn =>
    btn.getAttribute('onclick')?.includes(tabId)
  );
  if (activeButton) activeButton.classList.add('active');

  if (tabId === "tab-music") {
  renderDataSection({
    data: musicList,
    containerSelector: ".music-section",
    template: (m) => `
      <div class="music-card">
        <div class="music-info">
          <h3>${m.title}</h3>
          <p>${m.artist}</p>
          <img src="${m.cover}" class="music-cover" id="cover-${m.id}" style="display: none;" loading="lazy">
          <div class="now-playing">Now Playing...</div>
        </div>
        <audio id="audio-${m.id}" preload="none" data-src="${m.src}"></audio>
        <input type="range" value="0" class="seek-bar" id="seek-${m.id}">
        <div class="time-display" id="time-${m.id}">00:00 / 00:00</div>
        <div class="music-controls">
          <button onclick="seekBackward('audio-${m.id}')">⏮</button>
          <button onclick="togglePlay('audio-${m.id}', this)">▶</button>
          <button onclick="seekForward('audio-${m.id}')">⏭</button>
          <button onclick="restartAudio('audio-${m.id}')">⏹</button>
          <button class="repeat-toggle" onclick="toggleRepeat('audio-${m.id}', this)">🔁</button>
        </div>
        <div class="volume-controls">
          <button onclick="decreaseVolume('audio-${m.id}')">🔉</button>
          <input type="range" min="0" max="1" step="0.01" value="1"
                 class="volume-bar" data-audio-id="audio-${m.id}">
          <span class="volume-percent" id="volume-percent-${m.id}">100%</span>
          <button onclick="increaseVolume('audio-${m.id}')">🔊</button>
        </div>
        <div class="tempo-controls">
          <span class="tempo-icon">⏱</span>
          <input type="range" min="0.5" max="2" step="0.1" value="1"
                 class="tempo-bar" data-audio-id="audio-${m.id}">
          <span class="tempo-value" id="tempo-value-${m.id}">100%</span>
        </div>
      </div>
    `
  });

  musicList.forEach(m => setupAutoNext(`audio-${m.id}`));

  setupMusicListeners(); 
}

  if (tabId === "tab-social") {
   renderDataSection({
    data: socialList,
    containerSelector: "#tab-social .social-row",
    template: (s) => `
      <div class="social-card ${s.style}">
        <div class="social-header">
          <div class="line short"></div>
          <div class="line long"></div>
        </div>
        <a href="${s.link}" target="_blank" class="social-icon-link">
          <img src="${s.img}" class="social-icon-img" alt="${s.platform}" loading="lazy">
        </a>
        <div class="social-text">
          <div class="platform">${s.platform}</div>
          <div class="username">${s.username}</div>
          <div class="status">${s.status}</div>
        </div>
      </div>
    `
  });
}

  if (tabId === "tab-blacklist") {
  renderDataSection({
    data: blacklistList,
    containerSelector: "#tab-blacklist .blacklist-list",
    template: (b) => `
      <div class="blacklist-item">
        <a href="${b.link}" target="_blank" class="blacklist-avatar">
          <img src="${b.avatar}" alt="${b.name}" loading="lazy">
        </a>
        <div class="blacklist-text">
          <div class="blacklist-name">${b.name}</div>
          <div class="blacklist-reason">${b.reason}</div>
        </div>
      </div>
    `
  });
}


}


// ===================== MUSIC PLAYER ===================== //

// ---- Playback Controls ---- //
function togglePlay(id, btn, skipReset = false) {
  const allAudios = document.querySelectorAll('audio');
  const audio = document.getElementById(id);

  if (!skipReset) {
    allAudios.forEach(a => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;

        const otherId = a.id;
        const otherBtn = document.querySelector(`.play-toggle[onclick*="${otherId}"]`);
        if (otherBtn) otherBtn.textContent = '▶';

        const otherCover = document.getElementById('cover-' + otherId.split('-')[1]);
        if (otherCover) {
          otherCover.classList.remove('show');
          otherCover.style.display = 'none';
        }

        const otherCard = a.closest('.music-card');
        if (otherCard) otherCard.classList.remove('playing');
      }
    });
  }


  const seekBar = document.getElementById('seek-' + id.split('-')[1]);
  const timeDisplay = document.getElementById('time-' + id.split('-')[1]);
  const cover = document.getElementById('cover-' + id.split('-')[1]);
  const card = btn.closest('.music-card');
  const nowPlaying = card.querySelector('.now-playing');

  if (audio.paused) {
    if (!audio.src) {
      const dataSrc = audio.getAttribute('data-src');
      if (dataSrc) audio.src = dataSrc;
    }
    
    audio.play();
    btn.textContent = '⏸';
    if (cover) {
      cover.style.display = 'block';
      setTimeout(() => cover.classList.add('show'), 10);
    }
    if (card) card.classList.add('playing');
  } else {
    audio.pause();
    btn.textContent = '▶';
    if (cover) cover.classList.remove('show');
    if (card) card.classList.remove('playing');
  }

  // update seek bar
  if (seekBar || timeDisplay) {
    audio.ontimeupdate = () => {
      if (seekBar && audio.duration) {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
      }
      if (timeDisplay && audio.duration) {
        const current = formatTime(audio.currentTime);
        const total = formatTime(audio.duration);
        timeDisplay.textContent = `${current} / ${total}`;
      }
    };
  }
}

function seekForward(id) {
  const audio = document.getElementById(id);
  audio.currentTime += 5;
}

function seekBackward(id) {
  const audio = document.getElementById(id);
  audio.currentTime -= 5;
}

function restartAudio(id) {
  const audio = document.getElementById(id);
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;

  const btn = document.querySelector(`button[onclick="togglePlay('${id}', this)"]`);
  if (btn) btn.textContent = '▶';

  const cover = document.getElementById('cover-' + id.split('-')[1]);
  if (cover) {
    cover.classList.remove('show');
    cover.style.display = 'none';
  }

  const card = btn?.closest('.music-card');
  if (card) {
    card.classList.remove('playing');
  }
}

function toggleRepeat(id, btn) {
  const audio = document.getElementById(id);
  if (!audio) return;

  audio.loop = !audio.loop;

  if (audio.loop) {
    btn.textContent = "🔂";
    btn.style.color = "#00e6ff";
    btn.title = "Repeat: ON";
  } else {
    btn.textContent = "🔁";
    btn.style.color = "";
    btn.title = "Repeat: OFF";
  }
}


// ---- Volume & Tempo ---- //
function increaseVolume(id) {
  const audio = document.getElementById(id);
  if (audio && audio.volume < 1) {
    audio.volume = Math.min(1, audio.volume + 0.1);
  }
}

function decreaseVolume(id) {
  const audio = document.getElementById(id);
  if (audio && audio.volume > 0) {
    audio.volume = Math.max(0, audio.volume - 0.1);
  }
}

function setupMusicListeners() {
  document.querySelectorAll('.seek-bar').forEach(seekBar => {
    seekBar.addEventListener('input', function () {
      const audioId = 'audio-' + this.id.split('-')[1];
      const audio = document.getElementById(audioId);
      if (audio && audio.duration) {
        const percent = parseFloat(this.value);
        audio.currentTime = (percent / 100) * audio.duration;
      }
    });
  });

  document.querySelectorAll('.volume-bar').forEach(bar => {
    const audioId = bar.dataset.audioId;
    const audio = document.getElementById(audioId);
    const percentDisplay = document.getElementById(`volume-percent-${audioId.split('-')[1]}`);

    if (audio) {
      bar.addEventListener('input', function () {
        const vol = parseFloat(this.value);
        audio.volume = vol;
        if (percentDisplay) percentDisplay.textContent = `${Math.round(vol * 100)}%`;
      });

      audio.addEventListener('volumechange', function () {
        bar.value = audio.volume.toFixed(2);
        if (percentDisplay) percentDisplay.textContent = `${Math.round(audio.volume * 100)}%`;
      });
    }
  });

  document.querySelectorAll('.tempo-bar').forEach(bar => {
    const audioId = bar.dataset.audioId;
    const audio = document.getElementById(audioId);
    const display = document.getElementById(`tempo-value-${audioId.split('-')[1]}`);

    if (audio) {
      bar.addEventListener('input', function () {
        const rate = parseFloat(this.value);
        audio.playbackRate = rate;
        if (display) display.textContent = `${Math.round(rate * 100)}%`;
      });
    }
  });
}

let currentIndex = 0;

// ---- Auto Play Next ---- //
function setupAutoNext(audioId) {
  const audio = document.getElementById(audioId);
  if (!audio) return;

  audio.addEventListener("ended", () => {
    if (audio.loop) return;

    const currentId = audioId.replace("audio-", "");
    const currentIndex = musicList.findIndex(m => m.id === currentId);
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % musicList.length;
    const nextId = musicList[nextIndex].id;

    const nextBtn = document.querySelector(`button[onclick="togglePlay('audio-${nextId}', this)"]`);
    if (nextBtn) togglePlay(`audio-${nextId}`, nextBtn, false);
  });
}

// ---- Time Utility ---- //
function formatTime(seconds) {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


// ===================== FRIENDS CAROUSEL =====================

function renderFriendCarousel() {
  const track = document.getElementById("friend-carousel-track");
  if (!track) return;

  while (track.firstChild) {
    track.removeChild(track.firstChild);
  }

  const total = friendsData.length;
  const indices = [
    (currentIndex - 1 + total) % total,
    currentIndex,
    (currentIndex + 1) % total,
  ];

  indices.forEach((i, idx) => {
    const friend = friendsData[i];
    const div = document.createElement("div");
    div.classList.add("friend-avatar-3d");

    requestAnimationFrame(() => {
      div.classList.add("animate-friend");
    });

    if (idx === 1) {
      div.classList.add("center");
      div.addEventListener("click", () => {
        window.open(friend.link, "_blank");
      });
    } else {
      div.classList.add("side");
      div.addEventListener("click", () => {
        if (idx === 0) prevFriend3D();
        else if (idx === 2) nextFriend3D();
      });
    }

    div.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = friend.avatar;
    img.alt = friend.name;
    img.loading = "lazy";

    const name = document.createElement("div");
    name.classList.add("friend-name");
    name.innerText = friend.name;

    div.appendChild(img);
    div.appendChild(name);
    track.appendChild(div);
  });
}

function prevFriend3D() {
  currentIndex = (currentIndex - 1 + friendsData.length) % friendsData.length;
  renderFriendCarousel();
}

function nextFriend3D() {
  currentIndex = (currentIndex + 1) % friendsData.length;
  renderFriendCarousel();
}


// ===================== ART GALLERY ===================== //

// ---- Render Gallery ---- //
let currentArtCategory = "Show All";
let currentArtIndex = -1;
let sortedArtsData = [];
let filteredArtsData = [];
let currentArtPage = 1;
const artsPerPage = 10;
let currentVisibleArts = [];

function renderArtsSection() {
  const container = document.getElementById("art-gallery");
  if (!container) return;

  container.innerHTML = "";

  sortedArtsData = [...artsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  filteredArtsData = sortedArtsData.filter(art =>
    currentArtCategory === "Show All" || art.category === currentArtCategory
  );
  const totalPages = Math.ceil(filteredArtsData.length / artsPerPage);
  if (currentArtPage > totalPages) {
    currentArtPage = 1;
}

  const start = (currentArtPage - 1) * artsPerPage;
  const end = start + artsPerPage;
  const currentPageData = filteredArtsData.slice(start, end);
  currentVisibleArts = currentPageData;


  currentPageData.forEach(art => {
    container.insertAdjacentHTML("beforeend", `
      <div class="art-card"
        data-category="${art.category}"
        data-title="${art.title}"
        data-character="${art.character}"
        data-owner="${art.owner?.name || ''}">
        <img src="${art.image}" alt="${art.alt}" loading="lazy">
        <div class="art-title">${art.title}</div>
      </div>
    `);

    const lastCard = container.lastElementChild;
    lastCard.addEventListener("click", () => {
      showArtPopup(art);
    });
  });

  renderPaginationControls();
}

function renderPaginationControls() {
  const pagination = document.getElementById("arts-pagination");
  if (!pagination) return;

  let totalPages = Math.ceil(filteredArtsData.length / artsPerPage);
  if (totalPages === 0) totalPages = 1;
  pagination.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "← Previous";
  prevBtn.disabled = currentArtPage === 1;
  prevBtn.onclick = () => {
    currentArtPage--;
    renderArtsSection();
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next →";
  nextBtn.disabled = currentArtPage === totalPages;
  nextBtn.onclick = () => {
    currentArtPage++;
    renderArtsSection();
  };

  const pageInfo = document.createElement("span");
  pageInfo.textContent = `Page ${currentArtPage} of ${totalPages}`;
  pageInfo.style.margin = "0 12px";
  pageInfo.style.color = "#b0e0e6";

  pagination.appendChild(prevBtn);
  pagination.appendChild(pageInfo);
  pagination.appendChild(nextBtn);
}


// ---- Art Interactions ---- //
function showArtPopup(art) {
  const index = filteredArtsData.findIndex(a => a.fullImage === (art.fullImage || art.image));
  currentArtIndex = index;

  const fullImg = document.getElementById("popup-full-img");
  fullImg.classList.add("popup-glow");
  fullImg.src = art.fullImage || art.image;
  fullImg.onload = () => {
    adjustCloseButtonColor(fullImg);
  };

  document.getElementById("popup-character").textContent = art.character || "Unnamed";
  document.getElementById("popup-date").textContent = art.date || "???";

  const owner = art.owner;
  const ownerLink = document.getElementById("popup-owner");
  if (owner && owner.name && owner.link) {
    ownerLink.href = owner.link;
    ownerLink.textContent = owner.name;
  } else {
    ownerLink.textContent = "Unknown";
    ownerLink.removeAttribute("href");
  }

  document.getElementById("prev-art-btn").disabled = index <= 0;
  document.getElementById("next-art-btn").disabled = index >= filteredArtsData.length - 1;

  document.getElementById("art-popup").style.display = "flex";
}

function showPrevArt() {
  if (currentArtIndex > 0) {
    currentArtIndex--;
    showArtPopup(filteredArtsData[currentArtIndex]);
  }
}

function showNextArt() {
  if (currentArtIndex < artsData.length - 1) {
    currentArtIndex++;
    showArtPopup(filteredArtsData[currentArtIndex]);
  }
}


function closeArtPopup() {
  const popup = document.getElementById("art-popup");
  const fullImg = document.getElementById("popup-full-img");
  fullImg.classList.remove("popup-glow");
  popup.style.display = "none";
}

document.querySelectorAll(".sidebar-btn").forEach(b => {
  const category = b.textContent.trim();
  if (category === currentArtCategory) {
    b.classList.add("active");
  } else {
    b.classList.remove("active");
  }
});

function adjustCloseButtonColor(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let r = 0, g = 0, b = 0;
  const length = data.length / 4;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }

  r /= length;
  g /= length;
  b /= length;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  const closeBtn = document.querySelector(".art-popup-close");
  closeBtn.style.color = brightness > 140 ? "#111" : "#fff";
}


// ---- Sidebar Category Filter ---- //
document.querySelectorAll(".sidebar-btn").forEach(btn => {
  btn.addEventListener("click", () => {
  const category = btn.textContent.trim();
  currentArtCategory = category;
  currentArtPage = 1;

  sortedArtsData = [...artsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  filteredArtsData = sortedArtsData.filter(art =>
    currentArtCategory === "Show All" || art.category === currentArtCategory
  );

  renderArtsSection();

  const searchInput = document.getElementById("arts-search");
  if (searchInput && searchInput.value.trim() !== "") {
    const event = new Event("input", { bubbles: true });
    searchInput.dispatchEvent(event);
  }

  document.querySelectorAll(".sidebar-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
});
});

document.getElementById("art-popup").addEventListener("click", function (e) {
  if (e.target === this) {
    closeArtPopup();
  }
});


// ===================== SEARCH FUNCTIONALITY ===================== //
document.addEventListener("input", function (e) {
  if (!e.target.classList.contains("search-input")) return;

  const query = e.target.value.toLowerCase();
  const container = e.target.closest(".page-section") || e.target.closest(".tab-content");

  if (!container) return;

  const musicCards = container.querySelectorAll('.music-card');
  let firstMatch = null;

  musicCards.forEach(card => {
    const content = card.textContent.toLowerCase();
    if (query === "" || content.includes(query)) {
      card.style.display = "";
      if (!firstMatch) firstMatch = card;
    } else {
      card.style.display = "none";
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

document.addEventListener("input", function (e) {
  if (e.target.id !== "social-search") return;

  const query = e.target.value.toLowerCase();
  const cards = document.querySelectorAll("#tab-social .social-card");

  cards.forEach(card => {
    const content = card.textContent.toLowerCase();
    if (content.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});


document.addEventListener("input", function (e) {
  if (e.target.id !== "blacklist-search") return;

  const query = e.target.value.toLowerCase();
  const cards = document.querySelectorAll("#tab-blacklist .blacklist-item");

  cards.forEach(card => {
    const content = card.textContent.toLowerCase();
    card.style.display = content.includes(query) ? "" : "none";
  });
});


document.addEventListener("input", function (e) {
  if (e.target.id !== "arts-search") return;

  const query = e.target.value.trim().toLowerCase();
  const container = document.getElementById("art-gallery");
  const pagination = document.getElementById("arts-pagination");

  if (!container) return;

  if (query === "") {
    currentArtPage = 1;
    renderArtsSection();
    pagination.style.display = "flex";
    return;
  }

  currentArtPage = 1;
  container.innerHTML = "";

  filteredArtsData = sortedArtsData.filter(art => {
  const inCategory = currentArtCategory === "Show All" || art.category === currentArtCategory;

  const title = art.title?.toLowerCase() || "";
  const character = art.character?.toLowerCase() || "";
  const owner = art.owner?.name?.toLowerCase() || "";

  const matchesSearch = title.includes(query) || character.includes(query) || owner.includes(query);

  return inCategory && matchesSearch;
});

if (filteredArtsData.length === 0) {
  container.innerHTML = `<p style="color: #bbb; font-style: italic;">No artworks found.</p>`;
  pagination.style.display = "none";
  return;
}
  

    filteredArtsData.forEach(art => {
    container.insertAdjacentHTML("beforeend", `
      <div class="art-card"
        data-category="${art.category}"
        data-title="${art.title}"
        data-character="${art.character}"
        data-owner="${art.owner?.name || ''}">
        <img src="${art.image}" alt="${art.alt}" loading="lazy">
        <div class="art-title">${highlight(art.title, query)}</div>
      </div>
    `);

    const lastCard = container.lastElementChild;
    lastCard.addEventListener("click", () => showArtPopup(art));
  });

  pagination.style.display = "none";
});


// ===================== CLOCK ===================== //

function updateClock() {
  const timeEl = document.getElementById("clock-time");
  const dateEl = document.getElementById("clock-date");

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // 12h format

  const padded = (n) => String(n).padStart(2, "0");
  timeEl.textContent = `${padded(hours)}:${padded(minutes)}:${padded(seconds)} ${ampm}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();

  dateEl.textContent = `${month}, ${day} ${date}`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call


// ===================== ERROR HANDLING ===================== //

function showErrorFallback(message) {
  const fallback = document.getElementById('error-fallback');
  const msgBox = document.getElementById('error-message');
  if (!fallback || !msgBox) return;

  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  fallback.style.display = 'block';
  msgBox.textContent = message;
}



// ===================== UTILS ===================== //

function highlight(text, keyword) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// ===================== INIT ===================== //

document.addEventListener("DOMContentLoaded", function () {
  renderFriendCarousel(); 
  showSection('home');
});

// ===================== LOADING PROGRESS ANIMATION ===================== //
const fill = document.getElementById("progress-fill");
const dot = document.getElementById("progress-dot");
const loadingPercentText = document.getElementById("loading-percent");
const quote = document.getElementById("quote-text");
const screen = document.getElementById("loading-screen");

const quotes = [
  "- Fallen to the Mythical -",
  "- Whisper of the Unknown -",
  "- Awakened from Stardust -",
  "- Severed by Silence -",
  "- Echoes of Eternity -"
];

let quoteOrder = [];
let quoteIndex = 0;

// Fisher–Yates Shuffle
function shuffleQuotes() {
  quoteOrder = [...quotes];
  for (let i = quoteOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quoteOrder[i], quoteOrder[j]] = [quoteOrder[j], quoteOrder[i]];
  }
  quoteIndex = 0;
}

function showNextQuote() {
  quote.style.opacity = 0;

  setTimeout(() => {
    if (quoteIndex >= quoteOrder.length) {
      shuffleQuotes(); 
    }

    quote.textContent = quoteOrder[quoteIndex++];
    quote.style.transition = "opacity 1.2s ease";
    quote.style.opacity = 1;

    setTimeout(showNextQuote, 4500); 
  }, 500); 
}

// Start quote rotation
shuffleQuotes();
showNextQuote();



// ==== Animate progress from 0 → 100% over 5s ====
const totalLoadingTime = 10000; // ⏳ 10s
let loadingStart = performance.now();

function animateProgressBar(timestamp) {
  const elapsed = timestamp - loadingStart;
  const progress = Math.min(elapsed / totalLoadingTime, 1); // 🔄 tính theo 10s
  const percent = Math.floor(progress * 100);

  fill.style.width = percent + "%";
  dot.style.left = `${percent}%`;
  loadingPercentText.textContent = percent + "%";

  if (progress < 1) {
    requestAnimationFrame(animateProgressBar);
  } else {

    setTimeout(() => {
      screen.style.transition = "opacity 1s ease";
      screen.style.opacity = 0;

      document.body.classList.add("ready-to-reveal");
      document.body.classList.add("show-animation");

      let played = false;
      const enableAudioOnUserInteract = () => {
        if (played) return;
        played = true;
        tryPlayRainAudio();
        window.removeEventListener("click", enableAudioOnUserInteract);
        window.removeEventListener("keydown", enableAudioOnUserInteract);
      };
      window.addEventListener("click", enableAudioOnUserInteract);
      window.addEventListener("keydown", enableAudioOnUserInteract);

      const moon = document.getElementById("moon");
      if (moon) {
        setTimeout(() => {
          moon.style.opacity = "1";
          moon.style.pointerEvents = "auto";
        }, 1000);
      }


      setTimeout(() => screen.remove(), 1000); // remove from DOM
      if (typeof startWebsite === "function") startWebsite();
    }, 400);
  }
}
requestAnimationFrame(animateProgressBar);


window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transition = "opacity 0.8s ease";
      setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.style.opacity = "1";
        document.body.style.transform = "translateY(0)";
      }, 800);
    }
  }, 10000); 
});

function startWindEffect() {
  const canvas = document.getElementById('wind-canvas');
  const ctx = canvas.getContext('2d');
  let w, h;

  function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Gió (bụi trắng bay ngang)
  const windParticles = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 2 + 1,
    speedX: Math.random() * 0.6 + 0.2,
    speedY: Math.random() * 0.3 - 0.15,
    alpha: Math.random() * 0.4 + 0.2,
  }));

  // Tuyết
  const snowflakes = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 0.6 + 0.2,
    drift: Math.random() * 1.2 - 0.6,
    alpha: Math.random() * 0.6 + 0.4,
  }));

  function drawScene() {
    ctx.clearRect(0, 0, w, h);

    // Wind
    windParticles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x > w) p.x = -10;
      if (p.y < 0 || p.y > h) p.y = Math.random() * h;
    });

    // Snow
    snowflakes.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.fill();

      s.y += s.speedY;
      s.x += Math.sin(s.y / 20) * s.drift;

      if (s.y > h || s.x < -5 || s.x > w + 5) {
        s.y = -10;
        s.x = Math.random() * w;
      }
    });

    requestAnimationFrame(drawScene);
  }

  drawScene();
}

document.addEventListener('DOMContentLoaded', startWindEffect);


function startRainEffect() {
  const canvas = document.getElementById("rain-canvas");
  const ctx = canvas.getContext("2d");
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const raindrops = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 2,
    alpha: Math.random() * 0.2 + 0.2
  }));

  const ripples = [];

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw raindrops
    ctx.strokeStyle = 'rgba(173,216,230,0.6)';
    ctx.lineWidth = 1;

    raindrops.forEach(drop => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.stroke();

      drop.y += drop.speed;
      if (drop.y > h) {
        // Create a ripple at bottom hit
        ripples.push({
          x: drop.x,
          y: h - 2,
          radius: 0,
          alpha: 0.4
        });

        // Reset raindrop
        drop.y = -20;
        drop.x = Math.random() * w;
      }
    });

    // Draw ripples
    ripples.forEach((ripple, index) => {
      ctx.beginPath();
      ctx.ellipse(
        ripple.x,             // center x
        ripple.y,             // center y
        ripple.radius,        // horizontal radius
        ripple.radius * 0.3,  // vertical radius (dẹt)
        0,                    // rotation
        0, Math.PI * 2
      );
      ctx.strokeStyle = `rgba(173,216,230,${ripple.alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ripple.radius += 0.8;
      ripple.alpha -= 0.007;

      if (ripple.alpha <= 0) ripples.splice(index, 1);
    });

    requestAnimationFrame(draw);
  }

  draw();
}

document.addEventListener("DOMContentLoaded", startRainEffect);



function drawStars() {
  const canvas = document.getElementById("star-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 1.5 + 0.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }
}

let cloudOffset = 0;
let cloudDirection = 1;

function drawClouds() {
  const canvas = document.getElementById("cloud-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cloudCount = 4;
  const spacing = canvas.width / (cloudCount + 1);
  const maxOffset = 40;

  for (let i = 0; i < cloudCount; i++) {
    const baseX = spacing * (i + 1);
    const x = baseX + cloudOffset;
    const y = 60 + Math.sin((i + cloudOffset / 50)) * 10;

    drawSmallCloud(ctx, x, y, 60); 
  }

  cloudOffset += cloudDirection * 0.3;
  if (cloudOffset > maxOffset || cloudOffset < -maxOffset) {
    cloudDirection *= -1;
  }

  requestAnimationFrame(drawClouds);
}

function drawSmallCloud(ctx, x, y, size) {
  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  ctx.beginPath();
  ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
  ctx.arc(x + size * 0.5, y + 8, size * 0.4, 0, Math.PI * 2);
  ctx.arc(x - size * 0.5, y + 8, size * 0.4, 0, Math.PI * 2);
  ctx.fill();
}


window.addEventListener("load", () => {
  drawStars();
  drawClouds();
});

window.addEventListener("resize", () => {
  drawStars();
  drawClouds();
});

function tryPlayRainAudio() {
  const rainAudio = document.getElementById("bg-rain");
  if (!rainAudio) return;

  rainAudio.volume = 0.4;
  rainAudio.play().then(() => {
    console.log("Rain audio playing");
  }).catch(err => {
    console.log("Autoplay blocked:", err.message);
  });
}

moon.addEventListener("click", () => {
  const rainAudio = document.getElementById("bg-rain");
  if (rainAudio.paused) {
    tryPlayRainAudio(); 
    moon.classList.remove("muted");
    moon.classList.add("playing");
  } else {
    rainAudio.pause();
    moon.classList.remove("playing");
    moon.classList.add("muted");
  }
});


function renderCharacterCategories() {
  const container = document.getElementById("character-gallery");
  if (!container) return;
  container.innerHTML = "";

  characterCategories.forEach(cat => {
    // wrapper cho từng category (Fallen, Spring...)
    const categoryBlock = document.createElement("div");
    categoryBlock.className = "character-category";

    const catTitle = document.createElement("div");
    catTitle.className = "category-title";
    catTitle.textContent = cat.category;
    categoryBlock.appendChild(catTitle);

    cat.factions.forEach(faction => {
      const factionBlock = document.createElement("div");
      factionBlock.className = "faction-block";

      const banner = document.createElement("img");
      banner.className = "faction-banner";
      banner.src = faction.banner;
      banner.alt = faction.name;
      factionBlock.appendChild(banner);

      const desc = document.createElement("p");
      desc.className = "faction-description";
      desc.textContent = faction.description;
      factionBlock.appendChild(desc);

      const grid = document.createElement("div");
      grid.className = "character-grid";

      faction.characters.forEach(char => {
        const card = document.createElement("a");
        card.className = "character-card";
        card.href = char.link;
        card.target = "_blank";
        card.style.backgroundImage = `url('${char.image}')`;
        card.innerHTML = `
          <div class="char-name-overlay">
            <div class="char-name">${char.name}</div>
            <div class="char-title">${char.title}</div>
            <div class="char-icon"><i class="${char.icon}"></i></div>
          </div>
        `;
        grid.appendChild(card);
      });

      factionBlock.appendChild(grid);
      categoryBlock.appendChild(factionBlock);
    });

    container.appendChild(categoryBlock);
  });
}
