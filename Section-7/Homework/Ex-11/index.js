let upperBtn = document.getElementById('upperBtn');
let nameInput = document.getElementById('userName');
let results = document.getElementById('result')


console.log(upperBtn);

upperBtn.addEventListener('click', () => {
    console.log('Upper it');
})


console.log(nameInput);

upperBtn.addEventListener('click', () => {
    let userInput = nameInput.value;
    console.log('Upper it!!! Just clicked');
    console.log("User's name: " + userInput);
})


