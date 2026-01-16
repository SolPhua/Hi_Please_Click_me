function start() {
  document.body.innerHTML = `
    <div class="container">
      <h1>Will you be my Valentine? 💘</h1>
      <button onclick="yes()">YES 💕</button>
      <button id="no">NO 😐</button>
    </div>
  `;

  const noBtn = document.getElementById("no");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  });
}

function yes() {
  document.body.innerHTML = `
    <div class="container">
      <h1>YAYYYY 🎉</h1>
      <p>14 Feb, 7pm. I’ll pick you up 💖</p>
    </div>
  `;
}
