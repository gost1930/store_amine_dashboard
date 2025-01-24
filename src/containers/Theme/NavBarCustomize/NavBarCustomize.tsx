import { useState } from "react";
import { PageTile } from "../../../components";
import NavBar from "./NavBar";

const NavBarCustomize = () => {
  const [styles, setStyles] = useState({
    btn: true,
    logo: true,
    name: true,
    searshBar: true,
    cardPrice: true,
    price: true,
  });

  const handleChange = (e: any) => {
    const { name, checked } = e.target; // استخدام checked بدل value
    setStyles((prev) => ({
      ...prev,
      [name]: checked, // تحديث القيم بناءً على الحالة الجديدة
    }));
    console.log(styles);
  };

  const changes = [
    { label: "الزر", name: "btn" },
    { label: "الشعار", name: "logo" },
    { label: "الاسم", name: "name" },
    { label: "شريط البحث", name: "searshBar" },
    { label: "سعر البطاقة", name: "cardPrice" },
    { label: "السعر", name: "price" },
  ];

  return (
    <section className="w-full h-fit mt-5 ml-5">
      {/* page title */}
      <PageTile title="تخصيص النافبار" />
      <h2 className="text-base text-zinc-700 mb-4">
        قم بتخصيص شريط التنقل خاصتك بشكل رائع مع الأدوات التي نقدمها لك بشكل
        مجاني 🥰
      </h2>
      <div className="flex flex-wrap md:justify-between items-center">
        {/* navBar Ui */}
        <NavBar {...styles} />

        {/* customize navBar */}
        <form className="grid grid-cols-2 gap-4 my-5">
          {changes.map((c, i) => (
            <div className="flex items-center gap-3">
              <div dir="ltr" key={i} className="checkbox-wrapper-7">
                <input
                  type="checkbox"
                  name={c.name}
                  id={c.name}
                  checked={styles[c.name]}
                  onChange={handleChange}
                  className="tgl tgl-ios"
                />
                <label htmlFor={c.name} className="tgl-btn"></label>
              </div>
              <label htmlFor={c.name} className="tgl-btn">
                {c.label}
              </label>
            </div>
          ))}
        </form>
      </div>
    </section>
  );
};

export default NavBarCustomize;

/*
    <div class="checkbox-wrapper-7">
  <input class="" type="checkbox"/>
  <label class="tgl-btn" for="cb2-7">
</div>

<style>
  
</style>

*/
