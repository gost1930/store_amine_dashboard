import { Outlet } from "react-router-dom";
import { PgesTitle } from "../components";
// containers
const Reviews = () => {
    return (
        <div className="w-full h-fit">
            {/* title */}
            <PgesTitle title="إدارة " title2="آراء الزبائن" />

            <div className="w-full h-fit my-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Reviews;