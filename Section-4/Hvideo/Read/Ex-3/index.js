let movie = {
    title: 'Attack on titans',
}
let n = prompt('What do you want to know');
if (n == 'title' || n == undefined) {
    alert(movie[n]);
} else {
    alert(`${n} does not exist in our data `);
}
// console.log(movie[n]);