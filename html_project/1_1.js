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
    if (guessCount == 1) {
        guesses.textContent = '猜過的答案：';
    }

    guesses.textContent += userGuess + ' ';
    if (userGuess == randomNumber) {
        lastResult.textContent = '恭喜恭喜！答對啦~';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        let myPix = Array("https://media1.tenor.com/images/200bec2e1191d7e08ee5e7832fd0a1bf/tenor.gif?itemid=11841779","https://lh3.googleusercontent.com/proxy/Cj4DxD1tGVIIvvnC_YrwqIvlfQ4g-1wyI3PvSmoXxZ0m3JDKrhY78r0oDLgGTazK5CQANQy8wdj4yqnHwYXkFUGbAxLm4LoKN0_l6vutfXQ37n3wte0iXrKC_G9kVwEL8IsvDA8",'https://i1.read01.com/SIG=gom5ss/304865423774704b4133.jpg','https://www.freshdesignstudio.com/wp-content/uploads/2017/05/giphy-feature-3.gif','https://cdn130.picsart.com/236540941103202.gif?to=min&r=480');
        let randomPic = Math.floor((Math.random() * myPix.length));
        document.getElementById("GIF").src = myPix[randomPic];

        setGameOver();
    } else if (guessCount == 10) {
        lastResult.textContent = '!!游戲結束！！';
        lowOrHi.textContent = '';
        document.getElementById("GIF").src = "gif/hulk.gif";
        setGameOver();
    } else {
        lastResult.textContent = '錯誤';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '再高一點！';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '太高了咯！';
        }
        var myPix_1 = Array('https://media2.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif','https://thumbs.gfycat.com/AptDifferentGrunion-size_restricted.gif','https://i.imgur.com/7HAcbbD.gif','https://i.imgur.com/9M2Xf2G.gif');
        var randomPic_1 = Math.floor((Math.random() * myPix_1.length));
        document.getElementById("GIF").src = myPix_1[randomPic_1];
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
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