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
  return (
    <section>
      <Button text="حفظ" className="mt-10 w-32 h-fit bg-primary" />
      <div className="w-full h-fit p-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {cardClasses.map((card, index) => (
          <div>
            <div>
              <input type="radio" name="card" id={card.name} className="ml-2" />
              <label htmlFor={card.name}>{card.name}</label>
            </div>
            <Card key={index} {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticCard;
