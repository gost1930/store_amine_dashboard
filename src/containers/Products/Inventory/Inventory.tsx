// components
import { Input, PageTile, Table } from "../../../components";
import { columns, data } from "../../../utils/StaticData/staticData";

const Inventory = () => {
  return (
    <section className='w-full md:w-[90%] h-full'>

      <PageTile title="الفلترة" />

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="">فلترة حسب حالات المنتج</label>
          <select name="" id="" className="w-full mt-2 h-12 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 border">
            <option value="">تصنيف</option>
            <option value="">تصنيف</option>
          </select>
        </div>
      </div>

      <PageTile title="المخزون" />
      <Table columns={columns} data={data} />
    </section>
  )
}

export default Inventory;
