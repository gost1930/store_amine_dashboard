import { useState } from "react";
import { PageTile, CheckBox, Button } from "../../../../components";
import NavBar from "./NavBar";

type Styles = {
  btn: boolean;
  logo: boolean;
  name: boolean;
  searshBar: boolean;
  cardPrice: boolean;
  price: boolean;
};

const NavBarCustomize = () => {
  const [styles, setStyles] = useState<Styles>({
    btn: true,
    logo: true,
    name: true,
    searshBar: true,
    cardPrice: true,
    price: true,
  });

  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setStyles((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const setDefaultStyles = () => {
    setStyles({
      btn: true,
      logo: true,
      name: true,
      searshBar: true,
      cardPrice: true,
      price: true,
    })
  }

  const changes: { label: string; name: keyof Styles }[] = [
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
                <CheckBox name={c.name} id={c.name} checked={styles[c.name]} onChange={handleChange} />
                <label htmlFor={c.name} className="tgl-btn"></label>
              </div>
              <label htmlFor={c.name} className="tgl-btn">
                {c.label}
              </label>
            </div>
          ))}
        </form>
      </div>
      <Button text="إعادة تعيين" className="mt-10 w-32 h-fit bg-black" onClick={setDefaultStyles} />
    </section>
  );
};

export default NavBarCustomize;