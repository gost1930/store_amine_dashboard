// component
import { PageTile, Input } from "../../../../components";

const Prices = () => {
    return (
        <div className="w-full h-fit my-3">
            <PageTile title="الأسعار" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="number" name="oldPrice" id="oldPrice" htmlFor="oldPrice" placeholder="السعر القديم" label="السعر القديم" />
                <Input type="number" name="newPrice" id="newPrice" htmlFor="newPrice" placeholder="السعر الجديد" label="السعر الجديد" />
            </div>
        </div>
    )
}

export default Prices;
