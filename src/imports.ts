// Works - outputs `import { someFunction } from "./somefile.mjs"`
import { someFunction } from "./somefile.ts";

// Works - outputs `import { someOtherFunction as someOtherFn } from "./somefile.mjs"`
import { someOtherFunction as someOtherFn } from "./somefile.ts";

// Does not work - outputs `import * as someModule from "./somefile.ts"`
import * as someModule from "./somefile.ts";

// Does not work - outputs `import defaultFunction from "./somefile.ts"`
import defaultFunction from "./somefile.ts";

// Does not work - outputs `import defFn, { someFunction as someFn } from "./somefile.ts"`
import defFn, { someFunction as someFn } from "./somefile.ts";

// Does not work - outputs `import defFn2, * as someModuleRest from "./somefile.ts"`
import defFn2, * as someModuleRest from "./somefile.ts";

export function callNamespace() {
  someModule.someFunction(0);
  someModule.someOtherFunction("");
}

export function callNamed(bool: boolean) {
  someFunction(bool ? 1 : 0);
  someOtherFn("");
}

export function callDefault() {
  defaultFunction(false);
}

export function callMixed() {
  defFn(true);
  someFn(0);
}

export function callMixedStar() {
  defFn2(false);
  someModuleRest.someOtherFunction("");
}
