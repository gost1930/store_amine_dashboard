import { useState } from "react";
import { PageTile, ColorInput, Input, Button, CheckBox } from "../../../../components";
import { CiTrash } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";

const Colors = () => {
    const [colors, setColors] = useState<{ color: string; name: string }[]>([]);

    const addColorInp = () => {
        setColors(prev => [...prev, { color: "white", name: "white" }]);
    };

    const handlColor = (e: any, id: number) => {
        const updatedColors = [...colors];
        updatedColors[id].color = e.target.value;
        setColors(updatedColors);
    };
    const hadleNameColor = (e: any, id: number) => {
        const updatedColors = [...colors];
        updatedColors[id].name = e.target.value;
        setColors(updatedColors);
    }
    const removeColor = (index: number) => {
        const updatedColors = colors.filter((_, i) => i !== index);
        setColors(updatedColors);
    };
    const clearAllColors = () => setColors([]);

    return (
        <div className='w-full h-fit rounded-lg border shadow px-2 pb-2 flex flex-col'>
            <PageTile title="الألوان" />
            <div className="w-full h-fit">
                {colors.map((color, index) => (
                    <div key={index} className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <ColorInput
                                color={color.color}
                                onChange={(e) => handlColor(e, index)}
                                name={`color-${index}`}
                                id={`color-${index}`}
                            />
                            <Input
                                type="text"
                                name={`colorQuantity-${index}`}
                                id={`colorQuantity-${index}`}
                                placeholder="إسم اللون"
                                onChange={(e) => hadleNameColor(e, index)}
                            />
                        </div>
                        <CiTrash
                            onClick={() => removeColor(index)}
                            className="mt-4 w-fit text-red1 bg-red2 text-5xl rounded-lg -translate-y-1 cursor-pointer"
                        />
                    </div>
                ))}
                <Button type="button" onClick={clearAllColors} text="مسح الكل" className="bg-primary text-lg" icon={<CiTrash />} />

            </div>
            <div className="w-full h-fit p-3">
                <PageTile title="معاينة" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {
                        colors.map((colors, index) => (
                            <div key={index} className="relative flex gap-x-2 items-end">
                                <div dir="ltr" key={index} className="checkbox-wrapper-7">
                                    <CheckBox name={colors.name} id={colors.name} />
                                    <label htmlFor={colors.name} className="tgl-btn"></label>
                                </div>
                                <div className="w-10 h-10 rounded-full border" style={{ backgroundColor: colors.color }}></div>
                                <p>{colors.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Button
                type="button"
                onClick={addColorInp}
                text="اضافة لون"
                className="bg-primary text-lg"
                icon={<IoAdd />}
            />
        </div>
    );
};

export default Colors;
