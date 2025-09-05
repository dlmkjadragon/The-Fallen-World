// ===================== LIBRARY ===================== //
let currentCategory = null;
let currentStory = null;
let currentChapter = null;
let currentLanguage = 'en';

// ====== Sidebar renderers ======
function renderSidebarCategories() {
  const sidebar = document.getElementById("library-sidebar");
  sidebar.innerHTML = "";

  // Show All
  const allBtn = document.createElement("button");
  allBtn.className = "story-sidebar-btn" + (currentCategory === null ? " active" : "");
  allBtn.textContent = "Show All";
  allBtn.onclick = () => { renderAllStories(); updateSidebarActive("Show All"); };
  sidebar.appendChild(allBtn);

  // Each category
  for (const category in libraryData) {
    const btn = document.createElement("button");
    btn.className = "story-sidebar-btn" + (currentCategory === category ? " active" : "");
    btn.textContent = category;
    btn.onclick = () => { renderStories(category); updateSidebarActive(category); };
    sidebar.appendChild(btn);
  }
}

function renderSidebarChapters(story) {
  const sidebar = document.getElementById("library-sidebar");
  sidebar.innerHTML = "";

  // Back to Library (Categories)
  const backBtn = document.createElement("button");
  backBtn.className = "library-back-btn";
  backBtn.innerHTML = "← Back";
  backBtn.onclick = goBack;
  sidebar.appendChild(backBtn);

  // Chapter buttons
  story.chapters.forEach((ch, idx) => {
    const btn = document.createElement("button");
    btn.className = "story-sidebar-btn";

    btn.textContent = `Chapter ${idx+1}`;

    btn.onclick = () => showChapterContent(ch, idx);
    sidebar.appendChild(btn);
  });
}

// ====== Content renderers ======
function renderLibraryCategories() {
  // called once on DOMContentLoaded
  renderSidebarCategories();
  renderAllStories();
}

function renderAllStories() {
  currentCategory = null;
  currentStory = null;

  const list = document.getElementById("library-card-list");
  const chapterList = document.getElementById("chapter-card-list");
  const detail = document.getElementById("chapter-detail");

  list.style.display = "grid";
  chapterList.style.display = "none";
  detail.style.display = "none";
  list.innerHTML = "";

  let allStories = [];
  for (const category in libraryData) {
    allStories = allStories.concat(libraryData[category]);
  }
  allStories.sort((a, b) => new Date(b.published) - new Date(a.published));

  allStories.forEach(story => {
    list.appendChild(createStoryCard(story));
  });

  updateSidebarActive("Show All");

  // ✅ re-apply search nếu có query
  applyLibrarySearch();
}

function renderStories(category) {
  currentCategory = category;
  currentStory = null;

  const list = document.getElementById("library-card-list");
  const chapterList = document.getElementById("chapter-card-list");
  const detail = document.getElementById("chapter-detail");

  list.style.display = "grid";
  chapterList.style.display = "none";
  detail.style.display = "none";
  list.innerHTML = "";

  const sortedStories = [...libraryData[category]].sort(
    (a, b) => new Date(b.published) - new Date(a.published)
  );

  sortedStories.forEach(story => {
    list.appendChild(createStoryCard(story));
  });

  updateSidebarActive(category);

  // ✅ re-apply search nếu có query
  applyLibrarySearch();
}

function applyLibrarySearch() {
  const input = document.getElementById("story-search");
  if (!input) return;
  const query = input.value.toLowerCase().trim();
  const list = document.getElementById("library-card-list");
  const cards = list.querySelectorAll(".library-card");

  // Xoá message cũ
  const oldMsg = document.getElementById("no-library-result");
  if (oldMsg) oldMsg.remove();

  let found = false;

  cards.forEach(card => {
    const titleEl = card.querySelector(".library-card-title");
    const rawTitle = titleEl.textContent;
    const lower = rawTitle.toLowerCase();

    if (!query || lower.includes(query)) {
      card.style.display = "";
      found = true;
      // ✅ highlight nếu có query
      if (query) {
        if (typeof highlight === "function") {
          titleEl.innerHTML = highlight(rawTitle, query);
        } else {
          // fallback: regex replace
          const regex = new RegExp(`(${query})`, "ig");
          titleEl.innerHTML = rawTitle.replace(regex, "<mark>$1</mark>");
        }
      } else {
        titleEl.innerHTML = rawTitle; // reset highlight nếu query rỗng
      }
    } else {
      card.style.display = "none";
      titleEl.innerHTML = rawTitle; // reset highlight cho an toàn
    }

  });

  if (!found && query) {
    const msg = document.createElement("p");
    msg.id = "no-library-result";
    msg.className = "no-result-message";
    msg.textContent = "No books found.";
    list.appendChild(msg);
  }
}



// Create a story card (like art-card)
function createStoryCard(story) {
  const card = document.createElement("div");
  card.className = "library-card";
  card.innerHTML = `
    <img src="${story.cover || 'images/default-cover.jpg'}" 
         alt="${story.title}" class="library-card-cover">
    <h3 class="library-card-title">${story.title}</h3>
    <p class="library-card-info">${story.chapters.length} Chapters</p>
  `;
  card.onclick = () => renderChapters(story);
  return card;
}


function renderChapters(story) {
  currentStory = story;

  // Ẩn/hiện
  document.getElementById("library-card-list").style.display = "none";
  document.getElementById("chapter-card-list").style.display = "none";
  document.getElementById("chapter-detail").style.display = "none";

  const infoBox = document.getElementById("story-info");
  infoBox.style.display = "block";
  infoBox.innerHTML = `
    <div class="story-info-card">
      <h2 class="story-info-title">${story.title}</h2>
      <hr class="story-info-divider">

      <p><strong>Published:</strong> 
        <span class="frost-text">${story.published || "Unknown"}</span>
      </p>
      
      <p><strong>Genre:</strong>
        ${Array.isArray(story.genre) && story.genre.length
          ? story.genre.map(g => `
              <span class="genre-track">
                <span>${g}</span>
                <span class="flake"></span>
                <span class="flake"></span>
                <span class="flake"></span>
                <span class="flake"></span>
                <span class="flake"></span>
              </span>
            `).join(" ")
          : `<span class="genre-track"><span>N/A</span></span>`}
      </p>

      <p><strong>Music:</strong>
        ${Array.isArray(story.music) 
          ? story.music.map(m => 
              `<span class="music-track">
                <span>${m}</span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
              </span>`
            ).join(" ")
          : `<span class="music-track"><span>${story.music || "None"}</span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
            </span>`}
      </p>

      <p><strong>Chapters:</strong> 
        <span class="frost-text">${story.chapters.length}</span>
      </p>

      ${story.cast ? `<div class="cast-container">${story.cast.map(c => `<div class="cast-box"><strong> ✦ Cast: </strong><span>${c}</span><div class="wind"></div></div>`).join("")}</div>` : ""}

      <p><strong>Summary:</strong> ${story.summary || "No description yet."}</p>
    </div>
  `;

  renderSidebarChapters(story);
}


function showChapterContent(chapter, idx) {
  currentChapter = chapter;
  currentLanguage = 'en';

  document.getElementById("library-card-list").style.display = "none";
  document.getElementById("chapter-card-list").style.display = "none";
  document.getElementById("story-info").style.display = "none";

  const detail = document.getElementById("chapter-detail");
  detail.style.display = "block";

  // Hiện đủ: Chapter n: Title
  const titleText = chapter.title
    ? `Chapter ${idx+1}: ${chapter.title.replace(/^Chapter\s*\d+:?\s*/i, "")}`
    : `Chapter ${idx+1}`;
  document.getElementById("chapter-title").textContent = titleText;

  document.getElementById("chapter-text").innerHTML = chapter.content[currentLanguage]
    ? chapter.content[currentLanguage].replace(/\n/g, "<br>")
    : "";

  updateChapterActive(`Chapter ${idx+1}`);
}



// Switch language
function switchLanguage(lang) {
  if (!currentChapter) return;
  currentLanguage = lang;
  document.getElementById("chapter-text").innerHTML =
    currentChapter.content[lang]
      ? currentChapter.content[lang].replace(/\n/g, "<br>")
      : "";
}


// ====== Search in Library (optional) ======
document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "story-search") {
    const q = e.target.value.toLowerCase().trim();
    // filter works on what is visible list (stories or chapters)
    const inStories = document.getElementById("library-card-list").style.display !== "none";
    const container = inStories ? document.getElementById("library-card-list")
                                : document.getElementById("chapter-card-list");
    [...container.children].forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? "" : "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderLibraryCategories();
});

function goBack() {
  const cardList = document.getElementById("library-card-list");
  const infoBox = document.getElementById("story-info");
  const chapterDetail = document.getElementById("chapter-detail");

  if (chapterDetail.style.display !== "none") {
    chapterDetail.style.display = "none";
    infoBox.style.display = "block";

    document.querySelectorAll('.story-sidebar-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }
  
  else if (infoBox.style.display !== "none") {
    infoBox.style.display = "none";
    cardList.style.display = "grid";
    currentStory = null;
    renderSidebarCategories();
    updateSidebarActive(currentCategory ?? "Show All");
  }
}

function updateSidebarActive(name) {
  document.querySelectorAll('.story-sidebar-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === name);
  });
}

function updateChapterActive(chapterTitle) {
  document.querySelectorAll('.story-sidebar-btn').forEach(btn => {
    if (!btn.classList.contains('library-back-btn')) {
      btn.classList.toggle('active', btn.textContent.trim() === chapterTitle);
    }
  });
}

function resetLibrary() {
  // Clear search input
  const input = document.getElementById("story-search");
  if (input) input.value = "";

  // Reset state
  currentCategory = null;
  currentStory = null;
  currentChapter = null;

  // Ẩn và clear info box để tránh dính dưới gallery
  const infoBox = document.getElementById("story-info");
  if (infoBox) {
    infoBox.style.display = "none";
    infoBox.innerHTML = "";
  }

  const chapterDetail = document.getElementById("chapter-detail");
  if (chapterDetail) chapterDetail.style.display = "none";

  // Gọi lại y như lúc load trang
  renderLibraryCategories();
}


document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.library-sidebar-toggle');
  const sidebar = document.querySelector('.story-sidebar');

  if (toggleBtn && sidebar) {
    // Toggle sidebar
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    // Đóng khi chọn category
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
});
