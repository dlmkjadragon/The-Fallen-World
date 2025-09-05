// ===================== MUSIC PLAYER ===================== //

// ---- Playback Controls ---- //
function togglePlay(id, btn, skipReset = false) {
  const allAudios = document.querySelectorAll('audio');
  const audio = document.getElementById(id);

  if (!skipReset) {
    allAudios.forEach(a => {
      if (a !== audio && a.id !== "bg-rain") {
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
let filteredMusicList = [];

// ---- Auto Play Next ---- //
function getCurrentPlayOrder() {
  const cards = Array.from(document.querySelectorAll(".music-section .music-card"))
    .filter(card => card.style.display !== "none");
  return cards.map(card =>
    card.querySelector("audio").id.replace("audio-", "")
  );
}

function setupAutoNext(audioId) {
  const audio = document.getElementById(audioId);
  if (!audio) return;

  audio.addEventListener("ended", () => {
    if (audio.loop) return;

    const order = getCurrentPlayOrder(); // thứ tự đúng theo UI
    const currentId = audioId.replace("audio-", "");
    const idx = order.indexOf(currentId);
    if (idx === -1 || order.length === 0) return;

    const nextId = order[(idx + 1) % order.length];
    const nextBtn = document.querySelector(
      `button[onclick="togglePlay('audio-${nextId}', this)"]`
    );
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

// ---- Favorite Music ---- //
let favoriteList = new Set();
let snowIntervals = new Map();

function toggleFavorite(id, btn) {
  const card = btn.closest(".music-card");

  if (favoriteList.has(id)) {
    // Bỏ favorite
    favoriteList.delete(id);
    btn.textContent = "☆ FAVORITE";
    btn.classList.remove("favorited");
    card.classList.remove("favorited");

    // dừng tuyết
    if (snowIntervals.has(id)) {
      clearInterval(snowIntervals.get(id));
      snowIntervals.delete(id);
    }
    card.querySelectorAll(".snowflake").forEach(el => el.remove());

  } else {
    // Thêm favorite
    favoriteList.add(id);
    btn.textContent = "★ FAVORITE";
    btn.classList.add("favorited");
    card.classList.add("favorited");

    // bắt đầu spawn tuyết liên tục
    const interval = setInterval(() => {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.animationDuration = `${2 + Math.random() * 2}s`;
      card.appendChild(flake);

      // xóa hạt sau khi rơi xong
      setTimeout(() => flake.remove(), 4000);
    }, 200); // cứ 0.2s tạo một hạt

    snowIntervals.set(id, interval);
  }

  // Sắp xếp lại DOM: favorite lên trước
  const container = document.querySelector(".music-section");
  if (!container) return;

  const cards = Array.from(container.querySelectorAll(".music-card"));

  cards.sort((a, b) => {
    const aId = a.querySelector(".favorite-btn").dataset.id;
    const bId = b.querySelector(".favorite-btn").dataset.id;
    const aFav = favoriteList.has(aId);
    const bFav = favoriteList.has(bId);
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return 0;
  });

  cards.forEach(card => container.appendChild(card));
}
