// ===================== VIDEO GALLERY ===================== //

// ---- State ---- //
let currentVideoCategory = "Show All";
let currentVideoIndex = -1;
let sortedVideosData = [];
let filteredVideosData = [];
let currentVideoPage = 1;
const videosPerPage = 6;
let currentVisibleVideos = [];
let favoriteVideos = new Set();

// ---- Render Gallery ---- //
function renderVideosSection() {
  const container = document.getElementById("video-gallery");
  if (!container) return;

  container.innerHTML = "";

  // sort by date desc
  sortedVideosData = [...videosData].sort((a, b) => {
    const aFav = favoriteVideos.has(a.id);
    const bFav = favoriteVideos.has(b.id);
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  filteredVideosData = sortedVideosData.filter(v =>
    currentVideoCategory === "Show All" || v.category === currentVideoCategory
  );

  const totalPages = Math.ceil(filteredVideosData.length / videosPerPage);
  if (currentVideoPage > totalPages) currentVideoPage = 1;

  const start = (currentVideoPage - 1) * videosPerPage;
  const end = start + videosPerPage;
  const currentPageData = filteredVideosData.slice(start, end);
  currentVisibleVideos = currentPageData;

  currentPageData.forEach(video => {
    container.insertAdjacentHTML("beforeend", `
      <div class="video-card" 
        data-category="${video.category}" 
        data-title="${video.title}"
        data-sender="${video.sender?.name || ''}">
        <img src="${video.thumbnail || ''}" alt="${video.title}" loading="lazy">
        <div class="video-title">${video.title}</div>
        <div class="video-sender">
          By: <a href="${video.sender?.link || '#'}" target="_blank">
            ${video.sender?.name || 'Unknown'}
          </a>
        </div>
          <button 
            class="favorite-btn ${favoriteVideos.has(video.id) ? "favorited" : ""}" 
            data-id="${video.id}" 
            onclick="toggleVideoFavorite('${video.id}', this, event)">
            ${favoriteVideos.has(video.id) ? "★ FAVORITE" : "☆ FAVORITE"}
          </button>

      </div>
    `);

    const lastCard = container.lastElementChild;
    lastCard.addEventListener("click", () => {
      showVideoPopup(video);
    });

    if (favoriteVideos.has(video.id)) {
      const lastCard = container.lastElementChild;
      addStarsToCard(lastCard);
    }

  });

  renderVideoPagination();

}

// ---- Pagination ---- //
function renderVideoPagination() {
  const pagination = document.getElementById("video-pagination");
  if (!pagination) return;

  let totalPages = Math.ceil(filteredVideosData.length / videosPerPage);
  if (totalPages === 0) totalPages = 1;
  pagination.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "← Previous";
  prevBtn.disabled = currentVideoPage === 1;
  prevBtn.onclick = () => { currentVideoPage--; renderVideosSection(); };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next →";
  nextBtn.disabled = currentVideoPage === totalPages;
  nextBtn.onclick = () => { currentVideoPage++; renderVideosSection(); };

  const pageInfo = document.createElement("span");
  pageInfo.textContent = `Page ${currentVideoPage} of ${totalPages}`;
  pageInfo.style.margin = "0 12px";
  pageInfo.style.color = "#b0e0e6";

  pagination.appendChild(prevBtn);
  pagination.appendChild(pageInfo);
  pagination.appendChild(nextBtn);
}

// ===================== VIDEO POPUP ===================== //
function showVideoPopup(video) {
  const index = filteredVideosData.findIndex(v => v.id === video.id);
  currentVideoIndex = index;

  const popupVideo = document.getElementById("popup-video");
  popupVideo.src = video.src;
  popupVideo.load();

  document.getElementById("popup-video-title").textContent = video.title;
  const senderLink = document.getElementById("popup-video-sender");
  if (video.sender && video.sender.name && video.sender.link) {
    senderLink.href = video.sender.link;
    senderLink.textContent = video.sender.name;
  } else {
    senderLink.textContent = "Unknown";
    senderLink.removeAttribute("href");
  }

  document.getElementById("popup-video-date").textContent = video.date || "???";

  const charBox = document.getElementById("popup-video-characters-box");
  if (video.characters && Array.isArray(video.characters) && video.characters.length) {
    charBox.innerHTML = `
      <div class="cast-container">
        ${video.characters.map(c => `
          <div class="cast-box"><strong> ✦ Character: </strong>
            <span>${c}</span>
            <div class="wind"></div>
          </div>`).join("")}
      </div>
    `;
    charBox.style.display = "block";
  } else {
    charBox.style.display = "none";
  }

  
  document.getElementById("prev-video-btn").disabled = index <= 0;
  document.getElementById("next-video-btn").disabled = index >= filteredVideosData.length - 1;

  document.getElementById("video-popup").style.display = "flex";
}


function closeVideoPopup() {
  const popup = document.getElementById("video-popup");
  const popupVideo = document.getElementById("popup-video");
  popupVideo.pause();
  popupVideo.src = "";
  popup.style.display = "none";
}

function showPrevVideo() {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    showVideoPopup(filteredVideosData[currentVideoIndex]);
  }
}

function showNextVideo() {
  if (currentVideoIndex < filteredVideosData.length - 1) {
    currentVideoIndex++;
    showVideoPopup(filteredVideosData[currentVideoIndex]);
  }
}

// ===================== SIDEBAR CATEGORIES ===================== //
function renderVideoSidebar() {
  const sidebar = document.getElementById("video-sidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "";

  const categories = ["Show All", ...new Set(videosData.map(v => v.category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.classList.add("sidebar-btn");
    if (cat === currentVideoCategory) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentVideoCategory = cat;
      currentVideoPage = 1;
      renderVideosSection();

      document.querySelectorAll("#video-sidebar .sidebar-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const searchInput = document.getElementById("video-search");
      if (searchInput && searchInput.value.trim() !== "") {
        const event = new Event("input", { bubbles: true });
        searchInput.dispatchEvent(event);
      }
    });


    sidebar.appendChild(btn);
  });
}

// ===================== INIT ===================== //
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("video-gallery")) {
    renderVideoSidebar();
    renderVideosSection();
  }

  // click outside popup to close
  document.getElementById("video-popup")?.addEventListener("click", function (e) {
    if (e.target === this) closeVideoPopup();
  });
});


function addStarsToCard(card, count = 6) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = (Math.random() * 3) + "s";
    star.style.animationDuration = (1 + Math.random() * 1.5) + "s";
    card.appendChild(star);
  }
}

function refreshVideoSearch() {
  const searchBox = document.getElementById("video-search");
  if (searchBox) {
    const query = currentVideoSearchQuery;
    const inputEvent = new Event("input", { bubbles: true });
    searchBox.value = query;
    searchBox.dispatchEvent(inputEvent); // 🔥 Gọi lại event search
  }
}

function toggleVideoFavorite(id, btn, event) {
  if (event) event.stopPropagation();

  const card = btn.closest(".video-card");

  if (favoriteVideos.has(id)) {
    // 🔥 Bỏ favorite
    favoriteVideos.delete(id);
    btn.textContent = "☆ FAVORITE";
    btn.classList.remove("favorited");
    card.classList.remove("favorited");
    // 🔥 Xóa sao
    card.querySelectorAll(".star").forEach(s => s.remove());
  } else {
    // 🔥 Thêm favorite
    favoriteVideos.add(id);
    btn.textContent = "★ FAVORITE";
    btn.classList.add("favorited");
    card.classList.add("favorited");
    // 🔥 Thêm sao
    addStarsToCard(card);
  }

  // 🔥 Refresh UI
  if (isSearchingVideos) {
    refreshVideoSearch();
  } else {
    renderVideosSection();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const videoToggleBtn = document.querySelector('.video-sidebar-toggle');
  const videoSidebar = document.querySelector('.video-sidebar');

  if (videoToggleBtn && videoSidebar) {
    // Mở / đóng sidebar
    videoToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      videoSidebar.classList.toggle('open');
    });

    // Đóng khi chọn category
    document.querySelectorAll('.video-sidebar .sidebar-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        videoSidebar.classList.remove('open');
      });
    });

    // Đóng khi click ra ngoài
    document.addEventListener('click', (e) => {
      if (videoSidebar.classList.contains('open') &&
          !videoSidebar.contains(e.target) &&
          !videoToggleBtn.contains(e.target)) {
        videoSidebar.classList.remove('open');
      }
    });
  }
});
