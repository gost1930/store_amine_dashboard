import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// links
import { links, settingsAndPayment } from "./links";
const GeneralSideBar = ({ isOpen, setIsOpen }: any) => {
  const [openSubLinks, setOpenSubLinks] = useState<string | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const { pathname } = useLocation();
  const toggleSubLinks = (linkName: string) => {
    setOpenSubLinks(openSubLinks === linkName ? null : linkName);
  };
  // func for close the slide
  const openSlide = () => setIsOpen(true);
  const closeSlide = () => setIsOpen(false);

  // close the slide when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".side-bar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // logic
  const logicforSlide = (link: any) => {
    if (isOpen) {
      if (!link.subLinks?.length) {
        closeSlide();
        setOpenSubLinks(null);
      }
    } else {
      openSlide();
    }
  };
  return (
    <div
      className={`side-bar absolute top-0 ${!isOpen ? "-right-[80%] md:-right-[20%]" : "right-0"
        } min-h-full px-3 py-5 w-full md:w-[28%] lg:w-1/4  duration-300 border-l overflow-y-auto z-10 bg-white`}
    >
      {/* btn */}
      <div
        onClick={handleClick}
        className="absolute top-3 left-4 bg-gray-200 rounded-full h-10 grid place-content-center w-10 cursor-pointer"
      >
        <div className="w-5 h-[3px] rounded-full bg-black"></div>
        <motion.div
          animate={{ x: !isOpen ? -3 : 3 }}
          className="w-5 h-[3px] rounded-full bg-black my-1"
        ></motion.div>
        <div className="w-5 h-[3px] rounded-full bg-black"></div>
      </div>

      <div className="mt-10 ">
        <div
          className={`${!isOpen ? "hidden" : "md:grid"
            } place-content-center hidden`}
        >
          <h1 className="text-zinc-800 text-2xl text-center">amine store</h1>
          <div className="px-3 py-1 my-5 bg-green-200 rounded-full">
            <p className="text-green-800 text-center">online</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="mt-5 px-1">
          {links.map((link, index) => (
            <div key={index} className="mb-2 duration-300 h-fit">
              {!link.subLinks?.length ? (
                <Link
                  to={link.path}
                  className={`flex flex-col ${!isOpen && "items-end -translate-x-2 lg:translate-x-1"
                    }`}
                  onClick={() => logicforSlide(link)}
                >
                  <motion.div
                    className={` py-2 px-3 my-1 rounded-xl hover:bg-primary ${pathname === link.path
                      ? "bg-primary text-white"
                      : "hover:text-white"
                      }  
                  flex justify-between items-center`}
                    onClick={() =>
                      link.subLinks?.length && toggleSubLinks(link.name)
                    }
                  >
                    {/* title */}
                    <h1 className="flex items-center gap-x-2 text-lg">
                      <span className="text-2xl">{link.icon}</span>
                      {isOpen ? <span>{link.name}</span> : null}
                    </h1>
                    {isOpen && link.subLinks?.length ? (
                      <IoIosArrowDown
                        className={`${openSubLinks === link.name ? "rotate-180" : ""
                          } duration-200`}
                      />
                    ) : null}
                  </motion.div>
                </Link>
              ) : (
                <div
                  className={`flex flex-col ${!isOpen && "items-end -translate-x-2 lg:translate-x-1 cursor-pointer"
                    }`}
                  onClick={() => logicforSlide(link)}
                >
                  <motion.div
                    className={` py-2 px-3 my-1 rounded-xl hover:bg-primary ${openSubLinks === link.name
                      ? "bg-primary text-white"
                      : "hover:text-white"
                      }  
                  flex justify-between items-center`}
                    onClick={() =>
                      link.subLinks?.length && toggleSubLinks(link.name)
                    }
                  >
                    {/* title */}
                    <h1 className="flex items-center gap-x-2 text-lg">
                      <span className="text-2xl">{link.icon}</span>
                      {isOpen ? <span>{link.name}</span> : null}
                    </h1>
                    {isOpen && link.subLinks?.length ? (
                      <IoIosArrowDown
                        className={`${openSubLinks === link.name ? "rotate-180" : ""
                          } duration-200`}
                      />
                    ) : null}
                  </motion.div>
                </div>
              )}
              {openSubLinks === link.name &&
                link.subLinks?.length &&
                isOpen && (
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mr-12"
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={`${link.name}-${subIndex}`}
                        to={subLink.path}
                        onClick={closeSlide}
                      >
                        <motion.div
                          whileHover={{ x: -2 }}
                          className="text-lg text-zinc-800 py-1 px-2 my-1 rounded hover:text-cyan-800 hover:bg-cyan-300/70"
                        >
                          {subLink.name}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
            </div>
          ))}
          {/* divider */}
          <div className="w-full h-[1px] bg-gray-200 my-5"></div>
          {settingsAndPayment.map((link, index) => (
            <div key={index} className="mb-2 duration-300 h-fit">
              <Link
                to={link.path}
                className={`flex flex-col ${!isOpen && "items-end -translate-x-2 lg:translate-x-1"
                  }`}
                onClick={() => logicforSlide(link)}
              >
                <motion.div
                  className={` py-2 px-3 my-1 rounded-xl hover:bg-primary ${openSubLinks === link.name
                    ? "bg-primary text-white"
                    : "hover:text-white"
                    }  
                  flex justify-between items-center`}
                  onClick={() =>
                    link.subLinks?.length && toggleSubLinks(link.name)
                  }
                >
                  {/* title */}
                  <h1 className="flex items-center gap-x-2 text-lg">
                    <span className="text-3xl">{link.icon}</span>
                    {isOpen ? <span>{link.name}</span> : null}
                  </h1>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralSideBar;
