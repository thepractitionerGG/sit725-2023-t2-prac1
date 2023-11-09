function changeText() {
    // this should change the displlay text
    let textList = ['Stop Clicking',' stop Clicking please','i said stop','please stop','dont Click'];
    let randomNumber = getRandomNumber(0, textList.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max) {
    // generate a random number between a range
    return Math.floor(Math.random()*(max-min + 1)+min);
}