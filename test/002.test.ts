import { test } from "bun:test";
import main from "@problems/002";
import { logRunningTime } from "./util";

test("test the problem 2", () => {
  logRunningTime(1, main(10)).toBeNumber();
  logRunningTime(2, main(8)).toStrictEqual(10);
  logRunningTime(3, main(10)).toStrictEqual(10);
  logRunningTime(4, main(34)).toStrictEqual(44);
  logRunningTime(5, main(60)).toStrictEqual(44);
  logRunningTime(6, main(1000)).toStrictEqual(798);
  logRunningTime(7, main(100000)).toStrictEqual(60696);
  logRunningTime(8, main(4000000)).toStrictEqual(4613732);
});
