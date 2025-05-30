// component
import { SearchBar } from "../../../../components";
// var
import { sidBarLink } from "../../../../utils/Variables/pagesLinks";
// framer-motion
import { motion } from "framer-motion";
// image
import facebook from "../../../../assets/facebook.png"

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
    // colors
    colors: any;
}

const SlidBar: React.FC<Props> = ({
    // show any sec or link
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
    sclMediaSection = true,
    // colors state
    colors

}) => {
    const pageVisibility = {
        mainPage,
        categoriesPage,
        cartPage,
        orderStatusPage,
        deliveryPricePage,
        contactPage
    };

    // Simplified show function to check if page should be displayed
    interface Link {
        name: 'mainPage' | 'categoriesPage' | 'cartPage' | 'orderStatusPage' | 'deliveryPricePage' | 'contactPage';
        title: string;
    }

    const showLink = (link: Link, index: number) => {
        if (pageVisibility[link.name]) {
            return (
                <motion.div initial={{ x: 0 }} whileHover={{ x: -2 }} key={index} className="py-3 px-1 w-full rounded-lg hover:bg-gray-100 cursor-pointer"
                    style={{ backgroundColor: colors.linkBgColor }}
                >
                    <h1 className={`${index === 0 ? "text-black" : "text-gray-500"} font-semibold`}>{link.title}</h1>
                </motion.div>
            );
        }
        return null;
    };

    return (
        <section className="w-96 h-fit min-h-screen border p-2"
            style={{ backgroundColor: colors.parentBgColor }}
        >
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
                {/* website name */}
                {name && <h1 className="text-2xl " style={{ color: colors.nameColor || "black" }}>أمين ستور</h1>}
                {/* search bar */}
                {searchBar && <div className="w-full h-16 relative"><SearchBar /></div>}
                {/* links */}
                {sidBarLink.map((t, index) => showLink(t as any, index))}
            </div>
            {/* divider */}
            {categoriesSection && <div className="h-[1px] ml-2 w-full bg-zinc-300 rounded-full" style={{ backgroundColor: colors.dividerColor }}></div>}
            <div className="grid grid-cols-3 gap-4 my-2">
                {/* categories */}
                {categoriesSection && (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="grid place-content-center py-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                            style={{ backgroundColor: colors.categoryBgColor }}
                        >
                            <h1 style={{ color: colors.categoryTextColor }}>التصنيف 1</h1>
                        </div>
                    ))
                )}
            </div>
            {/* divider */}
            {sclMediaSection && <div className="h-[1px] ml-2 w-full bg-zinc-300 rounded-full" style={{ backgroundColor: colors.dividerColor }}></div>}
            {/* scl media */}
            <div className="flex items-center justify-center gap-x-3 p-2">
                {
                    sclMediaSection && (
                        Array.from({ length: 4 }).map((_, id) => (
                            <div className="w-full" key={id}>
                                <img alt="facebook" className="w-16" src={facebook} />
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    );
};

export default SlidBar;
