import { useState } from "react";
// components
import { PageTile, Input, Button } from "../../../../components";
// icons
import { IoAdd } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";

const Offre = () => {
    const [offres, setOffres] = useState<{ id: number }[]>([]);

    const addOffre = () => {
        setOffres(prev => [...prev, { id: Date.now() }]);
    };

    const deleteOffre = (id: number) => {
        setOffres(prev => prev.filter(offre => offre.id !== id));
    };

    return (
        <div className="w-full h-fit rounded-lg border shadow px-2 pb-2">
            <PageTile title="العروض" />
            {offres.map((offre, index) => (
                <div key={offre.id} className="w-full flex justify-between items-center gap-x-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Input type="number" name={`offreName-${index}`} id={`offreName-${index}`} placeholder="النص"  />
                        <Input type="number" name={`offrePrice-${index}`} id={`offrePrice-${index}`} placeholder="السعر "  />
                        <Input type="number" name={`offreQuantity-${index}`} id={`offreQuantity-${index}`} placeholder="الكمية"  />
                    </div>
                    <CiTrash onClick={() => deleteOffre(offre.id)} className="mt-4 w-fit text-red1 bg-red2 text-5xl rounded-lg -translate-y-1 cursor-pointer" />
                </div>
            ))}
            <Button onClick={addOffre} text="اضافة عرض" className="mt-4 w-full bg-primary text-lg" icon={<IoAdd />} />
        </div>
    );
};

export default Offre;
