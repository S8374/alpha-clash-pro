function hideElementById (elemenId){
    const GetId = document.getElementById(elemenId);
    GetId.classList.add('hidden');
}
function showElementById(elemenId){
    const Find = document.getElementById(elemenId);
    Find.classList.remove('hidden');
}
//----------->
function getAlphabet(){
    //get or create an alphabet array 
      
    const stringLatter = ' abcdefghijklmnopqrstuvwxyz';
    const strinSplit = stringLatter.split('');
    
      //get random index between 0-25
     const stringIndex = Math.random()*25;
     const RealNumber =Math.round(stringIndex);


     const all = strinSplit[RealNumber];
     return all ;
}

//----------------->

function setCollerInAlphabet(keywordS){
    const setColler = document.getElementById(keywordS);
    setColler.classList.add('bg-amber-400');

}

//--------->
function removeCollerInAlphabet(keywordS){
    const setColler = document.getElementById(keywordS);
    setColler.classList.remove('bg-amber-400');

}

//------------------->
function getElementByIdScore(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText ;
    const convertRealNumber = parseInt (elementValue);
    return convertRealNumber ;
}
//-------->
function setInnerText (elementet ,value){
    const element = document.getElementById (elementet);
    element.innerText = value
}

function getElementTextById (elemenId){
    const element = document.getElementById(elemenId);
    const text = element.innerText ;
    return text ;
}