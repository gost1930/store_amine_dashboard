import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../../../assets/2.jpeg";
import StyleProduct from "./StylesProduct";
import { Button } from "../../../../../components";

const DInamiqueCard = () => {
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
    btnTranslateX: -100,
    btnWidth: "100%",
    // discount
    DiscountBorder: 0,
    DiscountBorderColor: "red",
    DiscountBgColor: "red",
    DiscountTextColor: "white",
    DiscountTop: 0,
    DiscountLeft: 0,
    DiscountText: "خصم",
    DiscountRounded: 0,
    // image
    ImageWidth: 100,
    ImageY: 0,
    ImageX: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStyles((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(styles);
  };

  // rest tht styles
  const restStyles = () => {
    setStyles({
      border: 1,
      borderColor: "red",
      rounded: 0,
      bg: "#ffffff",
      textColor: "#000000",
      priceColor: "red",
      btnColor: "#000000",
      btnTextColor: "#ffffff",
      btnTranslateY: 0,
      btnTranslateX: -100,
      btnWidth: "100%",
      DiscountBorder: 0,
      DiscountBorderColor: "red",
      DiscountBgColor: "red",
      DiscountTextColor: "white",
      DiscountTop: 0,
      DiscountLeft: 0,
      DiscountText: "خصم",
      DiscountRounded: 0,
      ImageWidth: 100,
      ImageY: 0,
      ImageX: 0,
    });
  };
  return (
    <section className="w-full h-fit mt-5 flex flex-col md:flex-row justify-between gap-5">
      <div
        className="h-[350px] md:h-[500px] relative overflow-hidden duration-300 group cursor-pointer w-96"
        style={{
          border: `${styles.border}px  solid ${styles.borderColor}`,
          backgroundColor: styles.bg,
          borderRadius: `${styles.rounded}px`,
        }}
      >
        {/* discount */}
        <div
          className="absolute z-10 top-0 left-0 bg-primary text-white grid place-content-center h-10 min-w-10"
          style={{
            transform: `translateY(${styles.DiscountTop}px) translateX(${styles.DiscountLeft}px)`,
            backgroundColor: styles.DiscountBgColor,
            color: styles.DiscountTextColor,
            border: `${styles.DiscountBorder}px solid ${styles.DiscountBorderColor}`,
            borderRadius: `${styles.DiscountRounded}px`,
          }}
        >
          10% {styles.DiscountText}
        </div>

        {/* image */}
        <div className="w-full bg-red-200 grid place-content-center h-[70%] overflow-hidden">
          <img
            src={img}
            alt="Product"
            className="h-full object-cover"
            style={{
              width: styles.ImageWidth + "%",
              transform: `translateY(${styles.ImageY}px) translateX(${styles.ImageX}px)`,
            }}
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

      <div className="w-full h-fit md:w-1/2">
        <StyleProduct styles={styles} handleChange={handleChange} />
        <div className="flex gap-x-5">
          <Button
            text="إعادة تعيين"
            onClick={restStyles}
            className="mt-10 w-32 bg-black"
          />
          <Button text="حفظ" className="mt-10 w-32 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default DInamiqueCard;
