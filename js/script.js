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

  if (id === "arts") renderArtsSection();
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


  function formatTime(seconds) {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


let currentIndex = 0;

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


function renderFriendCarousel() {
  const track = document.getElementById("friend-carousel-track");
  if (!track) return;

  // Xóa cũ
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

    // Reset animation đúng cách
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


document.addEventListener("DOMContentLoaded", function () {
  renderFriendCarousel(); 
  showSection('home');
});








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

function showErrorFallback(message) {
  const fallback = document.getElementById('error-fallback');
  const msgBox = document.getElementById('error-message');
  if (!fallback || !msgBox) return;

  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  fallback.style.display = 'block';
  msgBox.textContent = message;
}

let currentArtCategory = "Show All";

function renderArtsSection() {
  const container = document.getElementById("art-gallery");
  if (!container) return;

  container.innerHTML = "";

  const sortedArts = [...artsData].sort((a, b) => new Date(b.date) - new Date(a.date));

   sortedArts.forEach(art => {
    container.insertAdjacentHTML("beforeend", `
      <div class="art-card" data-category="${art.category}">
        <img src="${art.image}" alt="${art.alt}" loading="lazy">
        <div class="art-title">${art.title}</div>
      </div>
    `);
      const lastCard = container.lastElementChild;

      const shouldShow = currentArtCategory === "Show All" || art.category === currentArtCategory;
      lastCard.style.display = shouldShow ? "" : "none";

      lastCard.addEventListener("click", () => {
      showArtPopup(art);
  });
  });

  const cards = container.querySelectorAll(".art-card");
  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (currentArtCategory === "Show All" || cardCategory === currentArtCategory) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  document.querySelectorAll(".sidebar-btn").forEach(b => {
    const category = b.textContent.trim();
    if (category === currentArtCategory) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}


document.querySelectorAll(".sidebar-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.textContent.trim();
      currentArtCategory = category;

    document.querySelectorAll(".sidebar-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cards = document.querySelectorAll(".art-card");

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "Show All" || cardCategory === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function showArtPopup(art) {
  const fullImg = document.getElementById("popup-full-img");
  fullImg.src = art.fullImage || art.image;
  fullImg.onload = () => {
    adjustCloseButtonColor(fullImg);
  };

  document.getElementById("popup-character").textContent = art.character || "Unnamed";
  document.getElementById("popup-date").textContent = art.date || "???";
  
  const owner = art.owner;
  if (owner && owner.name && owner.link) {
    const ownerLink = document.getElementById("popup-owner");
    ownerLink.href = owner.link;
    ownerLink.textContent = owner.name;
  } else {
    document.getElementById("popup-owner").textContent = "Unknown";
    document.getElementById("popup-owner").removeAttribute("href");
  }
  
  document.getElementById("art-popup").style.display = "flex";
}


function closeArtPopup() {
  document.getElementById("art-popup").style.display = "none";
}

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

document.getElementById("art-popup").addEventListener("click", function (e) {
  // Nếu click đúng vào phần nền tối (không phải ảnh hoặc nội dung)
  if (e.target === this) {
    closeArtPopup();
  }
});
