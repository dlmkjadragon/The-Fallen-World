const baseTiers = [
  { id: "S", name: "S", color1: "#ff4c4c", color2: "#ff914d", textColor: "#ffffff", isDefault: true },
  { id: "A", name: "A", color1: "#ff914d", color2: "#ffda4d", textColor: "#ffffff", isDefault: true },
  { id: "B", name: "B", color1: "#ffda4d", color2: "#4dff88", textColor: "#ffffff", isDefault: true },
  { id: "C", name: "C", color1: "#4dff88", color2: "#4d94ff", textColor: "#ffffff", isDefault: true },
  { id: "D", name: "D", color1: "#4d94ff", color2: "#6666ff", textColor: "#ffffff", isDefault: true }
];

let defaultTiers = JSON.parse(JSON.stringify(baseTiers));

// 🔥 Gom tất cả nhân vật từ characters-data.js
const allCharacters = [];
characterCategories.forEach(cat => {
  cat.factions.forEach(fac => {
    fac.characters.forEach(ch => {
      allCharacters.push({ name: ch.name, img: ch.image });
    });
  });
});

// Pool hiện tại
let poolCharacters = JSON.parse(JSON.stringify(allCharacters));

function renderTierlist() {
  const tierlist = document.getElementById("tierlist");
  tierlist.innerHTML = "";

  defaultTiers.forEach((tier, index) => {
    const tierEl = document.createElement("div");
    tierEl.classList.add("tier");

    tierEl.innerHTML = `
    <div class="tier-row">
        <div class="tier-label" style="background:${getTierColor(tier)}; color:${tier.textColor || '#fff'}">
        <span class="tier-name">${tier.name}</span>
        </div>

        <div class="tier-content" data-id="${tier.id}">
        ${ (tier.characters || []).map(c => `
            <div class="tier-card">
            <img src="${c.img}" alt="${c.name}" draggable="true">
            </div>
        `).join("") }
        </div>

        <div class="tier-actions">
        <div class="tier-actions-left">
            <button title="Settings" onclick="openTierSettings('${tier.id}')"><i class="fas fa-cog"></i></button>
        </div>
        <div class="tier-actions-right">
            <button title="Move Up" onclick="moveTierUp('${tier.id}')"><i class="fas fa-chevron-up"></i></button>
            <button title="Move Down" onclick="moveTierDown('${tier.id}')"><i class="fas fa-chevron-down"></i></button>
        </div>
        </div>
    </div>
    `;
    tierlist.appendChild(tierEl);
  });

  // Pool ảnh
  const pool = document.createElement("div");
  pool.classList.add("tier-pool");
  pool.innerHTML = poolCharacters.map(c => `
    <div class="tier-card">
        <img src="${c.img}" alt="${c.name}" draggable="true" crossOrigin="anonymous" loading="lazy">
    </div>
  `).join("");
  tierlist.appendChild(pool);



  // Sortable
  document.querySelectorAll(".tier-content, .tier-pool").forEach(container => {
    new Sortable(container, { 
    group: "tierlist", 
    animation: 150,

    onSort: () => {
      defaultTiers.forEach(tier => {
        const cards = document.querySelectorAll(`.tier-content[data-id="${tier.id}"] .tier-card`);
        tier.characters = Array.from(cards).map(card => {
          const img = card.querySelector("img");
          return { name: img.alt, img: img.src };
        });
      });

      // Cập nhật poolCharacters
      const used = defaultTiers.flatMap(t => t.characters.map(c => c.name));
      poolCharacters = allCharacters.filter(c => !used.includes(c.name));
    }

    
    });
  });

  enableTierRowDrag();
}

function removeTier(id) {
  const idx = defaultTiers.findIndex(t => t.id === id);
  if (idx > -1) {
    defaultTiers.splice(idx, 1);
    renderTierlist();
  }
}

function moveTierUp(id) {
  const index = defaultTiers.findIndex(t => t.id === id);
  if (index > 0) {
    [defaultTiers[index - 1], defaultTiers[index]] = [defaultTiers[index], defaultTiers[index - 1]];
    renderTierlist();
  }
}

function moveTierDown(id) {
  const index = defaultTiers.findIndex(t => t.id === id);
  if (index < defaultTiers.length - 1 && index !== -1) {
    [defaultTiers[index + 1], defaultTiers[index]] = [defaultTiers[index], defaultTiers[index + 1]];
    renderTierlist();
  }
}

function downloadTierlist() {
  const tierlist = document.getElementById("tierlist");
  if (!tierlist) return;

  // Ẩn pool tạm thời
  const pool = tierlist.querySelector(".tier-pool");
  if (pool) pool.style.display = "none";

  // thêm class export-mode để bỏ actions
  tierlist.classList.add("download-mode");

  htmlToImage.toPng(tierlist, { useCors: true, cacheBust: false })
    .then(dataUrl => {
      const link = document.createElement("a");
      link.download = "tierlist.png";
      link.href = dataUrl;
      link.click();

      // khôi phục lại
      if (pool) pool.style.display = "";
      tierlist.classList.remove("download-mode");
    })
    .catch(err => {
      console.error("Export error:", err);
      if (pool) pool.style.display = "";
      tierlist.classList.remove("download-mode");
    });
}



document.addEventListener("DOMContentLoaded", renderTierlist);

function getTierColor(tier) {
  return `linear-gradient(45deg, ${tier.color1}, ${tier.color2})`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderTierlist();
  setTimeout(applyColorShadows, 500); // chờ ảnh load xong
});

let currentTierId = null;

// Gọi khi click nút bánh răng
function openTierSettings(id) {
  currentTierId = id;
  const tier = defaultTiers.find(t => t.id === id);
  
  document.getElementById('tier-name-input').value = tier.name;
  document.getElementById('color1').value = tier.color1 || '#ff0000';
  document.getElementById('color2').value = tier.color2 || '#ff9900';

  // Gắn sự kiện mỗi lần mở settings
  document.getElementById('color1').oninput = updateGradient;
  document.getElementById('color2').oninput = updateGradient;

  document.getElementById('tier-settings-modal').style.display = 'flex';

    document.getElementById('textColor').value = tier.textColor || '#ffffff';
    document.getElementById('textColor').oninput = () => {
    if (currentTierId !== null) {
        const idx = defaultTiers.findIndex(t => t.id === currentTierId);
        if (idx !== -1) {
          defaultTiers[idx].textColor = document.getElementById('textColor').value;
          renderTierlist();
          openTierSettings(currentTierId);
        }
    }
    };

}


// Đổi tên tier
document.getElementById('tier-name-input').addEventListener('input', (e) => {
  if (currentTierId !== null) {
    const idx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (idx !== -1) {
      defaultTiers[idx].name = e.target.value; // ✅
      renderTierlist(); // ✅
    }
  }
});

// Đổi màu gradient
function updateGradient() {
  if (currentTierId !== null) {
    const idx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (idx !== -1) {
      defaultTiers[idx].color1 = document.getElementById('color1').value;
      defaultTiers[idx].color2 = document.getElementById('color2').value;
      renderTierlist(); // ✅
      openTierSettings(currentTierId);
    }
  }
}

// Xoá row
function deleteTier() {
  if (currentTierId !== null) {
    const idx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (idx !== -1) {
      const tier = defaultTiers[idx];

      // Trả nhân vật về poolCharacters
      if (tier.characters?.length) {
        poolCharacters.push(...tier.characters);
      }

      defaultTiers.splice(idx, 1);
      renderTierlist();
      closeModal();
    }
  }
}


// Xoá ảnh trong row
function clearTier() {
  if (currentTierId !== null) {
    const content = document.querySelector(`.tier-content[data-id="${currentTierId}"]`);
    const tier = defaultTiers.find(t => t.id === currentTierId);
    if (content && tier) {
      const cards = content.querySelectorAll(".tier-card img");
      const chars = Array.from(cards).map(img => ({ name: img.alt, img: img.src }));

      // Thêm lại vào poolCharacters
      poolCharacters.push(...chars);

      // Xóa trong tier
      tier.characters = [];
      renderTierlist();
    }
  }
}


function clearTierName() {
  if (currentTierId !== null) {
    const idx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (idx !== -1) {
      defaultTiers[idx].name = ""; // xoá text trong mảng
      renderTierlist();
      openTierSettings(currentTierId); // mở lại modal để thấy input rỗng ngay
    }
  }
}

function addTierAbove() {
  if (currentTierId !== null) {
    const currentIdx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (currentIdx !== -1) {
      defaultTiers.splice(currentIdx, 0, {
        id: "tier-" + Date.now().toString(36) + Math.random().toString(16).slice(2),
        name: "New Tier",
        color1: "#ff0000",
        color2: "#ff9900",
        textColor: "#ffffff",
        isDefault: false,
        characters: []
      });
      renderTierlist();
      openTierSettings(currentTierId);
    }
  }
}

function addTierBelow() {
  if (currentTierId !== null) {
    const currentIdx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (currentIdx !== -1) {
      defaultTiers.splice(currentIdx + 1, 0, {
        id: "tier-" + Date.now().toString(36) + Math.random().toString(16).slice(2),
        name: "New Tier",
        color1: "#ff0000",
        color2: "#ff9900",
        textColor: "#ffffff",
        isDefault: false,
        characters: []
      });

      // 👉 Giữ focus ở tier cũ, index không đổi
      renderTierlist();
      openTierSettings(currentTierId);
    }
  }
}



function closeModal() {
  document.getElementById('tier-settings-modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector("#tier-settings-modal .close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
});

// Đóng modal khi click ra ngoài
document.getElementById("tier-settings-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

function enableTierRowDrag() {
  const tierlistContainer = document.getElementById('tierlist');
  if (!tierlistContainer) return;

  // Xóa Sortable cũ (nếu có) để tránh x2
  if (tierlistContainer._sortable) {
    tierlistContainer._sortable.destroy();
  }

  // Tạo Sortable mới
    tierlistContainer._sortable = new Sortable(tierlistContainer, {
    animation: 150,
    handle: '.tier-label',
    draggable: '.tier',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: () => {
        const newOrder = [];
        document.querySelectorAll('#tierlist .tier').forEach((tierEl, newIndex) => {
        const id = tierEl.querySelector('.tier-content').getAttribute('data-id');
        const found = defaultTiers.find(t => t.id === id);
        if (found) newOrder.push(found);
        });
        defaultTiers = newOrder; // ✅ cập nhật lại mảng theo thứ tự mới
    }
    });
}

function resetTier() {
  if (currentTierId !== null) {
    const currentIdx = defaultTiers.findIndex(t => t.id === currentTierId);
    if (currentIdx === -1) return;
    let tier = defaultTiers[currentIdx];

    // Trả nhân vật về poolCharacters
    if (tier.characters?.length) {
      poolCharacters.push(...tier.characters);
    }

    if (tier.isDefault && tier.id) {
      const base = baseTiers.find(t => t.id === tier.id); 
      if (base) {
        defaultTiers[currentIdx] = {
          ...JSON.parse(JSON.stringify(base)),
          characters: []
        };
      }
    } else {
      defaultTiers[currentIdx] = {
        id: tier.id,
        name: "New Tier",
        color1: "#ff0000",
        color2: "#ff9900",
        textColor: "#ffffff",
        isDefault: false,
        characters: []
      };
    }

    renderTierlist();
    openTierSettings(currentTierId);
  }
}




window.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", downloadTierlist);
  }
});
