import DInamiqueCard from "./DInamiqueCard/DInamiqueCard";
import StaticCard from "./CardStatic/StaticCard";
import { btn } from "./staticData";
import CardMainContainer from "../CardMainContainer";
const ProductCustomize = () => {
  return (
    <CardMainContainer
      pageTitle="تخصيص بطاقة المنتجات بالشكل الذي تريده"
      subPageTitle="تحكم بالخصائص"
      btn={btn}
      dinamiqeCard={<DInamiqueCard />}
      staticCard={<StaticCard />}
    />
  );
};

export default ProductCustomize;
