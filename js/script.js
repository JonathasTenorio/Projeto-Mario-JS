const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const telaRestart = document.querySelector('.tela-restart');
const botaoRestart = document.querySelector('.restart-buttom-container');
const scoreContainer = document.querySelector('.tela-score');


var valor = 0;
var contador = 0;

const jump = () =>  {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = cloud.offsetLeft;
    const posicaoTela = telaRestart.offsetLeft;
    const posicaoBotao = botaoRestart.offsetLeft;
    const posicaoScore = scoreContainer.offsetLeft;
    const reloadButtom = document.getElementById('restart-buttom');

    if(contador < 1000){
        contador += 10;
    }
    else{
        valor += 1;
        document.getElementById('valor').innerHTML = valor;
        contador = 0;        
    }

    if (pipePosition <= 120 && pipePosition > 0 &&marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudsPosition}px`;

        telaRestart.style.left = `50%`

        botaoRestart.style.left = '45%'

        scoreContainer.style.left = '35%'

        document.getElementById('score-valor').innerHTML = valor;

        reloadButtom.addEventListener('click', restartGame);
    
        clearInterval(loop);

    }
    

}, 10);

function restartGame(){
    location.reload();
}



document.addEventListener('keydown', jump);