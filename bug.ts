function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); // This will compile without error in TypeScript
console.log(result); // Outputs: 1020