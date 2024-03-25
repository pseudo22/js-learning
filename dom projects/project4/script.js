const randomNumber = parseInt(Math.random() * 100 + 1)

const  submit = document.querySelector('#subt')
const  userInput = document.querySelector('#guessfield')
const  guessSlot = document.querySelector('.guesses')
const  remaining= document.querySelector('.lastresult')
const  loworhi = document.querySelector('.loworhi')
const  startOver = document.querySelector('#resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validataGuess(guess);
    })
}

function validataGuess(guess){

    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){ 
        alert('please enter a valid number')
    }else if(guess > 100){ 
        alert('please enter a valid number')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over. random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){

    if (guess == randomNumber) {
        displayMessage('you are right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('num too low')
    }else if(guess > randomNumber){
        displayMessage('too high')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess+=1
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){

    loworhi.innerHTML = `<h2>${message}</h2>`

}

function newGame(){

   const newGameButton = document.querySelector('#newGame')

   newGameButton.addEventListener('click' , function(e){
    
   })

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' ,'')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame"> Start new game </h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}