const tela = document.getElementById("tela");
const ctx = tela.getContext("2d");

const img = new Image();
img.src = "pngwing.com.png"; // nome exato da imagem

// Configurações simples — ajuste se quiser
const frameWidth = 300;
const frameHeight = 380;
const totalFrames = 4;
let frame = 0;

img.onload = () => {
  setInterval(() => {
    ctx.clearRect(0, 0, tela.width, tela.height);

    ctx.drawImage(
      img,
      frame * frameWidth, 0,            // posição do quadro
      frameWidth, frameHeight,          // tamanho do quadro
      0, 0, tela.width, tela.height     // destino no canvas
    );

    frame = (frame + 1) % totalFrames; // avança o quadro
  }, 150);
};
