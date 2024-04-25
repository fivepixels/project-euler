import { test } from "bun:test";
import main from "@problems/001";
import { logRunningTime } from "./util";

test("test the problem 1", () => {
  logRunningTime(1, main(10)).toBeNumber();
  logRunningTime(2, main(49)).toStrictEqual(543);
  logRunningTime(3, main(1000)).toStrictEqual(233168);
  logRunningTime(4, main(8456)).toStrictEqual(16687353);
  logRunningTime(5, main(19564)).toStrictEqual(89301183);
});
