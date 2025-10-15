const canvas = document.getElementById('fogo');
const ctx = canvas.getContext('2d');

// Fundo escuro do fogo
ctx.fillStyle = "#1a0a00";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Função para desenhar uma chama com partículas
function desenharChama(x, y, largura, altura, corBase) {
  const gradiente = ctx.createLinearGradient(x, y + altura / 2, x, y - altura / 2);
  gradiente.addColorStop(0, corBase);
  gradiente.addColorStop(0.3, "#ffaa00");
  gradiente.addColorStop(0.6, "#ffdd00");
  gradiente.addColorStop(1, "#ffff88");

  // Chama (forma oval)
  ctx.fillStyle = gradiente;
  ctx.beginPath();
  ctx.ellipse(x, y, largura / 2, altura / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Partículas acima da chama
  for (let i = 0; i < 5; i++) {
    const px = x + (Math.random() - 0.5) * largura;
    const py = y - altura / 2 - Math.random() * 20;
    const raio = 2 + Math.random() * 5;

    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.arc(px, py, raio, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 3 Chamas principais
desenharChama(50, 120, 30, 80, "#ff4500");
desenharChama(100, 110, 35, 90, "#ff6600");
desenharChama(150, 115, 32, 85, "#ff8800");

// Faíscas aleatórias no canvas
for (let i = 0; i < 15; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const raio = 1 + Math.random() * 2;

  ctx.fillStyle = "#ffff00";
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fill();
}
