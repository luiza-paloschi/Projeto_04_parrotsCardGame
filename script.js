let numValido = false;
let numCartas = '';
let jogadas = 0;
let par = 0;
let carta = [];
let carta1 = '';
let carta2 = '';
const menorNumero = 4;
const maiorNumero = 14;

while(numValido == false){
    numCartas = Number(prompt('Digite um número par entre 4 e 14 (inclusos)'));
    if (numCartas >= menorNumero && numCartas <= maiorNumero && numCartas % 2 == 0){
        numValido = true;
    } else{
        alert('Digite um número válido!');
    }
}
const metade = numCartas / 2;

//Duplicar array
let lista = [];
for (let i = 1; i <= (metade); i++){
    lista.push(i);
}
lista = lista.concat(lista);
lista.sort(embaralhar); // Embaralhar array

let contador = 0;
while (contador < lista.length){
  const cards =  document.querySelector('.cards');
    cards.innerHTML += `<div class="card" onclick="flipCard(this)">
    <div class="front-face"><img alt =" static parrot" src ="gifs_imgs/back.png" /></div>
    <div class="back-face"><img alt="gif of a parrot" src="gifs_imgs/parrot${lista[contador]}.gif" /></div>
     </div>`;
    contador ++;
} 

function flipCard(clicado){


}

function embaralhar() { 
	return Math.random() - 0.5; 
}