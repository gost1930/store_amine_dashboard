interface ProductCardClassesICard {
  name: string;
  parentClassName: string;
  parentImageClasseName: string;
  imageClassName: string;
  discountClassName: string;
  btnClassName: string;
}

export const productCardClasses: ProductCardClassesICard[] = [
  {
    name: "عادي",
    parentClassName: "hover:shadow-lg",
    parentImageClasseName: "",
    imageClassName: "",
    discountClassName: "",
    btnClassName: "underline",
  },
  {
    name: "إفكت هوفر في الصورة",
    parentClassName: "overflow-hidden hover:shadow-xl group",
    parentImageClasseName: "overflow-hidden",
    imageClassName: "group-hover:scale-110 transform",
    discountClassName: "",
    btnClassName: "bg-black text-white hover:-translate-y-2",
  },
  {
    name: "إفكت هوفر في الزر",
    parentClassName: "group hover:shadow-2xl  overflow-hidden",
    parentImageClasseName: "",
    imageClassName: "",
    discountClassName: "",
    btnClassName:
      "translate-y-20 group-hover:translate-y-0 text-white bg-green-500",
  },
  {
    name: "إفكت هوفر الصورة ",
    parentClassName: "group hover:shadow-2xl",
    parentImageClasseName: "",
    imageClassName: "group-hover:scale-105 transform",
    discountClassName: "",
    btnClassName: "group-hover:bg-black group-hover:text-white",
  },
];

interface CategotyCardClasses {
  name: string;
  parentClassName?: string;
  parentImageClasseName?: string;
  hight?: string;
  imageClassName?: string;
  parentBtnClassName?: string;
  bgShadow?: boolean;
  btnClassName?: string;
}
export const categotyCardClasses: CategotyCardClasses[] = [
  {
    name: "عادي",
    parentClassName:
      "hover:shadow-lg relative group overflow-hidden rounded-lg",
    parentImageClasseName: "",
    hight: "h-full",
    imageClassName: "",
    parentBtnClassName: "absolute  group-hover:-translate-y-32 duration-300",
    btnClassName: "text-white text-xl z-10 group-hover:underline underline-offset-2",
    bgShadow: true,
  },
  {
    name: "إفكت هوفر في الصورة",
    parentClassName: "overflow-hidden group rounded-lg",
    parentImageClasseName: "overflow-hidden",
    imageClassName: "group-hover:scale-110 transform",
    btnClassName:
      "bg-black text-white group-hover:-translate-y-1 duration-200 px-14 py-2",
  },
  {
    name: "إفكت هوفر في الصورة",
    parentClassName: "overflow-hidden group",
    parentImageClasseName: "overflow-hidden rounded-full",
    imageClassName: "group-hover:scale-110 transform",
    btnClassName: "underline group-hover:-translate-y-2 duration-200",
  },
];
