function telaSobre() {
  desenharMoldura();

  // Título da Tela [cite: 5]
  fill(255);
  noStroke();
  textSize(28);
  text("SOBRE", width / 2, 100);

  // Conteúdo informativo
  textSize(16);
  text("Guitar Letter é um jogo rítmico\n educativo para praticar digitação.", width / 2, height / 2);

  // Instrução de retorno [cite: 6]
  textSize(12);
  fill(200);
  text("PRESSIONE ESC PARA VOLTAR", width / 2, height - 60);
}