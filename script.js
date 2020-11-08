var programming_langages=[
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby"
]

let answer = '';
let maxWrong=6;
let mistakes=0;
let guessed=[];
let wordStatus = null;

function randomWord(){

    answer=programming_langages[Math.floor(Math.random()*programming_langages.length)];
   
}

function generateButtons(){
    let buttonsHTML ='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>`
    <button
    class="btn btn-lg btn-primary m-2"
    id ='`+letter+`'
    onClick ="handleGuess('`+letter+`')"
    >`+letter+`
    </button>
    `).join('');
    document.getElementById('keyboard').innerHTML= buttonsHTML;
}

document.getElementById('maxWrong').innerHTML=maxWrong;

function guessedWord(){

    wordStatus =answer.split('').map(letter=>(guessed.indexOf(letter)>=0 ?letter: " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;

}

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);


    if(answer.indexOf(chosenLetter)>=0){
        guessedWord();
        checkIfGameWon();
    } else if(answer.indexOf(chosenLetter)=== -1){
        mistakes ++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
} 

function updateHangmanPicture(){
    document.getElementById('hangmanPic').src='./images/'+ mistakes + '.jpg';
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML= mistakes;
}

function checkIfGameWon(){
    if(wordStatus=== answer){
        document.getElementById('keyboard').innerHTML = 'youWon !!!';
    }
}
function checkIfGameLost(){
    if(mistakes === maxWrong){
        document.getElementById('wordSpotlight').innerHTML='the answer was' + answer;
        document.getElementById('keyboard').innerHTML ='you Lost !!!'
    }
}

function reset(){
    mistakes =0;
    guessed=[];
    document.getElementById('hangmanPic').src='./images/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}
randomWord();
generateButtons();
guessedWord();