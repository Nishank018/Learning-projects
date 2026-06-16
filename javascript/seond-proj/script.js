const form = document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault()


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `This is not valid height ${height}`
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `This is not valid weight ${height}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `BMI:${bmi}`

        if(bmi<18.6){
            result.innerHTML = `Your BMI is ${bmi}. You are Underweight.`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `Your BMI is ${bmi}. You are in the Normal Range.`;
        }
        else {
            result.innerHTML = `Your BMI is ${bmi}. You are Overweight.`;
        }


    }
})