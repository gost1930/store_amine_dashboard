import { useState } from "react";
import { PageTile } from "../../components";

interface ICardMainContainer {
    pageTitle: string;
    subPageTitle: string;
    btn: { name: string; value: string }[];
    dinamiqeCard?: JSX.Element;
    staticCard: JSX.Element;
    }
const CardMainContainer: React.FC<ICardMainContainer> = ({pageTitle , subPageTitle , btn , dinamiqeCard , staticCard}) => {
  const [choose, setChoose] = useState<string>("static");
  const handleChange = (b: string) => setChoose(b);

  return (
    <div className="w-full h-fit mt-5 ml-5">
      <PageTile title={pageTitle} />

      {/* قسم التحكم */}
      <section className="w-full p-4 mb-5 rounded-lg">
        <h2 className="text-lg font-bold mb-4">{subPageTitle}</h2>
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
      {choose === "dinamiqe" ? dinamiqeCard : staticCard}
    </div>
  );
};

export default CardMainContainer;
