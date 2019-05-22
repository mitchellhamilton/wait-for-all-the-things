export class Waiter<Value> extends Promise<Value> {
  constructor(count: number) {
    let current = 0;
    let resolve: () => void;

    super(_resolve => {
      resolve = _resolve;
    });
    this.done = () => {
      current++;
      if (current === count) {
        resolve();
      }
    };
  }
  done: () => void;
}
