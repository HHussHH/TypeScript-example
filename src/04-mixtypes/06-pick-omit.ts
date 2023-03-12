export {};
type WellKnownBrands =
  | "apple"
  | "lenovo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//   apple: "apple",
// };

interface Todo {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  createdAt: number;
}

type SimpleTodo = Pick<Todo, "id" | "title" | "completed">;

const todo1: SimpleTodo = {
  id: "sad",
  title: "Learn TS",
  completed: false,
};

type SimpleTodo2 = Omit<Todo, "desc" | "createdAt">;

type NewTodo = Pick<Todo, "title" | "desc">;

type Regions = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

type CountriesByRegion = any;

type Country = {
  name: string;
  region: string;
  population: number;
  flag: string;
  capital: string;
  currencies: string[];
  languages: string[];
};

type CountryCardProps = any;
