let movie1 = {
    name: 'Attack on titans',
    year: 2013,
    rate: 8.8,
};

let movie2 = {
    name: 'My boss my hero',
    year: 2006,
    rate: 8.2,
};

let movie3 = {
    name: 'Mind hunter',
    year: 2017,
    rate: 8.6,
};

let movie4 = {
    name: 'Unabomber',
    year: 2017,
    rate: 8.1,
};

let totalMovie = [];
totalMovie.push(movie1);
totalMovie.push(movie2);
totalMovie.push(movie3);
totalMovie.push(movie4);
for (let i = 0; i < totalMovie.length; i++) {
    console.log('-------------')
    console.log(totalMovie[i].name);
    console.log(`year : ${totalMovie[i].year}`)
    console.log(`rate : ${totalMovie[i].rate}`)

}
