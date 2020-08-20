console.log('C4EJS-Array-Delete Exercise');
console.log('- Delete 1 item at position i from movies array movies, i entered by users');
let movie = ['Chay an', 'Nguoi phan xu', 'Quynh bup be'];
let i = prompt('vi tri nguoi dung nhap');
movie.splice(i, 1);
console.log(movie);