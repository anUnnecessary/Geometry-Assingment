// Rhombus Calculation



const rhombusBtn = document.getElementById('rhombus-btn');
rhombusBtn.addEventListener('click', () => {
  const d1 = 16;
  const d2 = 8;
  const area = 0.5 * d1 * d2;
  alert(`The area of the rhombus is ${area} cm²`);
});

// Pentagon calculation


const pentagonBtn = document.getElementById('pentagon-btn');
pentagonBtn.addEventListener('click', () => {
  const p = 6;
  const b = 10;
  const area = 0.5 * p * b;
  alert(`The area of the pentagon is ${area} cm²`);
});



// Ellipse  calculation



const ellipseBtn = document.getElementById('ellipse-btn');
ellipseBtn.addEventListener('click', () => {
  const a = 10;
  const b = 4;
  const area = Math.PI * a * b;
  alert(`The area of the ellipse is ${area} cm²`);
});
