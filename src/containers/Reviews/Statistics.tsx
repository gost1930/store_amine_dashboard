// static data
import { reviewsStatistic } from '../../utils/Variables/status';
// components
import { StatusDiv } from '../../components';
const Statistics = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-3 mb-3">
                {
                    reviewsStatistic.map((s, index) => (
                        <StatusDiv key={index} index={index} title={s.title} value={s.value} icon={<s.icon />} className={`${s.className} md:text-2xl`} />
                    ))
                }
            </div>
        </div>
    )
}

export default Statistics;
