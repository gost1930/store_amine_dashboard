// component
import { SearchBar } from "../../../components";
// var
import { sidBarLink } from "../../../utils/Variables/pagesLinks"
// framer-motion
import { motion } from "framer-motion"
interface Props {
    logo: boolean;
    name: boolean;
    searchBar: boolean;
    mainPage: boolean;
    categoriesPage: boolean;
    cartPage: boolean;
    orderStatusPage: boolean;
    deliveryPricePage: boolean;
    contactPage: boolean;
    categoriesSection: boolean;
    sclMediaSection: boolean;
}
const SlidBar: React.FC<Props> = ({
    logo = true,
    name = true,
    searchBar = true,
    mainPage = true,
    categoriesPage = true,
    cartPage = true,
    orderStatusPage = true,
    deliveryPricePage = true,
    contactPage = true,
    categoriesSection = true,
    sclMediaSection = true }) => {
    return (
        <section className="w-96 h-fit min-h-screen border p-2">
            <div className="flex flex-col items-center justify-start gap-y-4 my-10">
                {/* logo */}
                {logo && (
                    <div className="flex gap-x-2 items-center ">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                            alt="logo"
                            className="w-14 h-14 rounded-lg"
                        />
                    </div>
                )}
                {/* web site name */}
                {name && <h1 className="text-2xl  text-zinc-800">أمين ستور</h1>}
                {/* search bar */}
                {searchBar && <div className="w-full h-16 relative"><SearchBar /></div>}
                {/* links */}
                {
                    sidBarLink.map((t, index) => (
                        <motion.div key={index} className="py-3 px-1 w-full rounded-lg hover:bg-gray-100">
                            <h1 className={`${index === 0 ? "text-black" : " text-gray-500"} font-semibold`}>{t.title}</h1>
                        </motion.div>
                    ))
                }
            </div>
            <div className="felx flex-col gap-y-2">
            </div>
        </section>
    );
};

export default SlidBar;
