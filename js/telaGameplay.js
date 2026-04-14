let score = 0;
let combo = 0;

function telaGameplay() {
  background(0);
  desenharMoldura(); // Moldura externa tracejada

  let musicaAtual = dadosMusicas.musicas[dificuldadeSelecionada];
  let capaAtual = imagensCapas[dificuldadeSelecionada];

  // --- LADO ESQUERDO: Pontuação ---
  textAlign(LEFT);
  fill(0);
  textSize(16);
  text("Score: " + score, 70, 70);

  textAlign(RIGHT);
  text("Combo: " + combo + "x", width - 70, 70);

  textAlign(CENTER);
  fill(0);
  textSize(18);
  text(musicaAtual.titulo, width / 2, height / 2 - 250);
  text(musicaAtual.artista, width / 2, height / 2 - 220);

  // --- CENTRO: Visualização da Capa ---
  // 1. Desenha a moldura interna
  stroke(255);
  strokeWeight(5);
  noFill();
  rectMode(CENTER);
  rect(width / 2, height / 2 - 50, 220, 220);

  // 2. Desenha a Imagem da Capa
  if (capaAtual) {
    // Desenha a imagem levemente menor que a moldura para dar o efeito de borda
    imageMode(CENTER);
    image(capaAtual, width / 2, height / 2 - 50, 210, 210);

    // Aplica o filtro de 8 bits (Posterize reduz a gama de cores)
    filter(POSTERIZE, 4);
  }

  // --- TEXTOS DE DIGITAÇÃO ---
  textAlign(CENTER);
  noStroke();
  fill(255);
  textSize(38);
  text("LETRA", width / 2, height - 130);

  textSize(16);
  text("PROXIMA: LETRA", width / 2, height - 90);
}
