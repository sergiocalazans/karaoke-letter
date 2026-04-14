let score = 0;
let combo = 1;

function telaGameplay() {
  background(0);
  desenharMoldura(); // Moldura externa tracejada

  let musicaAtual = dadosMusicas.musicas[dificuldadeSelecionada];
  let capaAtual = imagensCapas[dificuldadeSelecionada];

  // --- LADO ESQUERDO: Pontuação ---
  textAlign(LEFT);
  fill(0);
  textSize(16);
  text("Score: " + score, 70, 70); // [cite: 22]
  text("Combo: " + combo + "x", 70, 100); // [cite: 25]

  // --- LADO DIREITO: Info da Música ---
  textAlign(RIGHT);
  text(musicaAtual.titulo, width - 70, 70); // [cite: 23]
  textSize(12);
  text(musicaAtual.artista, width - 70, 95); // [cite: 24]

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
  text("LETRA", width / 2, height - 130); // [cite: 26]

  textSize(16);
  text("PROXIMA: LETRA", width / 2, height - 90); // [cite: 27]
}
