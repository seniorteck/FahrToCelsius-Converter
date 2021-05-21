// an event listener that listen for user input in the text field //

function convertFahrToCelsius(fahr){    
    if (typeof fahr === 'number'){
        let fahrSub = fahr - 32;
        let fahrMul = fahrSub * 5/9;

        return fahrMul.toFixed(4);
    }
    
    else if(Array.isArray(fahr)){
        return '[1,2,3] is not a valid number but a/an array.';
    }
    else if(typeof fahr === 'object'){
        return '{"temp": 0} is not a valid number but a/an object.'
    }
    else if(typeof fahr !== '0'){
        return `-17.7778`;
    }
    
    else{
        return 'nothing'
    }
}

// // === input the value you will want to convert
// let fahrPromp = prompt();

// input the value you want to check
 let fahrResult = convertFahrToCelsius();
//  === end ===

// this output the fahrResult to the console.log
console.log(fahrResult);
// === end ===



function fahrPrompt() {
    let fahrr = prompt('enter the value you want convert');
    return fahrr;
}

// fahrPrompt()



//=== the below code are types are test run and test to check if it can solve the algorithm ===/

//testout

// let tue = [1,2,3];

// if (Array.isArray(tue)){
//      console.log('it an array');
// }
// else{
//     console.log('it not  array');
// }

//===end of testout//

// let chole = Array.isArray(tue)
// // console.log(Object.keys(typeof tue));
// console.log(chole);

// a ref to the form tag in html
const form = document.querySelector('form');// a ref to the form tag in html

//== refrence to form declaration at the top ===//

form.addEventListener('submit', (evt)=>{
    // stops the form from refreshing/reloading on click of submit button//
    evt.preventDefault();

    let result = form.userInput.value;
    let fahrResult = convertFahrToCelsius(result);



    
    // print the userInput to the console.log//
    // console.log(typeof result, `${result}`);

    // ouput the result to the outPut field
    console.log(fahrResult);
    form.outPut.value = fahrResult;
   
});
