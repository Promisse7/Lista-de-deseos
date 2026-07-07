const PASSWORD = "2212";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function unlockGift() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === PASSWORD) {
    error.textContent = "";
    showScreen("unlock");

    setTimeout(() => showScreen("welcome"), 1800);
    setTimeout(() => showScreen("vault"), 4300);
  } else {
    error.textContent = "Código incorrecto";
    document.getElementById("password").value = "";
  }
}

function toggleSection(button) {
  button.parentElement.classList.toggle("open");
}

const regalos = {
  deseos: Array.from({ length: 12 }, (_, i) => `Deseo especial ${i + 1}`),
  corazon: Array.from({ length: 8 }, (_, i) => `Favor del corazón ${i + 1}`),
  especiales: Array.from({ length: 9 }, (_, i) => `Favor especial ${i + 1}`),
  super: ["Super regalo a elección"]
};

function crearLista(id, items) {
  const contenedor = document.getElementById(id);

  items.forEach((texto, index) => {
    const checkKey = `${id}-${index}-check`;
    const dateKey = `${id}-${index}-date`;

    const gift = document.createElement("div");
    gift.className = "gift";

    gift.innerHTML = `
      <input type="checkbox">
      <div class="gift-name">${index + 1}. ${texto}</div>
      <input type="date">
    `;

    const checkbox = gift.querySelector('input[type="checkbox"]');
    const date = gift.querySelector('input[type="date"]');

    checkbox.checked = localStorage.getItem(checkKey) === "true";
    date.value = localStorage.getItem(dateKey) || "";

    if (checkbox.checked) gift.classList.add("done");

    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkKey, checkbox.checked);
      gift.classList.toggle("done", checkbox.checked);

      if (checkbox.checked && !date.value) {
        const today = new Date().toISOString().split("T")[0];
        date.value = today;
        localStorage.setItem(dateKey, today);
      }

      updateProgress();
    });

    date.addEventListener("change", () => {
      localStorage.setItem(dateKey, date.value);
    });

    contenedor.appendChild(gift);
  });
}

function updateProgress() {
  const checks = document.querySelectorAll('.gift input[type="checkbox"]');
  const checked = document.querySelectorAll('.gift input[type="checkbox"]:checked').length;
  const total = checks.length;
  const percent = total ? Math.round((checked / total) * 100) : 0;

  document.getElementById("progressText").textContent =
    `♥ ${checked} / ${total} regalos cumplidos`;

  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  crearLista("deseos", regalos.deseos);
  crearLista("corazon", regalos.corazon);
  crearLista("especiales", regalos.especiales);
  crearLista("super", regalos.super);

  updateProgress();

  document.getElementById("password").addEventListener("keydown", e => {
    if (e.key === "Enter") unlockGift();
  });
});
