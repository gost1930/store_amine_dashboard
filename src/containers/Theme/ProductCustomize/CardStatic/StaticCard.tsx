import Card from "./Card";
import { Button } from "../../../../components";

const StaticCard = () => {
  const cardClasses = [
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
      parentClassName: "overflow-hidden hover:shadow-xl",
      parentImageClasseName: "overflow-hidden",
      imageClassName: "hover:scale-110 transform",
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
      parentClassName: "",
      parentImageClasseName: "",
      imageClassName: "hover:scale-110 transform",
      discountClassName: "",
      btnClassName: "",
    },
  ];
  return (
    <section>
      <Button text="حفظ" className="mt-10 w-32 h-fit bg-primary" />
      <div className="w-full h-fit p-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {cardClasses.map((c, index) => (
          <div>
            <div>
              <input type="radio" name="card" id={c.name} className="ml-2" />
              <label htmlFor={c.name}>{c.name}</label>
            </div>
            <Card key={index} {...c} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticCard;
