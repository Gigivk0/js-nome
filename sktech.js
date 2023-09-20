/variáveis da bolinha

let xBolinha = 300;

let yBolinha = 200;

let diametro = 13;

let raio = diametro / 2 ;

//velocidade da bolinha

let velocidadeXBolinha = 6;

let velocidadeYBolinha = 6;

let raqueteComprimento = 10;

let raqueteAltura = 90;

//variáveis da raquete

let xRaquete = 5;

let yRaquete = 150;

//variáveis do oponente

let xRaqueteOponente = 585;

let yRaqueteOponente = 150;

let velocidadeYOponente;

let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo

let meusPontos = 0;

let pontosDoOponente = 0;

//sons do jogo

let raquetada;

let ponto;

let trillha;

//variáveis do centro

let yCentro = 0;

let xCentro = 300;

let meioComprimento = 3;

let meioAltura = 400;

//variáveis do centro do campo

let xCentroBolaCampo = 5;

let yCentroBolaCampo = 75;

function preload(){

  trilha = loadSound("trilha.mp3");

  ponto = loadSound("ponto.mp3");

  raquetada = loadSound("raquetada.mp3");

}

function setup() {

  createCanvas(600, 400);

  trilha.loop();

}

function draw() {

  background(34,139,34);

  mostraCentro(xCentro, yCentro);

  mostraCentroCampo(xCentroBolaCampo, yCentroBolaCampo);

  mostraBolinha();

  movimentaBolinha();

  verificaColisaoBorda();

  mostraRaquete(xRaquete, yRaquete);

  movimentaMinhaRaquete();

  //verificaColisaoRaquete();

  verificaColisaoRaquete(xRaquete, yRaquete);

  mostraRaquete(xRaqueteOponente, yRaqueteOponente);

  movimentaRaqueteOponente();

  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

  incluiPlacar();

  marcaPonto();

}

function mostraCentroCampo(x,y){

  fill(color(211,211,211));

  circle(300, 200, 25);

}

function mostraCentro(x, y){    velocidadeYBolinha *= -1;
168
​
169
  }
170
​
171
}
172
​
173
function mostraRaquete(x, y){
174
​
175
  fill(color(211,211,211));
176
​
177
  rect(x, y, raqueteComprimento, raqueteAltura);  
178
​
179
}
180
​
181
function movimentaMinhaRaquete(){
182
​
183
  if (keyIsDown(UP_ARROW)){
184
​
185
    yRaquete -= 10;
186
​
187
  }
188
​
189
  if (keyIsDown(DOWN_ARROW)){
190
​
191
    yRaquete += 10;
192
​
193
  }
194
​
195
}
196
​
197
function verificaColisaoRaquete(){
198
​
199
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
200
​
201
    velocidadeXBolinha *= -1;
202
​
203
    raquetada.play();
204
​
205
  }
206
​
207
}
208
​
209
function verificaColisaoRaquete(x,y){
210
​
211
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
212
​
213
  if (colidiu){
214
​
215
    velocidadeXBolinha *= -1;
216
​
217
    raquetada.play();
218
​
219
  }
220
​
221
}
222


  fill(211,211,211);

  rect(x, y, meioComprimento, meioAltura);

}

function mostraBolinha(){

  fill(color(30,144,255));

  circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha(){

  xBolinha += velocidadeXBolinha;

  yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda(){

    if (xBolinha + raio > width ||

     xBolinha - raio < 0){

    velocidadeXBolinha *= -1;

  }

  if (yBolinha + raio > height ||

     yBolinha - raio < 0){

    velocidadeYBolinha *= -1;

  }

}

function mostraRaquete(x,     velocidadeYBolinha *= -1;
168
​
169
  }
170
​
171
}
172
​
173
function mostraRaquete(x, y){
174
​
175
  fill(color(211,211,211));
176
​
177
  rect(x, y, raqueteComprimento, raqueteAltura);  
178
​
179
}
180
​
181
function movimentaMinhaRaquete(){
182
​
183
  if (keyIsDown(UP_ARROW)){
184
​
185
    yRaquete -= 10;
186
​
187
  }
188
​
189
  if (keyIsDown(DOWN_ARROW)){
190
​
191
    yRaquete += 10;
192
​
193
  }
194
​
195
}
196
​
197
function verificaColisaoRaquete(){
198
​
199
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
200
​
201
    velocidadeXBolinha *= -1;
202
​
203
    raquetada.play();
204
​
205
  }
206
​
207
}
208
​
209
function verificaColisaoRaquete(x,y){
210
​
211
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
212
​
213
  if (colidiu){
214
​
215
    velocidadeXBolinha *= -1;
216
​
217
    raquetada.play();
218
​
219
  }
220
​
221
}
222
y){

  fill(color(211,211,211));

  rect(x, y, raqueteComprimento, raqueteAltura);  

}

function movimentaMinhaRaquete(){

  if (keyIsDown(UP_ARROW)){

    yRaquete -= 10;

  }

  if (keyIsDown(DOWN_ARROW)){

    yRaquete += 10;

  }

}

function verificaColisaoRaquete(){

  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){

    velocidadeXBolinha *= -1;

    raquetada.play();

  }

}

function verificaColisaoRaquete(x,y){

  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);

  if (colidiu){

    velocidadeXBolinha *= -1;

    raquetada.play();

  }

}

function movimentaRaqueteOponente(){

  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;

  yRaqueteOponente += velocidadeYOponente + chanceDeErrar

  calculaChanceDeErrar()

}

function incluiPlacar(){

  stroke(255);

  textAlign(CENTER);

  textSize(16);

  fill(color(255,140,0));

  rect(150, 10, 40, 20);

  fill(255);

  text(meusPontos, 170, 26);

  fill(color(255,140,0));

  rect(450, 10, 40, 20);

  fill(255);

  text(pontosDoOponente, 470, 26);

}

function marcaPonto(){

  if (xBolinha > 590){

    meusPontos += 1;

    ponto.play();

  }

  if (xBolinha < 10){

    pontosDoOponente += 1;

    ponto.play();

  }

}

function calculaChanceDeErrar(){

  if (pontosDoOponente >= meusPontos){

    chanceDeErrar += 1

    if (chanceDeErrar >= 39){

      chanceDeErrar = 40

    }

  } else {

    chanceDeErrar -= 1

    if (chanceDeErrar <= 35){

      chanceDeErrar = 35

    }

  }

}

 