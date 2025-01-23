import { btn } from "./staticData";
import CardMainContainer from "../CardMainContainer";

const CategoryCusomize = () => {
  return (
    <CardMainContainer
        pageTitle="تخصيص بطاقة الفئات بالشكل الذي تريده"
        subPageTitle="تحكم بالخصائص"
        btn={btn}
        dinamiqeCard={<h1>Dynamic Card</h1>}
        staticCard={<h1>Static Card</h1>}
    />
  )
}

export default CategoryCusomize;
