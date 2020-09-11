let h1 = document.getElementsByClassName('singer');
for (let i = 0; i < h1.length; i++) {
    console.log(h1[i]);
}

document.getElementsByClassName('singer')[1].remove();
for( let i = 0;i<h1.length;i++){
    console.log(h1[i])
}