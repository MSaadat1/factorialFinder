function factorFinder(n) {
  if (n < 0) return undefined; // it means the number should be positive because factorial is not for negative number
  let result = 1; // the initializer starts at 1 because * by 1 with any number does not change the value
  for(let i = 2; i <=n; i++){
    result *= i;
  } // for loop runs from 2 to n, it * the result by the current value of i, building factorial increment

  return result;
}

console.log(factorFinder(5));

// explaining the process
// result = 1
// result *= 2 > result = 2
// result *= 3 > result = 6
// result *= 4 > result = 24
// result *= 5 > result = 120
