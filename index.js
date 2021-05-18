// a ref to the form tag in html
const form = document.querySelector('form');

// an event listener that listen for user input in the text field //

const convertFahrToCelsius = (input)=>{
    let fahrSub = input - 32;
    let fahrMul = fahrSub * 5/9
    return fahrMul; 
    
};

let result = 
convertFahrToCelsius(0);

console.log(result);

form.addEventListener('submit', (evt)=>{
    // stops the form from refreshing/reloading on click of submit button//
    evt.preventDefault();
    console.log('coming out strong');
    // let result = form.value;
    // console.log(`the type input is ${result}`);
});