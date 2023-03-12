// interface Product {
//   price: number | string;
//   isNew: boolean;
//   isSale: boolean;
//   title: string;
// }

// interface Vehicle {
//   wheels: number;
//   year: number;
//   brand: string;
// }

// interface Car extends Product, Vehicle {
//   wheels: number;
//   year: number;
//   brand: string;
// }

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Cars = Product &
  Vehicle & {
    type: string;
    model: string;
  };
