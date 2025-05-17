import { Outlet } from "react-router-dom";
import { PgesTitle } from "../components";
// containers
const Categoties = () => {
  return (
    <div className="w-full md:w-[90%] h-fit">
      {/* title */}
      <PgesTitle title="إدارة " title2="التصنيفات" />

      <div className="w-full h-fit my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Categoties;