function BMIcalculator(weight, height) {
     let bmi = weight / (height * height);
     return bmi;
}

let weight = 70; // in kg
let height = 1.75; // in meters

let bmi = BMIcalculator(weight, height);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);

