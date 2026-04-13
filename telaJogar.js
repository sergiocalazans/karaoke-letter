function telaJogar() {
  desenharMoldura();

  fill(255);
  noStroke();
  textSize(28);
  text("JOGAR", width / 2, 100);

  textSize(12);
  fill(200);
  text("PRESSIONE ESC PARA VOLTAR", width / 2, height - 60);
}
