let word: string | null = null;

const num = 10;

if (num > 5) {
  word = "abc";
}

console.log(word!.toLocaleLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
}

function printName2(person?: Person) {
  const fullName: string = name!;
  console.log(person!.name);
}
