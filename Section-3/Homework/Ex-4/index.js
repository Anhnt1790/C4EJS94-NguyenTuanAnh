console.log('Write a script to simulate a clothes shop, asking and performing certain tasks from users');
let yeuCau = prompt('Hi there, welcome to shop admin panel,what do you want (C,R,U,D)?');
let cuaHang = ['Jean', 'T-shirt', 'Sock'];
while (true) {

    for (let i = 0; i < cuaHang.length; i++) {
        console.log(cuaHang[i]);
    }

    {
        if (yeuCau == 'r') {
            alert(cuaHang)
        } else if (yeuCau == 'c') {
            let doMoi = prompt('Enter the name of the new item');
            cuaHang.push(doMoi);
            alert('Done');
        } else {
            alert('This command is not supported')
        }
        break;
    }
}