let step = 1;

function nextStep() {
  document.getElementById(`step${step}`).classList.add('hidden');
  step++;
  document.getElementById(`step${step}`).classList.remove('hidden');
}

function sayYes() {
  nextStep();
  startHearts();
}

function startHearts() {
  const hearts = document.getElementById('hearts');
  const emojis = ['❤️','💖','💘','💕','💗','❤️'];

  setInterval(() => {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = 4 + Math.random() * 3 + 's';
    hearts.appendChild(span);

    setTimeout(() => span.remove(), 7000);
  }, 300);
}
