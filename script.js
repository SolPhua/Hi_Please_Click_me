// ---------- FLOATING HEARTS ----------
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);

// ---------- COUNTDOWN ----------
const countdownEl = document.getElementById("countdown");
const valentines = new Date("February 14, 2026 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentines - now;

  if (diff <= 0) {
    countdownEl.textContent = "It's today 🐼💖";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${d} days ${h} hrs ${m} mins to us 💕`;
}, 1000);

// ---------- MAIN LOGIC ----------
const card = document.getElementById("card");
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Will you be my Valentine? 🐼💘</h1>
    <button id="yesBtn">YES 💕</button>
    <button id="noBtn">NO 😐</button>
  `;

  document.getElementById("yesBtn").addEventListener("click", yesClicked);

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "vw";
    noBtn.style.top = Math.random() * 70 + "vh";
  });
});

// ---------- YES + CONFETTI ----------
function yesClicked() {
  launchConfetti();
  card.innerHTML = `
    <h1>YAYYYY 🐼🎉</h1>
    <p>14 Feb, 7pm.<br>Your panda is yours 💖</p>
  `;
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.background = `hsl(${Math.random()*360},100%,70%)`;
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

// Confetti animation
const confettiStyle = document.createElement("style");
confettiStyle.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(confettiStyle);
