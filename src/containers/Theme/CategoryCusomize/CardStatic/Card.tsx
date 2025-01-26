// image
import img from "../../../../assets/2.jpeg";
// icon
import { IoIosArrowRoundBack } from "react-icons/io";
// framer-motion
import { motion } from "framer-motion";

interface CardProps {
  parentClassName?: string;
  parentImageClasseName?: string;
  hight?: string;
  imageClassName?: string;
  parentBtnClassName?: string;
  btnClassName?: string;
  bgShadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  parentClassName,
  parentImageClasseName,
  hight,
  imageClassName,
  parentBtnClassName,
  btnClassName,
  bgShadow,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`w-full h-fit bg-white cursor-pointer relative ${parentClassName}`}>
      {/* image */}
      <div className={`w-full ${hight} ${parentImageClasseName}`}>
        <img
          src={img}
          alt="Product"
          className={`h-full w-full object-cover ${imageClassName}  duration-300`}
        />
      </div>
      {
        bgShadow && (
          <div className=" absolute top-0 left-0 w-full h-full group-hover:bg-black/50 duration-200"></div>
        )
      }
      {/* btn */}
      <div className={`w-full grid place-content-center p-2 ${parentBtnClassName}`}>
        <button className={` rounded-lg ${btnClassName} flex items-center gap-x-3`}>المزيد <IoIosArrowRoundBack /></button>
      </div>
    </motion.div>
  );
};

export default Card;
