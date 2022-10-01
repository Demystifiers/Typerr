let min = 1;
let max = 10;
let winningNum = getRandomNum();
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown' , function(e){

    if(e.target.className.includes('play-again'))
    {
        window.location.reload();
    }
})

guessBtn.addEventListener('click' , function(){
    
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess<min || guess>max)
    {
        setMessage(`Please enter a number between ${min} and ${max}.` , '#FF0000');
        guessInput.value = '';
    }
    else if(guess === winningNum)
    {
        guessInput.value = '';
        gameOver(true , `${winningNum} is correct , YOU WIN !!!`);
    }
    else
    {
        guessesLeft -= 1;

        if(guessesLeft === 0)
        {
            guessInput.value = '';
            gameOver(false , `Game over , You lost. The correct number was ${winningNum}`);
        }
        else
        {
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.` , `red`);
        }
    }


});

function gameOver(won , msg)
{
    let color = won === true ? 'green' : 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg , color);

    guessBtn.value = 'Play Again'; 
    guessBtn.className += 'play-again';  

}

function getRandomNum()
{
    return Math.floor(Math.random() * (max-min+1) + min);
}

function setMessage(msg , color)
{
    message.style.color = color;
    message.textContent = msg;
}