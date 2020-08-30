// let item = 'Bun';
// let item = 'Pho';
// let item = 'Com rang';


// let menu = [];
// console.log(menu);


// let menu = ['Chao ga'];
// console.log(menu);

//              0            1            2    => index
// let menu = ['Chao', 'Com', 'Burger', 'Bun'];

// console.log(menu);

// menu.push('Khoai tay chien');
// console.log(menu);

// let newItem = prompt("Enter new item");
// menu.push(newItem);
// console.log(menu);

// let i = 1;
// console.log(menu[i]);


// console.log(menu[1]);
// let i = 1;
// let item = 'Mien ngu sac';
// menu[i] = item;
// console.log(menu[i]);
// console.log(menu);

// menu[1] = 'Mien ngu sac';
// console.log(menu);

// menu.splice(0, 2);
// console.log(menu);

// for(let i = 0; i < menu.length; i++) {
//     menu[i] = menu[i].toLowerCase();
// } 

// let n = Number(prompt('Enter a number'));
// console.log(n);
// if (n) {
//     console.log('Is number');
// } else {
//     console.log('Is not number');
// }

// let n;
// while (true)
// {
//     n = Number(prompt('Enter a number'));
//     if (n) {
//         break;
//     }
// }
// console.log(n)

//Cread :
// menu.push('Thit tho');
// console.log(menu);

//Read:
// A-Truy cap 1 phan tu
// let mon1 = menu[0];
// console.log(mon1);
// console.log(menu[2]);
// let tenXe = ['Honda', 'Suzuki', 'Yamaha', 'Kawasaki', 'Ducati', 'Triumph'];
// console.log(tenXe);
// console.log(tenXe[4]);

// B-Truy cap tat ca phan tu
// for (i = 0; i < tenXe.length; i++) {
//     console.log(i);
//     console.log(tenXe[i]);
// }

//Update
// tenXe[0]= 'SH';
// console.log(tenXe);

// let ten = ['Ronaldo', 'Messi', 'Neymar'];
// alert(ten);
// let cauHoi = prompt('Co muon nhap thay doi ten cau thu khong bang cach nhap Y hoac N');
// while (true) {
//     if (cauHoi == 'Y') {
//         let vitri = prompt('Vi tri cau thu muon thay doi ten');
//         // let tenMoi = prompt('Ten cau thu moi');
//         if (vitri == 0) {
//             var tenMoi = prompt('Ten cau thu moi');
//             ten[0] = tenMoi;
//             alert(ten);
//             break;
//         }else if(vitri == 1){
//             ten[1] = tenMoi;
//             alert(ten);
//             break;
//         }else if(vitri == 2){
//             ten[2] = tenMoi;
//             alert(ten);
//             break;
//         }
//     } else if (cauHoi = 'N') {
//         alert('Good Bye');
//         break;
//     }
// }

// let cauHoi = prompt('Nguoi dung co muon xoa ten cau thu khong bang cach nhap Y hoac N');
// if (cauHoi == 'Y') {
//     let vitri = prompt('Vi tri nguoi dung muon xoa');
//     ten.splice(vitri, 1);
//     alert(ten);
// } else if (cauHoi == 'N') {
//     alert('Good Bye');
// }