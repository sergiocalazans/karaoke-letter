let score = 0;
let combo = 1;

function telaGameplay() {
  background(0);
  desenharMoldura(); // Moldura externa tracejada

  let musicaAtual = dadosMusicas.musicas[dificuldadeSelecionada];

  // --- LADO ESQUERDO: Pontuação ---
  textAlign(LEFT);
  fill(0);

  textSize(16);
  text("Score: " + score, 70, 70);
  text("Combo: " + combo + "x", 70, 100);

  // --- LADO DIREITO: Info da Música ---
  textAlign(RIGHT);
  text(musicaAtual.titulo, width - 70, 70);
  textSize(12);
  text(musicaAtual.artista, width - 70, 95);

  // --- CENTRO: Visualização ---
  textAlign(CENTER);

  // Moldura interna para a Capa (conforme a imagem do modelo)
  stroke(255);
  strokeWeight(4);
  noFill();
  rect(width / 2, height / 2 - 50, 220, 220); // Espaço da capa de Pink Floyd

  // --- ÁREA DE DIGITAÇÃO (Inferior) ---
  // Letra atual em destaque verde
  fill(0);
  textSize(38);
  text("LETRA", width / 2, height - 130);

  // Próxima letra em cinza
  fill(0);
  textSize(16);
  text("PROXIMA: LETRA", width / 2, height - 90);
}
