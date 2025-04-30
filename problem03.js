function checkDigitsInName(name) {
  // console.log(name);

  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    if (name.includes(0)) {
      return true;
    } else if (name.includes(1)) {
      return true;
    } else if (name.includes(2)) {
      return true;
    } else if (name.includes(3)) {
      return true;
    } else if (name.includes(4)) {
      return true;
    } else if (name.includes(5)) {
      return true;
    } else if (name.includes(6)) {
      return true;
    } else if (name.includes(7)) {
      return true;
    } else if (name.includes(8)) {
      return true;
    } else if (name.includes(9)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkDigitsInName("tanvir"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName("elmu3"));
console.log(checkDigitsInName("name2024"));
console.log(checkDigitsInName(420));
console.log(checkDigitsInName([1, 2, 3]));
console.log(checkDigitsInName(true));
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName('n9yeem'));

