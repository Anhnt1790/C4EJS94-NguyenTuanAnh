// async function load(){
//     const conn = await fetch('https://anapioficeandfire.com/api/characters/583');
//     const data = await conn.json();
//     return data
// }
// let a = load ();
// console.log(a)


// function wait(ms) {
//     return new Promise(r => setTimeout(r, ms))
// }
// function main() {
//     console.log('ONE');
//     wait(2000);
//     console.log('TWO');
// }
// main();



let myPromise = new Promise(function(resolve, reject){
    reject();
})

myPromise.then(
    function(success) {
        console.log("Success");
        // code when Promise resolve
    },

    function(error) {
        console.log("Error");
        // code when Promise reject
    }
)