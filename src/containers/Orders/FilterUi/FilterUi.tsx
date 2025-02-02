// component
import { PageTile, Input } from "../../../components";

const classes = "w-full mt-2 h-12 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 border"

const FilterUi = () => {
    return (
        <section>
            <PageTile title="الفالتر" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
                <div>
                    <label htmlFor="status">حالة الطلبات</label>
                    <select name="status" id="status" className={classes}>
                        <option value="">الكل</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wilaya">الولايات</label>
                    <select name="wilaya" id="wilaya" className={classes}>
                        <option value="">الكل</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="place">مكان التوصيل</label>
                    <select name="place" id="place" className={classes}>
                        <option value="">الكل</option>
                    </select>
                </div>
                {/* date start */}
                <Input label="تاريخ البداية" type="date" name="dateStart" id="dateStart" htmlFor="dateStart" />
                {/* date end */}
                <Input label="تاريخ الإنتهاء" type="date" name="dateEnd" id="dateEnd" htmlFor="dateEnd" />
                {/* product */}
                <Input label="المنتج" type="text" name="product" id="product" htmlFor="product" />
            </div>
        </section>
    )
}

export default FilterUi;
