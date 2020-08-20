console.log('C4EJS-Array-Delete Exercise');
console.log('-  Delete n item at position i from movies array, i and n entered by users');
let movie = ['Chay an', 'Nguoi phan xu', 'Quynh bup be'];
let i = prompt('Vi tri nguoi dung nhap');
let item = prompt('So luong phim nguoi dung nhap');
movie.splice(i, item);
console.log([movie]);
