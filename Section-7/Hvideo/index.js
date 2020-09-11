// function say(){
//     console.log('hello world');
// }
// say();
// say();
// say();

// let myNumber = [];

// let nhapSo1 = prompt('Nhap so bat ki');

// if(nhapSo1 % 2 == 0) {
//     alert(`${nhapSo1} la so chan`);
// }else{
//     alert(`${nhapSo1} la so le`);
// }

// myNumber.push(nhapSo1);
// console.log(myNumber);

// let nhapSo2 = prompt('Nhap so bat ki');

// if(nhapSo2 % 2 == 0) {
//     alert(`${nhapSo2} la so chan`);
// }else{
//     alert(`${nhapSo2} la so le`);
// }

// myNumber.push(nhapSo2);
// console.log(myNumber);
// let myNumber = [];

// function checkNumber(x){
//     if (x % 2 == 0){
//         console.log('So chan');
//     }else{
//         console.log('So le');
//     }
//     myNumber.push(x);
// }

// let myNumber1 = prompt('Nhapso');
// checkNumber(myNumber1);

// let myNumber2 = prompt('Nhap so');
// checkNumber(myNumber2);

// let myNumber3 = prompt('Nhap so');
// checkNumber(myNumber3);

// console.log(myNumber);

// function tinhTong() {
//     let a = Number(prompt('Nhap so thu 1'));
//     let b = Number(prompt('Nhap so thu 2'));
//     let tong = a + b
//     console.log(tong);
// }
// tinhTong();

// function tong(a,b){
//     return a+b;
// }

// console.log('tong cua a va b la',tong(100,2000));


// let tinhTong = tong(100,200);
// console.log(`tong la ${tinhTong}`)
let str = "$80% percent of $life is to show $up";
function remove_dollar_sign() {
    return str.replace('$', '');
    console.log
}
remove_dollar_sign();