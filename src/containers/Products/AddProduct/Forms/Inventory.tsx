// hooks
import { useState } from "react";
// component
import { PageTile, CheckBox ,Input } from "../../../../components";

const Inventory = () => {
    const [inventory, setInventory] = useState(false)
    return (
        <div className='w-full h-fit rounded-lg border shadow px-4 pb-4 flex flex-col'>
            <PageTile title="المخزون" />
            {/* checkbox */}
            <div className="flex gap-x-2">
                <label htmlFor="inventory">هل تريد تتبع المخزون؟</label>
                <div dir="ltr" className="checkbox-wrapper-7 self-start">
                    <CheckBox name="inventory" id="inventory" checked={inventory} onChange={(e: any) => setInventory(e.target.checked)} />
                    <label htmlFor="inventory" className="tgl-btn"></label>
                </div>
            </div>

            {
                inventory && (
                    <div>
                        
                        <Input label="الكمية" type="number" name="quantity" id="quantity" htmlFor="quantity" placeholder="الكمية الخاصة بالمنتج" />
                    </div>
                )
            }
        </div>
    )
}

export default Inventory;
