import { useState } from "react";
// components
import { PageTile, Input, Button } from "../../../../components";
// icons
import { IoAdd } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";

const Offer = () => {
    const [offers, setOffers] = useState<{ id: number }[]>([]);

    const addOffer = () => {
        setOffers(prev => [...prev, { id: Date.now() }]);
    };

    const deleteOffre = (id: number) => {
        setOffers(prev => prev.filter(offer => offer.id !== id));
    };
    const clearAllOffers =() => setOffers([]);

    return (
        <div className="w-full h-fit rounded-lg border shadow px-2 pb-2 flex flex-col">
            <PageTile title="العروض" />
            {offers.map((offer, index) => (
                <div key={offer.id} className="w-full flex justify-between items-center gap-x-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Input type="number" name={`offerName-${index}`} id={`offerName-${index}`} placeholder="النص"  />
                        <Input type="number" name={`offerPrice-${index}`} id={`offerPrice-${index}`} placeholder="السعر "  />
                        <Input type="number" name={`offerQuantity-${index}`} id={`offerQuantity-${index}`} placeholder="الكمية"  />
                    </div>
                    <CiTrash onClick={() => deleteOffre(offer.id)} className="mt-4 w-fit text-red1 bg-red2 text-5xl rounded-lg -translate-y-1 cursor-pointer" />
                </div>
            ))}
            {offers.length > 0 && <Button onClick={clearAllOffers} text="إزالة كل العروض" className="bg-red1 text-lg w-fit" icon={<CiTrash />} />}
            <Button onClick={addOffer} text="اضافة عرض" className="mt-4 w-fit self-end bg-primary text-lg" icon={<IoAdd />} />
        </div>
    );
};

export default Offer;
