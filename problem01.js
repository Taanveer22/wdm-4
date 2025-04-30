function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "invalid input";
  } else if (expenses > income) {
    return "invalid input";
  }
  // console.log(income, expenses);
  let savings = income - expenses;
  let tax = savings * 0.2;
  return tax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
