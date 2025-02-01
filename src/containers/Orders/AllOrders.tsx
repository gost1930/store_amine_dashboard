// component
import { PageTile, StatusDiv } from '../../components'
import FilterUi from "./FilterUi/FilterUi"
// static data
import { ordersStatus } from "../../utils/Variables/status";
const AllOrders = () => {
  return (
    <section className='w-full h-fit'>
      <PageTile title='حالة الطلبات' className='' />

      <div className="flex flex-wrap gap-3">
        {
          ordersStatus.map((s, index) => (
            <StatusDiv key={index} index={index} title={s.title} value={s.value} color={s.color} icon={<s.icon />} />
          ))
        }
      </div>

      {/* filter */}
      <FilterUi />
    </section>
  )
}

export default AllOrders;
