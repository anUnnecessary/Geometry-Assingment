// Parallelogram Calculation 



const button = document.getElementById("parallelogram-btn");
const dimensions = document.getElementById("dimensions");


button.addEventListener("click", () => {

    const b = parseFloat(dimensions.textContent.match(/b=(\d+)/)[1]); // Extract the value of b
    const h = parseFloat(dimensions.textContent.match(/h=(\d+)/)[1]); // Extract the value of h
    

    const area = b * h;
    

    alert(`The area of the parallelogram is ${area} square centimeters.`);
});
