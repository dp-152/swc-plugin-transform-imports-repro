export function someFunction(int: number) {
  return int * 2;
}

export function someOtherFunction(str: string) {
  return `Hello, ${str}`;
}

export default function defaultFunction(bool: boolean) {
  return bool ? "true" : "false";
}
