interface Btn {
  name: string;
  value: string;
}
export const btn: Btn[] = [
  { name: "dinamiqe", value: "قم بتخصيص البطاقة بنفسك😁" },
  { name: "static", value: "إختر تصميم بطاقة جاهزة لمنتجاتك 🤩" },
];


interface Link {
    name: string;
    path:string;
}

export const links: Link[] = [
    {name:"الألوان" , path:""},
    {name:"المنتج" , path:"product"},
    {name:"التصنيف" , path:"category"},
    {name:"شريط التنقل" , path:"nabbar"},
    {name:"القائمة" , path:"list"},
    {name:"شريط الإشعارات" , path:"notification"},
    {name:"صفحة الشكر" , path:"thankyou"},
];