// Init
// let person = {};
// console.log(person);

// let person = {
//     name:'Nam'
// };
// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 18,
// };
// console.log(person);

// //Read
// console.log(person.age);
// console.log(person['name']);
// const a = person['age'];
// console.log(a);

//Update
// person.name = 'Nguyen Phuong Nam';
// console.log(person['name']);
// console.log(person.name);

// person['age'] = 20;
// person.age++
// console.log(person.age)


//Create
// person.location = 'Ha Noi';
// console.log(person);
// person['location'] = 'Nam Dinh';
// console.log(person)

//Delete

// delete person.age;
// delete person['name'];
// console.log(person);

//Array of Object
// let person1 = {
//     name: 'Nam',
//     age: 18,
// };
// let person2 = {
//     name: 'Duc',
//     age: 24,
// };
// let personArr = [];

// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);

// console.log(personArr[0]);
// let p = personArr[0];
// console.log(p);
// console.log(p.name);
// console.log(personArr[0].name);
// let n = personArr[0].name;
// console.log(n);


// for(let i = 0; i< personArr.length;i++){
//     let p = personArr[i];
//     console.log(p);
//     console.log(p.age);
// }


//Object containing Array
let person = {
    name: 'Nam',
    age: 18,
    favs: ['Netflix', 'Cafe', 'Code'],
};
// console.log(person.favs[1]); 
let favs = person.favs;
console.log(favs);
for(let i = 0;i<favs.length;i++){
    console.log(favs[i])
}
favs.push('macbook');
console.log(favs);
console.log(person)