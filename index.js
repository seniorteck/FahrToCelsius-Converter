// a ref to the form tag in html
const form = document.querySelector('form');

// an event listener that listen for user input in the text field //

form.addEventListener('submit', (evt)=>{
    // stops the form from refreshing/reloading on click of submit button//
    evt.preventDefault();
    console.log('coming out strong');
    let result = form.value;
    console.log(result);
});