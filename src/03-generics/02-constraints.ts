function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("abc");
len(["af"]);
len({ length: 5 });
len({ len: 12 });
len(123);
len(true);
