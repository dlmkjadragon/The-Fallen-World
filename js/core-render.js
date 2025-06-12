function renderDataSection({ data, containerSelector, template }) {
  const container = document.querySelector(containerSelector);
  if (!container || !Array.isArray(data)) return;

  
  container.innerHTML = "";


  data.forEach(item => {
    const html = template(item);
    container.insertAdjacentHTML("beforeend", html);
  });
}
