class WaiterPromise<Value> extends Promise<Value> {
  done() {}
}

export let createWaiter = (count: number) => {
  let current = 0;
  let resolve: () => void;
  let promise = new WaiterPromise(_resolve => {
    resolve = _resolve;
  });
  promise.done = () => {
    current++;
    if (current === count) {
      resolve();
    }
  };
  return promise;
};
