// ===================== LOADING PROGRESS ANIMATION ===================== //
const fill = document.getElementById("progress-fill");
const dot = document.getElementById("progress-dot");
const loadingPercentText = document.getElementById("loading-percent");
const quote = document.getElementById("quote-text");
const screen = document.getElementById("loading-screen");

let currentAudio = null;
let musicEnabled = false;
let fadingOut = false;


const quotes = [
  "- Fallen to the Mythical -",
  "- Whisper of the Unknown -",
  "- Awakened from Stardust -",
  "- Severed by Silence -",
  "- Echoes of Eternity -",
  "- Shattered Beyond the Veil -",
  "- Bound by Forgotten Flames -",
  "- Drowned in Celestial Dreams -",
  "- Wings of a Thousand Dawns -",
  "- Crown of the Fallen Sky -",
  "- Whispers Beneath the Moonlight -",
  "- The Realm That Time Forgot -",
  "- Shadows Carved in Starlight -",
  "- Lost Within Eternal Horizons -",
  "- Cries of the Dying Sun -",
  "- Songs Woven Through the Void -",
  "- Keeper of Silent Legends -",
  "- Through the Ashes of Infinity -",
  "- Breath of the Ancient Tide -",
  "- Where Light Devours the Dark -",
  "- Chains of the Eternal Oath -",
  "- A Memory That Never Sleeps -",
  "- In the Arms of the Abyss -",
  "- Veins of the Forgotten Earth -",
  "- Beyond the Edge of Twilight -",
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

    setTimeout(showNextQuote, 800); 
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
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
      if (typeof startWebsite === "function") startWebsite();
    }, 400);
  }

  if (percent >= 60 && currentAudio && !fadingOut) {
  fadingOut = true;
  const fade = setInterval(() => {
    if (!currentAudio) {
      clearInterval(fade);
      return;
    }
    if (currentAudio.volume > 0.05) {
      currentAudio.volume -= 0.05;
    } else {
      currentAudio.pause();
      currentAudio = null;
      clearInterval(fade);
    }
  }, 200);
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

function setRandomLoadingImage() {
  const img = document.getElementById("loading-bg");
  const nameBox = document.getElementById("loading-oc-name");
  if (!img || !nameBox) return;

  const randomIndex = Math.floor(Math.random() * loadingData.length);
  const chosen = loadingData[randomIndex];

  img.src = chosen.image;
  nameBox.textContent = chosen.name;

  // stop nhạc cũ
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // play nhạc mới nếu có
  if (chosen.audio) {
    currentAudio = new Audio(chosen.audio);
    currentAudio.loop = true;
    currentAudio.volume = 1;
    if (musicEnabled) {
      currentAudio.play().catch(() => {});
    }
  }
}

document.addEventListener("DOMContentLoaded", setRandomLoadingImage);


document.addEventListener("DOMContentLoaded", () => {
  const skipBtn = document.getElementById("skip-btn");
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      screen.style.transition = "opacity 0.8s ease";
      screen.style.opacity = 0;

      setTimeout(() => {
        screen.remove();

        // giống như khi loading xong
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
          moon.style.opacity = "1";
          moon.style.pointerEvents = "auto";
        }
        if (currentAudio) {
          currentAudio.pause();
          currentAudio = null;
        }

        if (typeof startWebsite === "function") startWebsite();
      }, 800);
    });

  }
});

const toggleBtn = document.getElementById("toggle-music-btn");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    musicEnabled = !musicEnabled;

    if (musicEnabled) {
      toggleBtn.classList.remove("disabled");
      toggleBtn.textContent = "🔊 Enabled";
      if (currentAudio) {
        currentAudio.volume = 0; // đảm bảo bắt đầu nhỏ
        currentAudio.play().then(() => {
          let vol = 0;
          const fadeIn = setInterval(() => {
            if (!currentAudio || !musicEnabled) {
              clearInterval(fadeIn);
              return;
            }
            if (vol < 1) {
              vol += 0.05;
              currentAudio.volume = Math.min(vol, 1);
            } else {
              clearInterval(fadeIn);
            }
          }, 150); // ~3s fade in
        }).catch(() => {});
      }
    } else {
      toggleBtn.classList.add("disabled");
      toggleBtn.textContent = "🔇 Disabled";
      if (currentAudio) currentAudio.pause();
    }
  });
}
