import React from "react";
// icons
import { FaBarsStaggered } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
// component
import { SearchBar } from "../../../components";

interface INavBar {
  btn: boolean;
  logo: boolean;
  name: boolean;
  searshBar: boolean;
  cardPrice: boolean;
  price: boolean;
}

const NavBar: React.FC<INavBar> = ({
  btn,
  logo,
  name,
  searshBar,
  cardPrice,
  price,
}) => {
  return (
    <section className="w-full h-fit py-3 flex justify-around items-center border border-zinc-200 rounded-lg">
      <div className="w-full flex justify-center items-center gap-x-4">
        {/* btn */}
        {btn && (
          <div className=" cursor-pointer px-3 py-2 bg-gray-200 text-xl rotate-180 rounded-lg hover:scale-110 duration-300">
            <FaBarsStaggered />
          </div>
        )}
        {/* logo */}
        {logo && (
          <div className="flex gap-x-2 items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="logo"
              className="w-10 h-10 rounded-lg"
            />
          </div>
        )}
        {/* name */}
        {
          name && (
            <h1 className="text-xl font-bold text-zinc-800">أمين</h1>
          )
        }
        {/* searshBar */}
        {searshBar && (
          <div className="w-1/2 flex items-center gap-x-2 relative">
            <SearchBar />
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center gap-x-4">
        {/* price */}
        {cardPrice && (
          <div className="flex gap-x-2 items-center">
            <CiShoppingCart className="text-3xl cursor-pointer" />
          </div>
        )}
        {price && (
          <h2 className="text-lg font-semibold ">100$</h2>
        )}
      </div>
    </section>
  );
};

export default NavBar;
