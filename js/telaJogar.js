let dificuldadeSelecionada = 0;
let niveis = ["FACIL", "MEDIO", "DIFICIL"];

function telaJogar() {
  desenharBackgroundAnimado();
  desenharMoldura();

  fill(255);
  textSize(32);
  text("JOGAR", width / 2, 80);

  let musicaAtual = dadosMusicas.musicas[dificuldadeSelecionada];

  // Info da música selecionada
  fill(0);
  textSize(22);
  text(musicaAtual.titulo, width / 2, 150);
  textSize(14);
  text(musicaAtual.artista, width / 2, 180);

  // Menu de Dificuldade
  for (let i = 0; i < niveis.length; i++) {
    let y = 280 + i * 50;
    if (i === dificuldadeSelecionada) {
      fill(0);
      textSize(24);
      text("> " + niveis[i] + " <", width / 2, y);
    } else {
      fill(150);
      textSize(18);
      text(niveis[i], width / 2, y);
    }
  }
}
