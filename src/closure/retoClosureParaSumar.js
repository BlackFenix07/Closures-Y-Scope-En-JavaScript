function sumWithClosure(firstNumber = 0) {
  return function (secondNumber = 0) {
    return firstNumber + secondNumber;
  };
}
console.log(sumWithClosure(7)(3));