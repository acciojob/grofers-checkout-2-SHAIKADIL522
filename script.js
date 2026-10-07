//your code here
const table = document.querySelector('table');
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// read prices from the DOM at run time, so edited values work too
let total = 0;
prices.forEach((cell) => {
  const value = parseFloat(cell.textContent);
  if (!Number.isNaN(value)) total += value;
});

// new row with a single cell spanning both columns
const row = document.createElement('tr');
const cell = document.createElement('td');
cell.setAttribute('data-ns-test', 'grandTotal');
cell.colSpan = 2;
cell.textContent = total;

row.appendChild(cell);
table.tBodies[0].appendChild(row);