function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Invalid input: Both parameters must be numbers.");
  }
}

let result1 = addSafe(10, 20); // Correct addition
console.log(result1); // Outputs: 30

try {
  let result2 = addSafe(10, "20"); //Throws an error
  console.log(result2);
} catch (error) {
  console.error(error); //Outputs an error message
}

