import { links } from "./staticData";
// react-rounter-dom
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// framer-motion
import { motion } from "framer-motion";

const Links = () => {
  const { pathname } = useLocation();
  const thePath = pathname.split("/").pop();

  return (
    <motion.div className="flex gap-x-4 items-center">
      {/* links */}
      {links.map((link, index) => (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * index , duration: 0.5 }}
          key={index}
        >
          <Link
            to={link.path}
            className={`text-lg rounded-xl px-5 py-2 ${
              thePath === link.path
                ? "bg-primary text-white"
                : thePath === "theme" && index === 0
                ? "bg-primary text-white"
                : "bg-transparent text-zinc-700"
            } border`}
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
