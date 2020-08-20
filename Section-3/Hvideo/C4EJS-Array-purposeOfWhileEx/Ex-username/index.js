console.log('C4EJS-Array-While User name Exercise');
console.log('-   Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.');
while (true) {
    let n = prompt('Register a User name');
    if (n.length > 15) {
        alert('Your user name is too long');}
    else {
            alert('Good username')
        }
    }

