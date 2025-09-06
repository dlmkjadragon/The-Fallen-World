// ===================== CHARACTERS ===================== //

function renderCharactersSection() {
  const sidebar = document.querySelector(".characters-sidebar");
  const container = document.getElementById("characters-gallery");
  const searchInput = document.getElementById("character-search");
  if (!sidebar || !container || !searchInput) return;

  sidebar.innerHTML = "";

  let currentCategoryIndex = 0;

  characterCategories.forEach((cat, idx) => {
    const btn = document.createElement("button");
    btn.className = "char-sidebar-btn";
    btn.innerHTML = `<i class="fas ${cat.icon}" style="margin-right: 8px;"></i> ${cat.category}`;
    if (idx === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      document.querySelectorAll(".char-sidebar-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryIndex = idx;
      renderFactions(cat.factions, container, searchInput.value.trim());
      container.scrollTop = 0;
    });

    sidebar.appendChild(btn);
  });

  searchInput.addEventListener("input", () => {
    const text = searchInput.value.trim();
    renderFactions(characterCategories[currentCategoryIndex].factions, container, text);
    container.scrollTop = 0;
  });

  renderFactions(characterCategories[0].factions, container, "");
}


function renderFactions(factions, container, searchText = "") {
  container.innerHTML = "";

  const oldMsg = document.getElementById("no-character-result");
  if (oldMsg) oldMsg.remove();

  let hasContent = false;

  factions.forEach(faction => {
    const factionMatch = faction.name.toLowerCase().includes(searchText.toLowerCase());
    const filteredCharacters = faction.characters.filter(c =>
      c.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (searchText === "" || factionMatch || filteredCharacters.length > 0) {
      hasContent = true; 

      const bannerDiv = document.createElement("div");
      bannerDiv.className = "faction-banner";
      bannerDiv.innerHTML = `
        <img src="${faction.banner}" alt="${faction.name}" loading="lazy">
        <div class="faction-overlay">
          <h3>${highlight(faction.name, searchText)}</h3>
          <p>${faction.description}</p>
        </div>
      `;
      container.appendChild(bannerDiv);

      const charsToShow = factionMatch || searchText === "" ? faction.characters : filteredCharacters;

      charsToShow.forEach(c => {
        const charDiv = document.createElement("div");
        charDiv.className = "character-card flip-card";
        charDiv.innerHTML = `
          <div class="flip-inner">
            <div class="character-front">
              <img src="${c.image}" alt="${c.name}" loading="lazy">
              <div class="character-text">
                <div class="character-name"><i class="${c.icon}"></i> ${highlight(c.name, searchText)}</div>
                <div class="character-title">${c.title}</div>
                <div class="character-species">+ Species: ${c.species} +</div>
              </div>
            </div>
            <div class="character-back">
              <p class="character-description">${c.description}</p>
              <a href="${c.link}" target="_blank" class="character-link-button">LINK >></a>
            </div>
          </div>
        `;
        charDiv.addEventListener("click", () => {
          charDiv.classList.toggle("flipped");
        });
        container.appendChild(charDiv);
      });

      const hr = document.createElement("hr");
      hr.className = "faction-hr";
      container.appendChild(hr);
    }
  });

  if (!hasContent) {
    const msg = document.createElement("p");
    msg.id = "no-character-result";
    msg.className = "no-result-message";
    msg.textContent = "No characters or factions found.";
    container.appendChild(msg);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const charToggle = document.querySelector('.characters-sidebar-toggle');
  const charSidebar = document.querySelector('.characters-sidebar');

  if (charToggle && charSidebar) {
    charToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      charSidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (charSidebar.classList.contains('open') &&
          !charSidebar.contains(e.target) &&
          !charToggle.contains(e.target)) {
        charSidebar.classList.remove('open');
      }
    });

    document.querySelectorAll('.characters-sidebar button').forEach(btn => {
      btn.addEventListener('click', () => {
        charSidebar.classList.remove('open');
      });
    });
  }
});
