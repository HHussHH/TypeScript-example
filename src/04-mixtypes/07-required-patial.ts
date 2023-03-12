export {};

interface Todo {
  id: string;
  title: string;
  desc: string;
  completed?: boolean;
  createdAt: number;
}

type ReadOnlyTodo = Readonly<Todo>;

type PartialTodo = Partial<Todo>;
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

type RequiredTodo = Required<Todo>;

// type LanguageLevel = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

// type Developer = {
//   html: LanguageLevel,
//   css: LanguageLevel,
//   javascript?: LanguageLevel,
//   typescript?: LanguageLevel,
// }

// type FrontendDeveloper = ???;
