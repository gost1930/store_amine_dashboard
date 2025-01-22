import { useState } from "react";
import { Button, PageTile } from "../../components";
const Colors = () => {
  const [color, setColor] = useState<string>("#000000");
  return (
    <div className="w-full h-fit p-3">
      <PageTile title="خصص اللون الأساسي الخاص بموقعك" />
      <form action="">
        <div className="relative w-20 h-20 border">
          <div
            style={{ backgroundColor: color }}
            className="w-full h-full rounded-full"
          ></div>
          {/* color picker */}
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            name=""
            id=""
            className="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-full h-full"
          />
          {/* hash of color */}
          <p>{color}</p>
        </div>
        <Button text="حفظ" className="mt-10 w-32"/>
      </form>
    </div>
  );
};

export default Colors;
