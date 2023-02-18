// rectangle calculation

const widthInput = document.getElementById('input-3');
const heightInput = document.getElementById('input-4');
const calculateBtn = document.getElementById('calculate-btn2');

calculateBtn.addEventListener('click', function() {
    const width = widthInput.value;
    const height = heightInput.value;

    const area = width * height;

    alert(`The area of the rectangle is ${area} cm².`);
});
