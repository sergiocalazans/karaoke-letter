function telaCreditos() {
  desenharMoldura();

  fill(255);
  noStroke();
  textSize(28);
  text("CRÉDITOS", width / 2, 100);

  textSize(12);
  text("github.com/sergiocalazans/guitar-letter", width / 2, 150);

  textSize(18);
  text("@PKamilly", width / 2, 250);
  text("@sergiocalazans", width / 2, 300);
  text("@willian14551", width / 2, 350);

  textSize(12);
  text("PRESSIONE ESC PARA VOLTAR", width / 2, height - 60);
}
