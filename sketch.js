// ==============================
// VARIÁVEIS GLOBAIS
// ==============================
let botoes = [];
let selecionado = 0;
let estado = "INICIO";

let palavras = [];
let textos = [
  "HTML5",
  "CSS",
  "JAVASCRIPT",
  "ARRAY",
  "CLASS",
  "OBJECT",
  "WEB",
  "DEVELOPMENT",
  "CANVAS",
  "GAMES",
];

let fontePixel;

// ==============================
// PRELOAD E SETUP
// ==============================
function preload() {
  fontePixel = loadFont("assets/fonts/PressStart2P-Regular.ttf");
}

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textFont(fontePixel);

  criarMenu();
  criarBackground();
}

// ==============================
// LOOP PRINCIPAL
// ==============================
function draw() {
  background(0);

  switch (estado) {
    case "INICIO":
      telaInicial();
      break;
    case "JOGAR":
      telaJogar();
      break;
    case "SOBRE":
      telaSobre();
      break;
    case "CRÉDITOS":
      telaCreditos();
      break;
  }
}

// ==============================
// FUNÇÕES DE APOIO (BACKGROUND E MOLDURA)
// ==============================
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

function criarBackground() {
  palavras = [];
  for (let i = 0; i < 20; i++) {
    palavras.push(new Palavra(random(textos)));
  }
}

function desenharBackgroundAnimado() {
  for (let p of palavras) {
    p.atualizar();
    p.mostrar();
  }
}

function desenharMoldura() {
  stroke(200);
  strokeWeight(6);
  noFill();
  drawingContext.setLineDash([15, 15]);
  rect(width / 2, height / 2, width - 80, height - 80);
  drawingContext.setLineDash([]);
}

// ==============================
// CONTROLES DE TECLADO
// ==============================
function keyPressed() {
  if (estado === "INICIO") {
    if (keyCode === DOWN_ARROW) {
      selecionado = (selecionado + 1) % botoes.length;
    } else if (keyCode === UP_ARROW) {
      selecionado--;
      if (selecionado < 0) selecionado = botoes.length - 1;
    } else if (keyCode === ENTER) {
      mudarEstado(botoes[selecionado].texto);
    }
  } else {
    if (keyCode === ESCAPE) {
      mudarEstado("INICIO");
    }
  }
}

function mudarEstado(novoEstado) {
  estado = novoEstado;
  selecionado = 0;
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
