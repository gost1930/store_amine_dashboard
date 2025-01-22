import { PageTile } from "../../components";

import { Link } from "react-router-dom";
import img from "../../assets/2.jpeg";
import { useState } from "react";
import StylesColor from "./StylesColor";

const ProductCustomize = () => {
  const [styles, setStyles] = useState({
    border: 1,
    borderColor: "red",
    rounded: 0,
    bg: "#ffffff",
    textColor: "#000000",
    priceColor: "red",
    btnColor: "#000000",
    btnTextColor: "#ffffff",
    btnTranslateY: 0,
    btnTranslateX: 0,
    btnWidth: "100%",
  });

  // دالة لتحديث القيم
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStyles((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(styles);
  };

  return (
    <div className="w-full h-fit mt-5">
      <PageTile title="تخصيص بطاقة المنتجات بالشكل الذي تريده" />

      {/* قسم التحكم */}
      <section className="w-full p-4 mb-5 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-bold mb-4">تحكم بالخصائص</h2>
      </section>

      {/* البطاقة */}
      <section className="w-full h-fit mt-5 flex flex-col md:flex-row justify-between gap-5">
        <div
          className="h-[350px] md:h-[500px] relative overflow-hidden duration-300 group cursor-pointer w-96"
          style={{
            border: `${styles.border}px  solid ${styles.borderColor}`,
            backgroundColor: styles.bg,
            borderRadius: `${styles.rounded}px`,
          }}
        >
          <div className="w-full h-[70%] overflow-hidden">
            <img
              src={img}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[30%]">
            <h1
              className="text-sm md:text-base lg:text-xl text-center"
              style={{ color: styles.textColor }}
            >
              منتج1
            </h1>
            <div className="flex justify-center items-center gap-x-2 w-full my-2">
              <p className="text-gray-500 line-through">888 دج</p>
              <p style={{ color: styles.priceColor }} className="">
                888 دج
              </p>
            </div>
            <div
              className="grid place-content-center w-fit"
              style={{
                transform: `translateY(${styles.btnTranslateY}px) translateX(${styles.btnTranslateX}px)`,
              }}
            >
              <Link
                to="/pro_detailes"
                className="px-10 py-2 rounded-lg text-center duration-300 "
                style={{
                  backgroundColor: styles.btnColor,
                  color: styles.btnTextColor,
                  width: styles.btnWidth + "px",
                }}
              >
                أطلب الآن
              </Link>
            </div>
          </div>
        </div>

        <StylesColor styles={styles} handleChange={handleChange} />
      </section>
    </div>
  );
};

export default ProductCustomize;
