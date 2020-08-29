let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessField.value == ''){
        window.alert('有這麽緊張嗎？都手抖直接點提交哦？！');
        guessCount --;
    } else if (1 > userGuess| userGuess > 100){
        window.alert('喂喂喂……範圍在1~100！');
        guessCount --;
    } else if ( isNaN(guessField.value)){
        window.alert('明明讓你猜數字，你的是什麽啊？');
    } else{
        if (guessCount == 1) {
            guesses.textContent = '猜過的答案：';
        }
    
        guesses.textContent += userGuess + ' ';
        if (userGuess == randomNumber) {
            lastResult.textContent = '恭喜恭喜！答對啦~';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            let myPix = Array("gif/celebrate.gif","gif/celebrate_2.gif",'gif/celebrate_3.gif','gif/celebrate_4.gif','gif/celebrate_5.gif');
            let randomPic = Math.floor((Math.random() * myPix.length));
            document.getElementById("GIF").src = myPix[randomPic];
    
            setGameOver();
        } else if (guessCount == 10) {
            lastResult.textContent = '!!游戲結束！！';
            lowOrHi.textContent = '';
            document.getElementById("GIF").src = "gif/hulk.gif";
            setGameOver();
        }  else {
            lastResult.textContent = '錯誤';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                lowOrHi.textContent = '再高一點！';
            } else if (userGuess > randomNumber) {
                lowOrHi.textContent = '太高了咯！';
            }
            var myPix_1 = Array('gif/wrong.gif','gif/wrong_2.gif','gif/wrong_3.gif','gif/wrong_4.gif');
            var randomPic_1 = Math.floor((Math.random() * myPix_1.length));
            document.getElementById("GIF").src = myPix_1[randomPic_1];
        }
    
        guessCount ++;
        guessField.value = '';
        guessField.focus();
    }
    }
    

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '再來一局？';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('GIF').src = " ";
}