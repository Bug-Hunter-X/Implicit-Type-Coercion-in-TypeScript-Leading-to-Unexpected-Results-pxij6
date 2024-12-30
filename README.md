# Implicit Type Coercion Bug in TypeScript

This repository demonstrates a subtle bug in TypeScript related to implicit type coercion.  The `add` function is intended to add two numbers, but due to TypeScript's flexibility, it allows the addition of a number and a string without throwing an error. This results in unexpected string concatenation instead of numerical addition.

The `bug.ts` file shows the problematic code.  The `bugSolution.ts` file provides a solution using type guards to enforce stricter type checking and prevent this issue.