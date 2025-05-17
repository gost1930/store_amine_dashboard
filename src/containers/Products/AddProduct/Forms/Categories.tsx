// component
import { PageTile } from "../../../../components";

const Categories = () => {
  return (
    <div className="w-full h-fit rounded-lg border shadow px-4 pb-4 flex flex-col">
        <PageTile title="التصنيفات (إختياري)" className="mb-3" />
        <select name="" id="" className="w-full mt-2 h-12 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 border">
            <option value="">تصنيف</option>
            <option value="">تصنيف</option>
        </select>
    </div>
  )
}

export default Categories;
