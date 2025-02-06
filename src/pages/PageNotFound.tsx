import img from '../assets/pageNotFound.jpg';
// react router
import { Link } from 'react-router-dom';
// icons
import { IoIosArrowRoundBack } from "react-icons/io";

const PageNotFound = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-center w-full text-4xl font-bold text-primary'>صفحة غير موجودة</h1>
      <div style={{
        backgroundImage: `url(${img})`,
      }}
        className='bg-center bg-cover w-[70vh] h-[70vh]'>
      </div>
      <Link to='/store/logo' className='flex items-center justify-center w-fit p-2 border-2 border-primary hover:bg-primary hover:text-white duration-300 rounded-xl  my-3 text-primary text-xl group gap-1'>
        الصفحة الرئيسية
        <IoIosArrowRoundBack className='group-hover:-translate-x-2 duration-200' />
      </Link>
    </div>
  )
}

export default PageNotFound;
