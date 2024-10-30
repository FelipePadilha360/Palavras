let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Humilde", "maça", "esportivo"];
  return random(palavras);
}

function inicializaCores(){
  background(" red");
  fill( "yellow");
  textSize ( 64);
  textAlign (CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
   let quantidade = map( mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
 let texto = palavraParcial (0, width);
 
  text(texto, 200, 200);
 /* if (mouseX < 50){
    let palavra ="H"
    text( palavra, 200, 200);
    } else if (mouseX < 100){
      let palavra = "Hu";
      text (palavra, 200, 200);
    } else if (mouseX < 150){
      let palavra = "Hum";
      text (palavra, 200, 200);
    } else if (mouseX < 200){
      let palavra = "Humi";
      text (palavra, 200, 200);
    } else if (mouseX < 250){
      let palavra = "Humil";
      text (palavra, 200, 200);
    } else if (mouseX < 300){
      let palavra = "Humild";
      text (palavra, 200, 200);
    }  else if (mouseX < 350){
      let palavra = "Humilde";
      text (palavra, 200, 200);
    } */
}