// sections
import Statistics from './Statistics';
import FilterUi from './FilterUi';
import AddWilaya from './AddWilaya';
// component
import { Button } from "../../components";
// custom hooks
import { useDisCloser } from '../../hooks';
// icon
import { IoAdd } from 'react-icons/io5';

const Delivery = () => {
    const { isOpen, openModal, onClose } = useDisCloser();
    return (
        <section className="flex flex-col">
            <Button text='اضافة ولاية توصيل' className=' w-fit bg-primary text-xl self-end -translate-y-10' icon={<IoAdd />} onClick={openModal} />
            {/* statistics */}
            <Statistics />
            {/* filter and table data */}
            <FilterUi />
            {/* Modal: add wilaya */}
            <AddWilaya isOpen={isOpen} onClose={onClose} />
        </section>
    )
}

export default Delivery;
