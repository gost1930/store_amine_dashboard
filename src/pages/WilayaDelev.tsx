import { Outlet } from "react-router-dom";
import { PgesTitle } from "../components";
// containers
const WilayaDelev = () => {
    return (
        <div className="w-full md:w-[90%] h-fit">
            {/* title */}
            <PgesTitle title="إدارة  " title2="الولايات والشركات" />

            <section className="w-full h-fit my-5">
                <Outlet />
            </section>
        </div>
    );
};

export default WilayaDelev;