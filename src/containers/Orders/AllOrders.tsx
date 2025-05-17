// component
import { PageTile, StatusDiv , Table } from '../../components'
import FilterUi from "./FilterUi/FilterUi"
// static data
import { ordersStatus } from "../../utils/Variables/status";
import {columns , data} from "../../utils/StaticData/staticData";
const AllOrders = () => {
  return (
    <section className='w-full h-fit'>
      <PageTile title='حالة الطلبات' className='' />

      <div className="flex flex-wrap gap-3 mb-3">
        {
          ordersStatus.map((s, index) => (
            <StatusDiv key={index} index={index} title={s.title} value={s.value} icon={<s.icon />} className={s.className} />
          ))
        }
      </div>

      {/* filter */}
      <FilterUi />

      {/* data in table */}
      <Table columns={columns} data={data} />
    </section>
  )
}

export default AllOrders;
