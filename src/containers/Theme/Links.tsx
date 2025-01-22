import { links } from "./links";
// react-rounter-dom
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Links = () => {
    const {pathname} = useLocation();
    const thePath = pathname.split("/").pop();

    // console.log(mainPath) 
  return (
    <div className="flex gap-x-4 items-center">
      {/* links */}
      {links.map((link, index) => (
        <div key={index}>
          <Link
            to={link.path}
            className={`text-lg rounded-xl px-5 py-2 ${thePath === link.path ? "bg-primary text-white" :  thePath === "theme" && index === 0   ? "bg-primary text-white" : "bg-transparent text-zinc-700" } border`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
