import { PgesTitle } from "../components";
// containers
import { Statistics as Stat } from "../containers";
const Statistics = () => {
    return (
        <div className="w-full md:w-[90%] h-fit">
            {/* title */}
            <PgesTitle title="الإحصائيات" title2="" />

            <div className="w-full h-fit my-5">
                <Stat />
            </div>
        </div>
    );
};

export default Statistics;