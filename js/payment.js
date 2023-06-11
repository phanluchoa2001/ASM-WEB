const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const incrementBtn = document.querySelectorAll("#increment");
const quantityEle = document.querySelectorAll("#quantity");
const priceEle = document.querySelectorAll("#price");
const subtotalEle = document.querySelector("#subtotall");
const taxEle = document.querySelector("#taxx");
const totalEle = document.querySelector("#totall");

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent);

    increment++;

    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent);

    decrement <= 1 ? 1 : decrement--;

    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

const totalCalc = function () {
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  for (let i = 0; i < quantityEle.length; i++) {
    subtotal +=
      Number(quantityEle[i].textContent) * Number(priceEle[i].textContent);
  }

  subtotalEle.textContent = subtotal.toFixed(2);

  totalTax = subtotal * tax;

  taxEle.textContent = totalTax.toFixed(2);

  total = subtotal + totalTax;

  totalEle.textContent = total.toFixed(2);

  payAmountBtn.textContent = total.toFixed(2);
};
