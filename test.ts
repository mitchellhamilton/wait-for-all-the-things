import test from "ava";
import { Waiter } from ".";

let wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));

test("it works", async t => {
  let waiter = new Waiter(2);

  let ops: Array<string> = [];

  await Promise.all([
    (async () => {
      ops.push("first called");
      await wait(10);
      ops.push("first done waiting");
      waiter.done();
      await waiter;
      ops.push("first waiter resolved");
    })(),
    (async () => {
      ops.push("second called");
      await wait(5);
      ops.push("second done waiting");
      waiter.done();
      await waiter;
      ops.push("second waiter resolved");
    })()
  ]);

  t.deepEqual(ops, [
    "first called",
    "second called",
    "second done waiting",
    "first done waiting",
    "second waiter resolved",
    "first waiter resolved"
  ]);
});
