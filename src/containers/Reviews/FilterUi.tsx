// component
import { PageTile, Table } from "../../components";
// static data 
import { data, columns } from "../../utils/StaticData/staticData";

const FilterUi = () => {
    return (
        <section>
            <PageTile title="التقييمات: " />
            <Table columns={columns} data={data} />
        </section>
    )
}

export default FilterUi;
