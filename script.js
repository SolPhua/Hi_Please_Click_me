document.addEventListener("DOMContentLoaded", () => {

  // Floating hearts
  const heartsContainer = document.querySelector(".hearts");

  function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 400);

  // Countdown
  const countdownEl = document.getElementById("countdown");
  const valentinesDay = new Date("February 14, 2026 19:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = valentinesDay - now;

    if (diff <= 0) {
      countdownEl.innerHTML = "It's today 🐼💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.innerHTML = `${days} days ${hours} hrs ${mins} mins to us 💕`;
  }, 1000);

});

// Valentine functions (must be OUTSIDE)
function ask() {
  document.getElementById("card").innerHTML = `
    <h1>Will you be my Valentine? 🐼💘</h1>
    <button onclick="yes()">YES 💕</button>
    <button id="no">NO 😐</button>
  `;

  const noBtn = document.getElementById("no");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "vw";
    noBtn.style.top = Math.random() * 70 + "vh";
  });
}

function yes() {
  launchConfetti();
  document.getElementById("card").innerHTML = `
    <h1>YAYYY 🐼🎉</h1>
    <p>14 Feb, 7pm.<br>Your panda is yours 💖</p>
  `;
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// Confetti animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);
