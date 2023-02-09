import { isEven } from "@nx-lock-affected/is-even";

export function isOdd(x: number): boolean {
  return !isEven(x);
}
