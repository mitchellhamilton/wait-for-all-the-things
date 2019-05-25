declare class WaiterInterface extends Promise<void> {
  constructor(count: number);
  done(): void;
}

export let Waiter: WaiterInterface = class Waiter {
  constructor(count: number) {
    let current = 0;
    let resolve: () => void;
    let promise = new Promise(_resolve => {
      resolve = _resolve;
    });
    (promise as any).done = () => {
      current++;
      if (current === count) {
        resolve();
      }
    };
    return promise;
  }
} as any;
