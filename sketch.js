let botoes = [];
let selecionado = 0;
let estado = "INICIO";
let fontePixel;
let dadosMusicas;
let palavrasBackground = [];
let textosBg = ["HTML5", "CSS", "JAVASCRIPT", "ARRAY", "CLASS", "WEB", "GAMES"];
let imagensCapas = [];

async function preload() {
  fontePixel = await loadFont("assets/fonts/PressStart2P-Regular.ttf");

  dadosMusicas = await loadJSON("data/musicas.json", async (dados) => {
    for (let i = 0; i < dados.musicas.length; i++) {
      imagensCapas[i] = await loadImage(
        `assets/img/albuns/${dados.musicas[i].capa}`,
      );
    }
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textFont(fontePixel);
  criarMenu();
  criarBackground();
}

function draw() {
  background(0);

  switch (estado) {
    case "INICIO":
      telaInicial();
      break;
    case "JOGAR":
      telaJogar();
      break;
    case "GAMEPLAY":
      telaGameplay();
      break;
    case "SOBRE":
      telaSobre();
      break;
    case "CRÉDITOS":
      telaCreditos();
      break;
  }
}

function mudarEstado(novoEstado) {
  estado = novoEstado;
  selecionado = 0;
}

function criarMenu() {
  botoes = [];
  botoes.push(
    new Botao(
      width / 2,
      250,
      200,
      50,
      "JOGAR",
      color(0, 150, 255),
      color(0, 255, 255),
    ),
  );
  botoes.push(
    new Botao(width / 2, 320, 200, 50, "SOBRE", color(180), color(255)),
  );
  botoes.push(
    new Botao(
      width / 2,
      390,
      200,
      50,
      "CRÉDITOS",
      color(180, 0, 0),
      color(255, 0, 0),
    ),
  );
}

function desenharMoldura() {
  stroke(200);
  strokeWeight(6);
  noFill();
  drawingContext.setLineDash([15, 15]);
  rect(width / 2, height / 2, width - 80, height - 80);
  drawingContext.setLineDash([]);
}

function criarBackground() {
  for (let i = 0; i < 20; i++) {
    palavrasBackground.push(new Palavra(random(textosBg)));
  }
}

function desenharBackgroundAnimado() {
  for (let p of palavrasBackground) {
    p.atualizar();
    p.mostrar();
  }
}

function keyPressed() {
  if (estado === "INICIO") {
    if (keyCode === DOWN_ARROW) selecionado = (selecionado + 1) % botoes.length;
    else if (keyCode === UP_ARROW)
      selecionado = (selecionado - 1 + botoes.length) % botoes.length;
    else if (keyCode === ENTER) mudarEstado(botoes[selecionado].texto);
  } else if (estado === "JOGAR") {
    if (keyCode === UP_ARROW)
      dificuldadeSelecionada = (dificuldadeSelecionada - 1 + 3) % 3;
    if (keyCode === DOWN_ARROW)
      dificuldadeSelecionada = (dificuldadeSelecionada + 1) % 3;
    if (keyCode === ENTER) mudarEstado("GAMEPLAY");
    if (keyCode === ESCAPE) mudarEstado("INICIO");
  } else {
    if (keyCode === ESCAPE) mudarEstado("INICIO");
  }
}

// ==============================
// CLASSES (BOTÃO E DECORAÇÃO)
// ==============================
class Botao {
  constructor(x, y, w, h, texto, corNormal, corHover) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.corNormal = corNormal;
    this.corHover = corHover;
    this.escala = 1;
  }

  desenhar(ativo) {
    let alvo = ativo ? 1.15 : 1;
    this.escala = lerp(this.escala, alvo, 0.1);

    let larguraAtual = this.w * this.escala;
    let alturaAtual = this.h * this.escala;

    strokeWeight(4);
    noFill();

    if (ativo) {
      stroke(this.corHover);
      drawingContext.setLineDash([10, 10]);
    } else {
      stroke(this.corNormal);
      drawingContext.setLineDash([8, 8]);
    }

    rect(this.x, this.y, larguraAtual, alturaAtual);
    drawingContext.setLineDash([]);

    noStroke();
    fill(ativo ? this.corHover : this.corNormal);
    textSize(14 * this.escala);
    text(this.texto, this.x, this.y);
  }
}

class Palavra {
  constructor(texto) {
    this.texto = texto;
    this.x = random(width);
    this.y = random(height);
    this.velocidade = random(0.3, 1);
    this.tamanho = random(10, 18);
    this.alpha = random(40, 80);
  }

  atualizar() {
    this.y -= this.velocidade;
    if (this.y < -20) {
      this.y = height + 20;
      this.x = random(width);
    }
  }

  mostrar() {
    noStroke();
    fill(255, this.alpha);
    textSize(this.tamanho);
    text(this.texto, this.x, this.y);
  }
}
