import { Outlet } from "react-router-dom";
import { PgesTitle } from "../components";
// containers
const Orders = () => {
    return (
        <div className="w-full h-fit">
            {/* title */}
            <PgesTitle title="إدارة  " title2="الطلبات" />

            <section className="w-full h-fit my-5">
                <Outlet />
            </section>
        </div>
    );
};

export default Orders;