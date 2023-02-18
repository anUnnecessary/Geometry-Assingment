// Triangle and Rectangle Calculation



const triangleBtn = document.getElementById('calculate-btn');
triangleBtn.addEventListener('click', calculateTriangleArea);

const rectangleBtn = document.getElementById('calculate-btn2');
rectangleBtn.addEventListener('click', calculateRectangleArea);


function calculateTriangleArea() {

  const base = document.getElementById('input-1').value;
  const height = document.getElementById('input-2').value;
  

  const area = 0.5 * base * height;
  

  alert(`The area of the triangle is ${area} square cm.`);
}

function calculateRectangleArea() {

  const width = document.getElementById('input-3').value;
  const height = document.getElementById('input-4').value;
  

  const area = width * height;
  

  alert(`The area of the rectangle is ${area} square cm.`);
}
