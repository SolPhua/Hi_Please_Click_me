const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainCard = document.getElementById("mainCard");
const resultCard = document.getElementById("resultCard");
const countdownEl = document.getElementById("countdown");
const qrCodeImg = document.getElementById("qrCode");

// YES BUTTON
yesBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  // Mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  launchConfetti();
  startCountdown();
  generateQR();
});

// NO BUTTON RUNS AWAY
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

// CONFETTI
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "heart";
    confetti.innerHTML = "🎉";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.fontSize = "24px";
    confetti.style.animationDuration = "3s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// COUNTDOWN TIMER (Valentine's Day)
function startCountdown() {
  const valentinesDay = new Date(new Date().getFullYear(), 1, 14);

  function updateCountdown() {
    const now = new Date();
    const diff = valentinesDay - now;

    if (diff <= 0) {
      countdownEl.innerHTML = "💘 It's Valentine's Day 💘";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.innerHTML =
      `⏳ ${days} days ${hours} hours ${minutes} minutes to Valentine's 💕`;
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);
}

// QR CODE
function generateQR() {
  const url = window.location.href;
  qrCodeImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(url);
}
