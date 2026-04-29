const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function computeTemp(event) {

    const currentValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            fahrenheitInput.value = (currentValue * 9 / 5 + 32).toFixed(2);
            kelvinInput.value = (currentValue + 273.15).toFixed(2);
            break;
        case 'fahrenheit':
            celsiusInput.value = ((currentValue - 32) * 5 / 9).toFixed(2);
            kelvinInput.value = (((currentValue - 32) * 5 / 9) + 273.15).toFixed(2);
            break;
        case 'kelvin':
            celsiusInput.value = (currentValue - 273.15).toFixed(2);
            fahrenheitInput.value = (((currentValue - 273.15) * 9 / 5) + 32).toFixed(2);
            break;
            default:
                break;  
    }

}

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});