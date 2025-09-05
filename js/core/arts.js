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
  document.getElementById("art-gallery").scrollTop = 0;

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

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.arts-sidebar');

  if (toggleBtn && sidebar) {
    // Toggle sidebar
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // không để event lan ra ngoài
      sidebar.classList.toggle('open');
    });

    // Đóng sidebar khi click category
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    });

    // Đóng sidebar khi click ra ngoài
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
});
