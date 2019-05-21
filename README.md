# wait-for-all-the-things

Have you been doing some asynchronous work and wanted to wait until you've done an operation on a certain number of items without having to use `Promise.all` and return something and then continue things in another `Promise.all`? This package might help you!

```jsx
import { createWaiter } from "wait-for-all-the-things";

(async () => {
  let myThings = ["my-first-thing", "my-second-thing"];
  let waiter = createWaiter(myThings.length);

  await Promise.all(async oneOfTheThings => {
    await doAThing(oneOfTheThings);

    waiter.add();

    await waiter;

    doMoreThingsKnowingThatAllOfTheThingsPriorAreDone();
  });
})();
```
