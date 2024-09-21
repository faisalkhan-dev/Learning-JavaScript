const randomNumber=parseInt(Math.random() * 100 + 1);

const submit=document.querySelector('#submit');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHigh');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if( isNaN(guess)){
        alert("Please enter a valid number ");
    }
    else if(guess<1 || guess >100){
        alert('Enter number between 1 to 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess==11){
            displayGuess(guess);
            displayMessage(`Game Over ! ...Random number was ${randomNumber}`);
            endgame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else {
        displayMessage(`Your guess is wrong`);

    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=` ${guess}`;
    numGuess++;
    lastResult.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2> `
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame" > Start new game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGame=document.querySelector('#newGame');
    newGame.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100 + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML='';
        playGame=true;
    });
}