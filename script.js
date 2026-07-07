const PASSWORD = "2212";

const regalos = {
  deseos: [
    "Deseo especial 1",
    "Deseo especial 2",
    "Deseo especial 3",
    "Deseo especial 4",
    "Deseo especial 5",
    "Deseo especial 6",
    "Deseo especial 7",
    "Deseo especial 8",
    "Deseo especial 9",
    "Deseo especial 10",
    "Deseo especial 11",
    "Deseo especial 12"
  ],

  corazon: [
    "Favor del corazón 1",
    "Favor del corazón 2",
    "Favor del corazón 3",
    "Favor del corazón 4",
    "Favor del corazón 5",
    "Favor del corazón 6",
    "Favor del corazón 7",
    "Favor del corazón 8"
  ],

  especiales: [
    "Favor especial 1",
    "Favor especial 2",
    "Favor especial 3",
    "Favor especial 4",
    "Favor especial 5",
    "Favor especial 6",
    "Favor especial 7",
    "Favor especial 8",
    "Favor especial 9"
  ],

  super: [
    "Super regalo a elección"
  ]
};

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function unlockGift() {
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  const pass = input.value;

  if (pass === PASSWORD) {
    error.textContent = "";
    showScreen("unlock");

    setTimeout(() => {
      showScreen("welcome");
    }, 1800);

    setTimeout(() => {
      showScreen("vault");
    }, 4300);

  } else {
    error.textContent = "Código incorrecto";
    input.value = "";
  }
}

function toggleSection(button) {
  const section = button.parentElement;
  section.classList.toggle("open");
}

function crearLista(id, items) {
  const contenedor = document.getElementById(id);

  items.forEach((texto, index) => {
    const keyCheck = `${id}-${index}-check`;
    const keyDate = `${id}-${index}-date`;

    const gift = document.createElement("div");
    gift.className = "gift";

    gift.innerHTML = `
      <input type="checkbox">
      <div class="gift-name">${index + 1}. ${texto}</div>
      <input type="date">
    `;

    const checkbox = gift.querySelector('input[type="checkbox"]');
    const date = gift.querySelector('input[type="date"]');

    checkbox.checked = localStorage.getItem(keyCheck) === "true";
    date.value = localStorage.getItem(keyDate) || "";

    if (checkbox.checked) {
      gift.classList.add("done");
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(keyCheck, checkbox.checked);
      gift.classList.toggle("done", checkbox.checked);
      updateProgress();

      if (checkbox.checked && !date.value) {
        const today = new Date().toISOString().split("T")[0];
        date.value = today;
        localStorage.setItem(keyDate, today);
      }
    });

    date.addEventListener("change", () => {
      localStorage.setItem(keyDate, date.value);
    });

    contenedor.appendChild(gift);
  });
}

function updateProgress() {
  const checks = document.querySelectorAll('.gift input[type="checkbox"]');
  const checked = document.querySelectorAll('.gift input[type="checkbox"]:checked').length;
  const total = checks.length;

  const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

  document.getElementById("progressText").textContent =
    `♥ ${checked} / ${total} regalos cumplidos`;

  document.getElementById("progressPercent").textContent =
    `${percent}%`;

  document.getElementById("progressFill").style.width =
    `${percent}%`;

  if (checked === total && total > 0) {
    celebrate();
  }
}

function celebrate() {
  if (document.querySelector(".confetti")) return;

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent = ["♥", "⭐", "✨", "🎁"][Math.floor(Math.random() * 4)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    confetti.style.fontSize = 16 + Math.random() * 16 + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearLista("deseos", regalos.deseos);
  crearLista("corazon", regalos.corazon);
  crearLista("especiales", regalos.especiales);
  crearLista("super", regalos.super);

  updateProgress();

  const passwordInput = document.getElementById("password");

  passwordInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      unlockGift();
    }
  });
});
.confetti {
  position: fixed;
  top: -40px;
  z-index: 9999;
  pointer-events: none;
  animation: confettiFall linear forwards;
}

@keyframes confettiFall {
  to {
    transform: translateY(110vh) rotate(720deg);
    opacity: 0;
  }
}
