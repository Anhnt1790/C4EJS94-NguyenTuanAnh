let weight = Number(prompt('Your weight in kg'));
let height = Number(prompt('Your height in cm'));
height = height/100;
bmi = weight/(height*height)

if(bmi<16){
    alert(`Your BMI is ${bmi}`);
    alert('You are Severely underweight');
}else if(bmi<18.5){
    alert(`Your BMI is ${bmi}`);
    alert('You are Underweight');
}else if(bmi<25){
    alert(`Your BMI is ${bmi}`);
    alert('You are Normal');
}else if(bmi<30){
    alert(`Your BMI is ${bmi}`);
    alert('You are Overweight');
}else{
    alert(`Your BMI is ${bmi}`);
    alert('You are Obese');
}
