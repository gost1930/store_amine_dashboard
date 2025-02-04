import { PageTile } from '../../../components';
// forms
import { GeneralData, AddPicturs, Prices, Offre } from "./Forms";
const AddProduct = () => {
  return (
    <section className='w-full md:w-[80%] h-fit'>
      <PageTile title='اضافة منتج جديد' />
      {/* form add */}
      <form action="">
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <GeneralData />
          <AddPicturs />
          <Prices />
          <Offre />
        </div>
      </form>
    </section>
  )
}

export default AddProduct;
