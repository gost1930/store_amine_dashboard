// sections 
import Static from './Static'
import FilterUi from './FilterUi'
import AddCategory from './AddCategory'
// component
import { Button, Divider } from '../../components';
// custom hooks
import { useDisCloser } from '../../hooks';

const AllCategories = () => {
  const { isOpen, onClose, openModal } = useDisCloser();
  return (
    <section className='flex flex-col'>
      <Button text='اضافة فئة' className=' w-fit bg-primary text-xl self-end -translate-y-10' onClick={openModal} />
      <Static />
      <Divider />
      <FilterUi />
      <AddCategory isOpen={isOpen} onClose={onClose} />
    </section>
  )
}

export default AllCategories;