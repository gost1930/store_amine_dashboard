import { PgesTitle } from "../components";
// containers
import { Reviews as Rev } from "../containers";
const Reviews = () => {
    return (
        <div className="w-full md:w-[90%] h-fit">
            {/* title */}
            <PgesTitle title="آراء " title2=" الزبائن" />

            <div className="w-full h-fit my-5">
                <Rev />
            </div>
        </div>
    );
};

export default Reviews;