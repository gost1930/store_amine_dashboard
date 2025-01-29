import {Card} from "../../../../../components";
import { Button } from "../../../../../components";
import { productCardClasses } from "../../../../../utils/Variables/classes";

const StaticCard = () => {
  return (
    <section>
      <Button text="حفظ" className="mt-10 w-32 h-fit bg-primary" />
      <div className="w-full h-fit p-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {productCardClasses.map((card, index) => (
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
