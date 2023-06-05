async function newQuote() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json();
    
    document.querySelector('#AdviceID').innerHTML = json.slip.id;
    document.querySelector('#quote').innerHTML = json.slip.advice;
}

document.querySelector('#btn').addEventListener('click', newQuote)