type PcBrand = {
  name: string;
  country: string;
  createAt: Date;
};

type WellKnownBrands =
  | "apple"
  | "lenovo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    country: "USA",
    createAt: new Date(),
    name: "Apple",
  },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.dell?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};
