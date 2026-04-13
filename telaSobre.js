function telaSobre() {
  desenharMoldura();

  fill(255);
  noStroke();
  textSize(28);
  text("SOBRE", width / 2, 100);

  textSize(16);
  text(
    "Guitar Letter é um jogo rítmico\n educativo para praticar digitação.",
    width / 2,
    height / 2,
  );

  textSize(12);
  fill(200);
  text("PRESSIONE ESC PARA VOLTAR", width / 2, height - 60);
}
