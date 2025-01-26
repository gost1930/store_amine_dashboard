import { IoHomeOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { TbCategoryPlus } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuChartSpline } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LiaUserSecretSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";

interface Link {
  name: string;
  path: string;
  icon: JSX.Element;
  subLinks?: { name: string; path: string }[];
}

export const links: Link[] = [
  { name: "الرئيسية", path: "/", icon: <IoHomeOutline />, subLinks: [] },
  {
    name: "صمم متجرك",
    path: "/store",
    icon: <IoStorefrontOutline />,
    subLinks: [
      { name: "الشعار", path: "/store/logo" },
      { name: "القالب", path: "/store/theme" },
      { name: "الصفحة الرئيسية", path: "/store/main_page" },
      { name: "معلومات الإتصال", path: "/store/cotact_page" },
      { name: "الأسئلة الشائعة", path: "/store/a" },
      { name: "حول المتجر", path: "/store/as" },
    ],
  },
  {
    name: "الطلبات",
    path: "/orders",
    icon: <BsBoxSeam />,
    subLinks: [
      { name: "كل الطلبات", path: "" },
      { name: "الطلبات الجديدة", path: "" },
      { name: "الطلبات المتروكة", path: "" },
    ],
  },
  {
    name: "المنتجات",
    path: "/orders",
    icon: <AiOutlineProduct />,
    subLinks: [
      { name: "الكل", path: "" },
      { name: "إضافة منتج", path: "" },
      { name: "مدير المخزون", path: "" },
    ],
  },
  {
    name: "التصنيفات",
    path: "/orders",
    icon: <TbCategoryPlus />,
    subLinks: [
      { name: "الكل", path: "" },
      { name: "إضافة تصنيف", path: "" },
    ],
  },
  {
    name: "التوصيل",
    path: "/orders",
    icon: <BsTruck />,
    subLinks: [
      { name: "ولايات التوصيل", path: "" },
      { name: "إضافة ولاية", path: "" },
      { name: "شركات التوصيل", path: "" },
    ],
  },
  {
    name: "آراء الزبائن",
    path: "/orders",
    icon: <IoIosStarOutline />,
    subLinks: [],
  },
  { name: "الدومين", path: "/orders", icon: <FaEarthAmericas />, subLinks: [] },
  {
    name: "الإحصائيات",
    path: "/orders",
    icon: <LuChartSpline />,
    subLinks: [
      { name: "عام", path: "" },
      { name: "المنتجات", path: "" },
      { name: "الزيارات", path: "" },
    ],
  },
  {
    name: "عمال المتجر",
    path: "/orders",
    icon: <LuUsersRound />,
    subLinks: [
      { name: "الكل", path: "" },
      { name: "إضافة عامل", path: "" },
    ],
  },
  {
    name: "الإضافات",
    path: "/orders",
    icon: <IoExtensionPuzzleOutline />,
    subLinks: [
      { name: "الكل", path: "" },
      { name: "إضافة عامل", path: "" },
    ],
  },
  {
    name: "الزبائن المشبوهين",
    path: "/orders",
    icon: <LiaUserSecretSolid />,
    subLinks: [
      { name: "الكل", path: "" },
      { name: "إضافة عامل", path: "" },
    ],
  },
];

export const settingsAndPayment: Link[] = [
  { name: "الاعدادات", path: "/", icon: <IoSettingsOutline />, subLinks: [] },
  { name: "الدفع", path: "/", icon: <MdOutlinePayments />, subLinks: [] },
];
