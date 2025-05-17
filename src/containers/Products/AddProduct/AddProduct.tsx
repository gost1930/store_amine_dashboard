import { PageTile , Button} from '../../../components';
// forms
import { GeneralData, AddPicturs, Prices, Offer, Colors, Categories, Inventory } from "./Forms";
// icon
import { IoAdd } from 'react-icons/io5';
const AddProduct = () => {
  return (
    <section className='w-full md:w-[80%] h-fit mb-20'>
      <PageTile title='اضافة منتج جديد' />
      {/* form add */}
      <form action="" className='flex flex-col'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <GeneralData />
          <AddPicturs />
          <Prices />
          <Offer />
          <Colors />
          <Categories />
          <Inventory />
        </div>
          <Button text='حفظ' className="w-full h-fit bg-primary text-lg self-center my-5 " icon={<IoAdd />} />
      </form>
    </section>
  )
}

export default AddProduct;
