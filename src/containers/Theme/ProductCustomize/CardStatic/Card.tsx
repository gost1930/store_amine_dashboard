// images
import img from "../../../../assets/2.jpeg";
// framer-motion
import {motion} from "framer-motion"
interface ICard {
  parentClassName?: string;
  parentImageClasseName?: string;
  imageClassName?: string;
  discountClassName?: string;
  btnClassName?: string;
}
const Card: React.FC<ICard> = ({
  parentClassName,
  parentImageClasseName,
  imageClassName,
  discountClassName,
  btnClassName,
}) => {
  return (
    <motion.div
    initial={{ scale: 0.5 , opacity:0 }}
    animate={{ scale: 1 , opacity:1}}
      className={`border cursor-pointer relative duration-300 rounded-xl w-full h-fit flex flex-col ${parentClassName}`}
    >
      {/* img */}
      <div className={`w-full h-[70%] ${parentImageClasseName}`}>
        <img
          src={img}
          alt="Product"
          className={`h-full object-cover ${imageClassName}  duration-300`}
        />
      </div>

      {/* discount */}
      <div
        className={` absolute top-1 ${
          discountClassName || "right-2"
        } rounded-full grid place-content-center bg-red-500 text-white w-12 h-12`}
      >
        50%
      </div>
      {/* text */}
      <div className="w-full h-[30%] p-2">
        <h1 className="text-sm md:text-base lg:text-xl text-center">منتج1</h1>
        <div className="flex justify-center items-center gap-x-2 w-full my-2">
          <p className="text-gray-500 line-through">888 دج</p>
          <p className="text-red-500">888 دج</p>
        </div>
        <div className="grid place-content-center w-full">
          <button
            className={`px-10 py-2 mt-5 rounded-lg text-center duration-300 ${btnClassName}`}
          >
            أطلب الآن
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
