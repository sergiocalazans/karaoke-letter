function telaInicial() {
  desenharBackgroundAnimado();
  desenharMoldura();
  
  // Título: GUITAR LETTER [cite: 1]
  fill(255);
  noStroke();
  textSize(36);
  text("GUITAR LETTER", width / 2, 150);

  // Botões de navegação [cite: 2, 3, 4]
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].desenhar(i === selecionado);
  }
}