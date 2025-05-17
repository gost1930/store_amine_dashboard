// images
import { useState } from "react";
import logo from "../../assets/s.png";
import GeneralSideBar from "../GeneralSideBar/GeneralSideBar";
const GeneralPage = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      dir="rtl"
      className="overflow-x-hidden max-w-screen min-h-screen h-fit relative"
    >
      {/* side bar */}
      <GeneralSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`flex flex-col items-center mr-[90px] justify-center duration-300 pr-1`}
      >
        <nav className="flex items-center justify-between w-full px-10 py-2 border-b shadow-sm mb-5">
          {/* logo */}
          <img src={logo} alt="logo" className="w-7 h-7 " />
          {/* links */}
          <div className="flex items-center gap-4">
            <select name="" id="" className="bg-transparent p-1 border focus:outline-cyan-700">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </nav>
        <div dir="rtl" className="w-full h-fit mr-5">
          {children}
        </div>
      </div>
    </section>
  );
};

export default GeneralPage;
