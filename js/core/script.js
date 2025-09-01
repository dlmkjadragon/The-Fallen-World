// ===================== CORE RENDER ===================== //
function renderDataSection({ data, containerSelector, template }) {
  const container = document.querySelector(containerSelector);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = "";
  data.forEach(item => {
    const html = template(item);
    container.insertAdjacentHTML("beforeend", html);
  });
}

// ===================== PAGE NAVIGATION ===================== //
function showSection(id) {
  console.log("Switching to section:", id);
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.page-section').forEach(section => {
    if (section.id !== id) {
      const inputs = section.querySelectorAll('.search-input');
      inputs.forEach(input => {
        if (input.id === "music-search") return;
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    }
  });

    const fallback = document.getElementById('error-fallback');
    if (fallback) fallback.style.display = 'none';
  } else {
    showErrorFallback(`Section "${id}" not found.`);
  }

  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(links).find(link => link.getAttribute('onclick')?.includes(id));
  if (activeLink) activeLink.classList.add('active');


  if (id === "home") {
    switchTab("tab-intro");
  }


  if (id === "arts") {
    currentArtCategory = "Show All";
    currentArtPage = 1;

    sortedArtsData = [...artsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    filteredArtsData = [...sortedArtsData];  // Show All = full list

    renderArtsSection();

    document.querySelectorAll(".sidebar-btn").forEach(btn => {
      const text = btn.textContent.trim();
      btn.classList.toggle("active", text === "Show All");
    });

    document.getElementById("art-gallery").scrollTop = 0;
  }
  
  if (id === "characters") renderCharactersSection();

  if (id === "story") {
    resetLibrary();
  }

}


function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.classList.remove('active');

    const inputs = tab.querySelectorAll('.search-input');
    inputs.forEach(input => {
      if (input.id === "music-search") return;
      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });

  const selected = document.getElementById(tabId);
  if (selected) selected.classList.add('active');

  if (tabId === "tab-music") {
  const input = document.getElementById("music-search");
  if (input && input.value.trim() !== "") {
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

  const buttons = document.querySelectorAll('.tab-menu button');
  buttons.forEach(btn => btn.classList.remove('active'));
  const activeButton = Array.from(buttons).find(btn =>
    btn.getAttribute('onclick')?.includes(tabId)
  );
  if (activeButton) activeButton.classList.add('active');

  if (tabId === "tab-music") {
  const musicContainer = document.querySelector(".music-section");

  const hasRendered = musicContainer && musicContainer.dataset.rendered === "true";
  if (!hasRendered) {
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
          <div class="favorite-controls">
            <button class="favorite-btn" data-id="${m.id}" onclick="toggleFavorite('${m.id}', this)">
              ☆ FAVORITE
            </button>
          </div>
        </div>
      `
    });

    musicContainer.dataset.rendered = "true";

    filteredMusicList = [...musicList];
    musicList.forEach(m => setupAutoNext(`audio-${m.id}`));
    setupMusicListeners();
  }
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
  if (!keyword || keyword.trim() === "") return text; 
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// ===================== INIT ===================== //
document.addEventListener("DOMContentLoaded", function () {
  renderFriendCarousel(); 
  showSection('home');
});

