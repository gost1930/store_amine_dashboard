// sections 
import Statistics from './Statistics'
import FilterUi from './FilterUi'
import AddCategory from './AddCategory'
// component
import { Button, Divider } from '../../components';
// custom hooks
import { useDisCloser } from '../../utils/hooks';
// icon
import { IoAdd } from 'react-icons/io5';


const AllCategories = () => {
  const { isOpen, onClose, openModal } = useDisCloser();
  return (
    <section className='flex flex-col'>
      <Button text='اضافة فئة' className=' w-fit bg-primary text-xl self-end -translate-y-10' icon={<IoAdd />} onClick={openModal} />
      <Statistics />
      <Divider />
      <FilterUi />
      <AddCategory isOpen={isOpen} onClose={onClose} />
    </section>
  )
}

export default AllCategories;