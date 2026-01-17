const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 400);

console.log("script loaded");

document.getElementById("continueBtn").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <h1>Will you be my Valentine? 🐼💘</h1>
    <button id="yesBtn">YES 💕</button>
    <button id="noBtn">NO 😐</button>
  `;

  document.getElementById("yesBtn").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = `
      <h1>YAYYYY 🐼🎉</h1>
      <p>14 Feb, 7pm.<br>Your panda is yours 💖</p>
    `;
  });

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "vw";
    noBtn.style.top = Math.random() * 70 + "vh";
  });
});
