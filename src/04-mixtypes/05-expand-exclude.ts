export {};
//===========================================================
type T00 = Exclude<"a" | "b" | "c", "a">;
type T01 = Exclude<"a" | "b" | "c", "a" | "b" | "d">;
type T02 = Exclude<string | number | (() => void), Function>;
//===========================================================
type T10 = Extract<"a" | "b" | "c", "a">;
type T11 = Extract<"a" | "b" | "c", "a" | "b" | "d">;
type T12 = Extract<string | number | (() => void), Function>;
//===========================================================
type T20 = NonNullable<string | never | undefined>;

// type Computer = {
//   brand: string;
//   year: number;
//   isAvailable: boolean;
// };

// type T0 = Extract<keyof Computer, string>;

// type Computer = {
//   brand: string;
//   year: number;
//   isAvailable: boolean;
// };

// type T1 = Exclude<keyof Computer, string>;
