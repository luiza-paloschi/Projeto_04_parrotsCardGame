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
    numCartas = Number(prompt('Digite um número par de 4 a 14'));
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

      // Evitar a contabilização caso a pessoa clique várias vezes na mesma carta
      if(clicado.className.includes('flipped')){
        return;
    }


    jogadas++;
    if(carta[0]==undefined){
        carta.push(clicado);
        clicado.classList.add('flipped');  
        carta1 = carta[0].innerHTML;
    } else if(carta[1]==undefined){
       carta.push(clicado);
       clicado.classList.add('flipped');  
        carta2 = carta[1].innerHTML;
        compareCards(carta1, carta2);

    }  
}

function compareCards(primeiraCarta, segundaCarta){
    if(primeiraCarta==segundaCarta){
        par++;
        const lastChild1 = carta[0].lastElementChild;
        lastChild1.classList.add('rainbow');
        const lastChild2 = carta[1].lastElementChild;
        lastChild2.classList.add('rainbow');
        if (par === metade){
            endGame(jogadas);
       }
        carta = [];
    } else{
        const a = [carta[1], carta[0]];
        setTimeout(() => {a.forEach(card => {
            card.classList.remove('flipped');});
            carta = [];
        }, 1000); 
    }
}

function endGame (totalJogadas){
    const audio = new Audio('gifs_imgs/aplausos.mp3');
    audio.play();
    setTimeout(alert, 500, `Fim de jogo! Você ganhou em ${totalJogadas} jogadas!`);
}

function embaralhar() { 
	return Math.random() - 0.5; 
}