// ===================== FRIENDS CAROUSEL =====================

function renderFriendCarousel() {
  const track = document.getElementById("friend-carousel-track");
  if (!track) return;

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