// static data
import { deliveryStatistics } from '../../utils/Variables/status';
// components
import { StatusDiv } from '../../components';
const Statistics = () => {
    return (
        <div>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 mb-3">
                {
                    deliveryStatistics.map((s, index) => (
                        <StatusDiv key={index} index={index} title={s.title} value={s.value} icon={<s.icon />} className={`${s.className} md:text-2xl`} />
                    ))
                }
            </div>
        </div>
    )
}

export default Statistics;
