import { expect } from "bun:test";
import type { Matchers } from "bun:test";

export function logRunningTime<T>(indexNum: number, actual: T): Matchers<T> {
  const start = performance.now();
  const expected = expect<T>(actual);
  const end = performance.now();

  console.log(
    `INDEX#${indexNum.toString().padStart(3, "0")}\t|\t${end - start}ms`,
  );

  return expected;
}
