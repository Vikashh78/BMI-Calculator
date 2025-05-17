const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    const info = document.querySelector('.display-guide')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter a valid height`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter a valid weight`
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        // show result
        result.innerHTML = `<span>${BMI}</span>`

        if(BMI < 18.6) {
            info.innerHTML = `Under weight`
        }
        if(BMI >= 18.6 && BMI <= 24.9) {
            info.innerHTML = `BMI is Normal`
        }
        if(BMI > 24.9) {
            info.innerHTML = `Over weight`
        }
    }
});