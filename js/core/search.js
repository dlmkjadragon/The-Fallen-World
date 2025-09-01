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
  if (e.target.id !== "music-search") return;

  const query = e.target.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".music-card");
  const container = document.querySelector(".music-section");
  let found = false;

  filteredMusicList = [];

  cards.forEach(card => {
    const titleEl = card.querySelector("h3");
    const artistEl = card.querySelector("p");

    const title = titleEl?.textContent || "";
    const artist = artistEl?.textContent || "";
    const text = (title + " " + artist).toLowerCase();

    if (query === "" || text.includes(query)) {
      card.style.display = "";
      found = true;

      titleEl.innerHTML = highlight(title, query);
      artistEl.innerHTML = highlight(artist, query);

      const audioId = card.querySelector("audio")?.id?.replace("audio-", "");
      if (audioId) filteredMusicList.push({ id: audioId });

    } else {
      card.style.display = "none";
      titleEl.innerHTML = title;
      artistEl.innerHTML = artist;
    }
  });

  const noMsg = container.querySelector("#no-music-result");
  if (!found) {
    if (!noMsg) {
      const msg = document.createElement("p");
      msg.id = "no-music-result";
      msg.className = "no-result-message";
      msg.textContent = "No musics found.";
      container.prepend(msg);
    }
  } else if (noMsg) {
    noMsg.remove();
  }
});



document.getElementById("social-search").addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".social-card");
  const container = document.querySelector(".social-row");
  let found = false;

  cards.forEach(card => {
    const platformEl = card.querySelector(".platform");
    const name = platformEl?.textContent || "";

    if (query === "" || name.toLowerCase().includes(query)) {
      card.style.display = "";
      found = true;
      platformEl.innerHTML = highlight(name, query);
    } else {
      card.style.display = "none";
      platformEl.innerHTML = name;
    }
  });

  const noMsg = container.querySelector("#no-social-result");
  if (!found) {
    if (!noMsg) {
      const msg = document.createElement("p");
      msg.id = "no-social-result";
      msg.className = "no-result-message";
      msg.textContent = "No social medias found.";
      container.appendChild(msg);
    }
  } else if (noMsg) {
    noMsg.remove();
  }
});



document.addEventListener("input", function (e) {
  if (e.target.id !== "blacklist-search") return;

  const query = e.target.value.toLowerCase().trim();
  const cards = document.querySelectorAll("#tab-blacklist .blacklist-item");
  const container = document.querySelector(".blacklist-list");

  let found = false;
  cards.forEach(card => {
    const nameEl = card.querySelector(".blacklist-name");
    const name = nameEl?.textContent || "";

    if (query === "" || name.toLowerCase().includes(query)) {
      card.style.display = "";
      found = true;
      nameEl.innerHTML = highlight(name, query);
    } else {
      card.style.display = "none";
      nameEl.innerHTML = name;
    }
  });

  const noMsg = container.querySelector("#no-blacklist-result");
  if (!found) {
    if (!noMsg) {
      const msg = document.createElement("p");
      msg.id = "no-blacklist-result";
      msg.className = "no-result-message";
      msg.textContent = "No blacklist entries found.";
      container.appendChild(msg);
    }
  } else if (noMsg) {
    noMsg.remove();
  }
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


document.addEventListener("input", function (e) {
  if (e.target.id !== "story-search") return;

  const query = e.target.value.toLowerCase().trim();
  const list = document.getElementById("library-card-list");
  const container = document.querySelector(".library-container");

  if (!list) return;

  let found = false;

  // Lặp qua tất cả card trong gallery
  const cards = list.querySelectorAll(".library-card");
  cards.forEach(card => {
    const titleEl = card.querySelector(".library-card-title");
    const title = titleEl?.textContent || "";

    if (query === "" || title.toLowerCase().includes(query)) {
      card.style.display = "";
      found = true;
      titleEl.innerHTML = highlight(title, query); // highlight kết quả
    } else {
      card.style.display = "none";
      titleEl.innerHTML = title; // bỏ highlight nếu không match
    }
  });

  // ✅ Xử lý thông báo No books found
  let noMsg = container.querySelector("#no-library-result");
  if (!found) {
    if (!noMsg) {
      noMsg = document.createElement("p");
      noMsg.id = "no-library-result";
      noMsg.className = "no-result-message";
      noMsg.textContent = "No books found.";
      list.appendChild(noMsg);
    }
  } else if (noMsg) {
    noMsg.remove();
  }
});
