function factorial(n) {
  if (n < 0 ) {
    return;
  }
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}