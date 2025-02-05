import { Outlet } from "react-router-dom";
import { PgesTitle } from "../components";
// containers
const Store = () => {
  return (
    <div className="w-full h-fit">
      {/* title */}
      <PgesTitle title="صمِّم " title2="متجرك" />

      <div className="w-full h-fit my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Store;