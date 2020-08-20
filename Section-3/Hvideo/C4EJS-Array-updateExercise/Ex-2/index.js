console.log('Update a item at position i of the movies into movieTitle, i and movieTitle entered by users');
let movie = ['Chay an', 'Nguoi phan xu', 'Quynh bup be'];
let i = prompt('Vi tri nguoi dung yeu cau');
let item = prompt('Ten phim nguoi dung yeu cau');
movie[i] = item;
console.log([movie]);