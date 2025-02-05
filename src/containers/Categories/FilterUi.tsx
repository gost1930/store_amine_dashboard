// component
import { PageTile, Input, Table, Divider } from "../../components";
// static data 
import { data, columns } from "../../utils/StaticData/staticData";
const classes = "w-full mt-2 h-12 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 border"

const FilterUi = () => {
    return (
        <section>
            <PageTile title="الفالتر" />
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                <div>
                    <label htmlFor="status" className="text-lg font-bold">الحالة</label>
                    <select name="status" id="status" className={classes}>
                        <option value="">الكل</option>
                    </select>
                </div>
                {/* product */}
                <Input label="الإسم" type="text" name="categoryName" id="categoryName" htmlFor="categoryName" />
                {/* date start */}
                <Input label="على حسب التاريخ" type="date" name="dateStart" id="dateStart" htmlFor="dateStart" />
            </div>
            <Divider />
            <div>
                <PageTile title="التصنيفات" />
                <Table columns={columns} data={data} />
            </div>
        </section>
    )
}

export default FilterUi;
