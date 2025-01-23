const StylesProduct = ({ styles, handleChange }: { styles: any; handleChange: any }) => {
  const inputs = [
    { label: "لون الخلفية", type: "color", name: "bg", value: styles.bg },
    { label: "لون النص", type: "color", name: "textColor", value: styles.textColor },
    { label: "لون السعر", type: "color", name: "priceColor", value: styles.priceColor },
    { label: "لون الزر", type: "color", name: "btnColor", value: styles.btnColor },
    { label: "لون نص الزر", type: "color", name: "btnTextColor", value: styles.btnTextColor },
    { label: "تحكم في مكان الزر (Y)", type: "range", name: "btnTranslateY", value: styles.btnTranslateY, min: 0, max: 100 },
    { label: "تحكم في مكان الزر (X)", type: "range", name: "btnTranslateX", value: styles.btnTranslateX, min: -200, max: 250, step: 1 , start: -111},
    { label: "عرض الزر", type: "range", name: "btnWidth", value: styles.btnWidth, min: 50, max: 1000, step: 20 },
    { label: "لون حدود البطاقة", type: "color", name: "borderColor", value: styles.borderColor },
    { label: "حدود البطاقة", type: "range", name: "border", value: styles.border, min: 0, max: 20 },
    { label: "الحواف", type: "range", name: "rounded", value: styles.rounded, min: 0, max: 50 },
    { label: " حدود الخصم", type: "range", name: "DiscountBorder", value: styles.DiscountBorder, min: 0, max: 20 },
    { label: "لون حدود الخصم", type: "color", name: "DiscountBorderColor", value: styles.DiscountBorderColor },
    { label: "لون خلفية الخصم", type: "color", name: "DiscountBgColor", value: styles.DiscountBgColor },
    { label: "لون نص الخصم", type: "color", name: "DiscountTextColor", value: styles.DiscountTextColor },
    { label: "مكان الخصم (Y)", type: "range", name: "DiscountTop", value: styles.DiscountTop, min: 0, max: 309 },
    { label: "مكان الخصم (X)", type: "range", name: "DiscountLeft", value: styles.DiscountLeft, min: 0, max: 342 },
    { label: "حواف الخصم", type: "range", name: "DiscountRounded", value: styles.DiscountRounded, min: 1, max: 20 },
    { label: "نص الخصم", type: "input", name: "DiscountText", value: styles.DiscountText},
    { label: "حجم الصورة", type: "range", name: "ImageWidth", value: styles.ImageWidth , min: 50, max: 100 },
    { label: "مكان الصورة(Y)", type: "range", name: "ImageY", value: styles.ImageY , min: -112, max: 112 },
    { label: "مكان الصورة(X)", type: "range", name: "ImageX", value: styles.ImageX , min: -193, max: 97 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {inputs.map(({ label, ...inputProps }, index) => (
        <div key={index}>
          <label className="block mb-2 font-medium">{label}</label>
          <input
            {...inputProps}
            onChange={handleChange}
            className="w-full h-10 border rounded-lg px-2"
          />
          {inputProps.value}
        </div>
      ))}
    </div>
  );
};

export default StylesProduct;
