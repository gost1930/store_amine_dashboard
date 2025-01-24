import { btn } from "./staticData";
import CardMainContainer from "../CardMainContainer";
import StaticCard from "./CardStatic/StaticCard";
const CategoryCusomize = () => {
  return (
    <CardMainContainer
        pageTitle="تخصيص بطاقة الفئات بالشكل الذي تريده"
        subPageTitle="تحكم بالخصائص"
        btn={btn}
        // dinamiqeCard={<h1>Dynamic Card</h1>}
        staticCard={<StaticCard />}
    />
  )
}

export default CategoryCusomize;
