console.log('C4EJS-Array-Update all Exercise');
console.log('-  Change all items of movies array into lowercase');
let movie = ['Chay an', 'Nguoi phan xu', 'Quynh bup be'];
for(let i = 0; i < movie.length; i++){
    movie[i] = movie[i].toLowerCase();
    console.log(movie[i]);
}