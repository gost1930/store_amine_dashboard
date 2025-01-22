const StylesColor = ({
  styles,
  handleChange,
}: {
  styles: any;
  handleChange: any;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div>
        <label className="block mb-2 font-medium">لون الخلفية</label>
        <input
          type="color"
          name="bg"
          value={styles.bg}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
        {styles.bg}
      </div>
      <div>
        <label className="block mb-2 font-medium">لون النص</label>
        <input
          type="color"
          name="textColor"
          value={styles.textColor}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
        {styles.textColor}
      </div>
      <div>
        <label className="block mb-2 font-medium">لون السعر</label>
        <input
          type="color"
          name="priceColor"
          value={styles.priceColor}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
        {styles.priceColor}
      </div>
      <div>
        <label className="block mb-2 font-medium">لون الزر</label>
        <input
          type="color"
          name="btnColor"
          value={styles.btnColor}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
        {styles.btnColor}
      </div>
      <div>
        <label className="block mb-2 font-medium">لون نص الزر</label>
        <input
          type="color"
          name="btnTextColor"
          value={styles.btnTextColor}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
      </div>
      {styles.btnTextColor}
      <div>
        <label className="block mb-2 font-medium">تحكم في مكان الزر</label>
        <input
          type="range"
          name="btnTranslateY"
          value={styles.btnTranslateY}
          onChange={handleChange}
          size={100}
          className="w-full h-10 border rounded-lg"
        />
        {styles.btnTranslateY}
      </div>
      <div>
        <label className="block mb-2 font-medium">تحكم في مكان الزر</label>
        <input
          type="range"
          name="btnTranslateX"
          value={styles.btnTranslateX}
          onChange={handleChange}
          defaultValue={50}
          step={1}
            min={-200}
          size={250}
          className="w-full h-10 border rounded-lg"
        />
        {styles.btnTranslateX}
      </div>
      <div>
        <label className="block mb-2 font-medium">عرض الزر</label>
        <input
          type="range"
          name="btnWidth"
          value={styles.btnWidth}
          onChange={handleChange}
          defaultValue={200}
          step={20}
          max={1000}
          className="w-full h-10 border rounded-lg"
        />
        {styles.btnWidth}
      </div>
      <div>
        <label className="block mb-2 font-medium">لون حدود البطاقة </label>
        <input
          type="color"
          name="borderColor"
          value={styles.borderColor}
          onChange={handleChange}
          className="w-full h-10 border rounded-lg"
        />
      {styles.borderColor}
      </div>
      <div>
        <label className="block mb-2 font-medium">حدود البطاقة</label>
        <input
          type="range"
          name="border"
          value={styles.border}
          onChange={handleChange}
          placeholder="مثال: 2px solid #000"
          className="w-full border rounded-lg px-3 py-2"
        />
        {styles.border}
      </div>
      <div>
        <label className="block mb-2 font-medium">الحواف</label>
        <input
          type="range"
          name="rounded"
          value={styles.rounded}
          onChange={handleChange}
          placeholder="مثال: 2px solid #000"
          className="w-full border rounded-lg px-3 py-2"
        />
        {styles.rounded}
      </div>
    </div>
  );
};

export default StylesColor;
