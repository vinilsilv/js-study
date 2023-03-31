const someComplexValue = (() => {
  const a = 10;
  const b = 20;

  if (a > b) {
      return a * b;
  }

  console.log(a / b)
})();
