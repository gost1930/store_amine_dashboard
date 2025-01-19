import { IoHomeOutline } from "react-icons/io5";

interface Link {
    name: string;
    path: string;
    icon: JSX.Element;
    subLinks?: { name: string; path: string }[];
  }

export  const links: Link[] = [
    { name: "الرئيسية", path: "/", icon: <IoHomeOutline />, subLinks: [] },
    {
      name: "صمم متجرك",
      path: "/",
      icon: <IoHomeOutline />,
      subLinks: [
        { name: "الشعار", path: "/options" },
        { name: "القالب", path: "/plans" },
        { name: "الصفحة الرئيسية", path: "/plans" },
        { name: "معلومات الإتصال", path: "/plans" },
        { name: "الأسئلة الشائعة", path: "/plans" },
        { name: "حول المتجر", path: "/plans" },
        
      ],
    },
    { name: "الطلبات", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"كل الطلبات" , path:""},
        {name:"الطلبات الجديدة" , path:""},
        {name:"الطلبات المتروكة" , path:""},
      ] },
    { name: "المنتجات", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"الكل" , path:""},
        {name:"إضافة منتج" , path:""},
        {name:"مدير المخزون" , path:""},
      ] },
    { name: "التصنيفات", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"الكل" , path:""},
        {name:"إضافة تصنيف" , path:""},
      ] },
    { name: "التوصيل", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"ولايات التوصيل" , path:""},
        {name:"إضافة ولاية" , path:""},
        {name:"شركات التوصيل" , path:""},
      ] },
    { name: "آراء الزبائن", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [] },
    { name: "الدومين", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [] },
    { name: "الإحصائيات", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"عام" , path:""},
        {name:"المنتجات" , path:""},
        {name:"الزيارات" , path:""},
      ] },
    { name: "عمال المتجر", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"الكل" , path:""},
        {name:"إضافة عامل" , path:""},
      ] },
    { name: "الإضافات", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"الكل" , path:""},
        {name:"إضافة عامل" , path:""},
      ] },
    { name: "الزبائن المشبوهين", 
      path: "/orders", 
      icon: <IoHomeOutline />, 
      subLinks: [
        {name:"الكل" , path:""},
        {name:"إضافة عامل" , path:""},
      ] },
  ];

export  const settingsAndPayment: Link[] = [
    { name: "الاعدادات", path: "/", icon: <IoHomeOutline />, subLinks: [] },
    { name: "الدفع", path: "/", icon: <IoHomeOutline />, subLinks: [] },
  ];