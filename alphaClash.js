/*
function play(){
    //console.log('play now')
    //step-1 : hidd the home screen . th hidd the scrren add the class hidden to the hme section
    const findHome = document.getElementById('home-screen')
    findHome.classList.add('hidden')
    //show the play ground

    const PlayGround = document.getElementById('play-ground');
   // console.log(PlayGround.classList)
   PlayGround.classList.remove('hidden');
}
*/

//call utility file function 

function play(){
    //hide everythig show only playground
     hideElementById('home-screen');
     hideElementById('final-score');
     showElementById('play-ground');
     continueGame();
     //reser score and life
     setInnerText('current-life', 5 );
     getElementByIdScore('curent-score',0);
}
//gave over 

function gameOver(){
    hideElementById('play-ground') 
    showElementById('final-score');
    //update final score 
    const lastScore = getElementByIdScore('curent-score')
    setInnerText('game-last-score', lastScore);
    //clear the last selected alphabet colors 

    const currentalphabet = getElementTextById ('alpha-Show');
    removeCollerInAlphabet(currentalphabet);
}


//creat continue game function

function continueGame (){
    const take =  getAlphabet();
    console.log('your random aplpabet ',take);
    //show display in alphaBet

const CurrentalPha = document.getElementById('alpha-Show');
CurrentalPha.innerText = take ;
//set background collor
setCollerInAlphabet(take);

   
}

//
function handKeyboardKeyUpEvent (event){
    const playerPrsed = event.key;
    if (playerPrsed === 'Escape'){
        gameOver();
    }
    console.log('player prased ' , playerPrsed);
    //get the expected to press
const CurrentailPhat = document.getElementById('alpha-Show');
const currentAlphabet = CurrentailPhat.innerText ;
const convertLoer = currentAlphabet.toLowerCase();
console.log(playerPrsed , currentAlphabet);

//CHECK MAtch or not 
   if (playerPrsed === currentAlphabet){
    const returnValue = getElementByIdScore('curent-score');
    const updatedScore = returnValue + 1 ;
    setInnerText('curent-score',updatedScore);



    //----------------------->
    //returnValue.innerText = updatedScore ;
    //update a score 
     // 1.get the current score
    // const currenstScoreElement = document.getElementById('curent-score');
    // const currentScoreText = currenstScoreElement.innerText ;
    // const currentScore = parseInt(currentScoreText);
     // 2.increase the score by 1
    // const newScore = currentScore + 1 ;
     //show the update score
     //currenstScoreElement.innerText = newScore ;

     //----------------->
    //start and continue a new round 
    removeCollerInAlphabet(currentAlphabet);
    continueGame();
   }
   else{
    console.log('you lost and lost your life score')
    const curretLife = getElementByIdScore ('current-life');
    const updatedLife = curretLife - 1 ;
    setInnerText('current-life', updatedLife);
    if ( updatedLife === 0){
         gameOver()
    }


    //____________>
    //step-1: get the current life number 
           // const currentLifeElement = document.getElementById('current-life');
           // const currrentLifeText = currentLifeElement.innerText ;
            //const currentLife = parseInt(currrentLifeText);
    //step-2: reduce the life count 
     //const newLife = currentLife -1 
    //step-3: display the updated life count
    //currentLifeElement.innerText = newLife ; 
   }
}
document.addEventListener('keyup', handKeyboardKeyUpEvent );




