// sections
import Statistics from './Statistics';
import FilterUi from './FilterUi';

const Reviews = () => {
    return (
        <section className="flex flex-col">
            {/* statistics */}
            <Statistics />
            {/* filter and table data */}
            <FilterUi />
            {/* Modal: add wilaya */}
        </section>
    )
}

export default Reviews;
