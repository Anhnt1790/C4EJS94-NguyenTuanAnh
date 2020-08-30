let human1 = {
    name: 'Duc',
    age: 18,
    location: 'Ha Noi',
};
let human2 = {
    name: 'Tuan',
    age: 20,
    location: 'HCM',
};

let human3 = {
    name: 'Duc',
    age: 18,
    location: 'Da Nang',
};
let totalArr = [];

totalArr.push(human1);
totalArr.push(human2);
totalArr.push(human3);
console.log(totalArr);

let p = totalArr[0].age;
p+=0.7;
console.log(p);