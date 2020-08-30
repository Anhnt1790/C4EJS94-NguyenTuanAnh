let movie = {
    title: 'Hoa co may',
    rate: 8.8,
    year: 2013,
}
let update = prompt('What you want to update');
if (movie[update] == null || movie[update] == undefined) {
    alert(`${update} does not exist in our data,we will add new`);
    let data = prompt('Enter the new data');
    movie[update] = data;
    console.log(movie);
} else {
    alert('DONE');
}
// Tham khao bai NguyenVietLong
