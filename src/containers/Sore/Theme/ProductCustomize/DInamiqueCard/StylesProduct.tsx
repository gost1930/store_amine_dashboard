import {inputs} from './inputs';
const StylesProduct = ({ styles, handleChange }: { styles: any; handleChange: any }) => {
  console.log(inputs(styles));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {inputs(styles).map(({ label, ...inputProps }, index) => (
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
