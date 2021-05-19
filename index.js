// a ref to the form tag in html
const form = document.querySelector('form');

// an event listener that listen for user input in the text field //

const convertFahrToCelsius = (input)=>{
    let fahrSub = input - 32;
    let fahrMul = fahrSub * 5/9
    return fahrMul; 
};

let result = 
convertFahrToCelsius('string');

console.log(typeof result, `${result}`);

form.addEventListener('submit', (evt)=>{
    // stops the form from refreshing/reloading on click of submit button//
    evt.preventDefault();

    let result = convertFahrToCelsius(form.userInput.value);

    if (form.userInput.value.innerText == "0"){
        console.log('yeah i found a string')
    }
    else{
        console.log('nothing found');
    }
    // print the userInput to the console.log//
    console.log(typeof result, `${result}`);

    // ouput the result to the outPut field
    form.outPut.value = result;
    
});

// const unitChecker = ()=>{
    
// };
