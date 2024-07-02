// Works - outputs `export * from ./somefile.mjs`
export * from "./somefile.ts";

// Works - outputs `export {someFunction} from "./somefile.mjs"`
export { someFunction } from "./somefile.ts";

// Does not work - outputs `export * as someModule from "./somefile.ts"`
export * as someModule from "./somefile.ts";
