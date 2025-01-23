import { useState } from "react";
import { PageTile } from "../../../components";
import DInamiqueCard from "./DInamiqueCard/DInamiqueCard";
import StaticCard from "./CardStatic/StaticCard";

const ProductCustomize = () => {
  const [choose, setChoose] = useState<string>("dinamiqe");
  const handleChange = (b: any) => setChoose(b);
  
  interface Btn {
    name: string;
    value: string;
  }
  const btn:Btn[] = [
    {name:"dinamiqe", value: "قم بتخصيص البطاقة بنفسك😁" },
    {name:"static", value: "قم بتخصيص البطاقة بنفسك😁" },
  ]

  return (
    <div className="w-full h-fit mt-5 ml-5">
      <PageTile title="تخصيص بطاقة المنتجات بالشكل الذي تريده" />

      {/* قسم التحكم */}
      <section className="w-full p-4 mb-5 rounded-lg">
        <h2 className="text-lg font-bold mb-4">تحكم بالخصائص</h2>
      </section>
      {/* btn */}
      <div className="flex gap-x-4">
        {btn.map((b, index) => (
          <div
            key={index}
            className=" cursor-pointer px-3 py-1 bg-green-500 text-white rounded-b-lg hover:scale-110 duration-300"
            onClick={() => handleChange(b.name)}
          >
            {b.value}
          </div>
        ))}
      </div>

      {/* البطاقة */}
      {
        choose === "dinamiqe" ? <DInamiqueCard /> : <StaticCard />
      }
    </div>
  );
};

export default ProductCustomize;
