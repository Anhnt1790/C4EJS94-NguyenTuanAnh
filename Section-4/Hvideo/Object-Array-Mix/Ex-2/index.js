let movie1 = {
    title: 'Chay An',
    year: 2019,
    rate: 8.8,
    characters: ['Duy', 'Duc', 'An'],
};

let movie2 = {
    title: 'Nguoi Phan Xu',
    year: 2019,
    rate: 8.6,
    characters: ['Anh', 'Em', 'Lan'],
};

let movie3 = {
    title: 'Hoa Co May',
    year: 2010,
    rate: 9.1,
    characters: ['Huy', 'Hiep', 'Tu'],
};

let totalMovie = [];

totalMovie.push(movie1);
totalMovie.push(movie2);
totalMovie.push(movie3);
console.log(totalMovie);

for (let i = 0; i < totalMovie.length; i++) {
    console.log('-------------');
    console.log(totalMovie[i].title);
    console.log(`year: ${totalMovie[i].year}`)
    console.log(`rate: ${totalMovie[i].rate}`)
    console.log(`cast: ${totalMovie[i].characters}`)
};