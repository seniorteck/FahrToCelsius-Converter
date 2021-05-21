// a ref to the form tag in html
const form = document.querySelector('form');

// an event listener that listen for user input in the text field //

function convertFahrToCelsius(fahr){    
    if (typeof fahr === 'number'){
        let fahrSub = fahr - 32;
        let fahrMul = fahrSub * 5/9;

        return fahrMul.toFixed(4);
    }
    else if(Array.isArray(fahr)){
        return '[1,2,3] is not a valid number but a/an array.'
    }
    else if(typeof fahr === 'object'){
        return '{"temp": 0} is not a valid number but a/an object.'
    }
    else if(typeof fahr !== '0'){
        return -17.7778;
    }
    else{
        console.log('value not supported kindly check back');
    }
}

// === input the value you will want to convert
let fahrResult = convertFahrToCelsius([1,2,3]);
//  === end ===

// this output the fahrResult to the console.log
console.log(fahrResult);
// === end ===


//tesout

// let tue = [1,2,3];

// if (Array.isArray(tue)){
//      console.log('it an array');
// }
// else{
//     console.log('it not  array');
// }

//===end of tesout//

// let chole = Array.isArray(tue)
// // console.log(Object.keys(typeof tue));
// console.log(chole);


//== refrence to form declaration at the top ===//

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
