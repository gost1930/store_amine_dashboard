// import React from 'react'
// component
import { PageTile, Button, Table } from '../../components';
// icons
import { BsBox2 } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
// static data
import { data, columns } from "../../utils/StaticData/staticData";
const AllProducts = () => {
    return (
        <div className='w-full md:w-[80%] h-fit'>
            <div className="flex items-center justify-between w-full">
                <PageTile title='الإحصائيات' />
                <Link to="/products/add">
                    <Button text="إضافة منتج" className="mt-10 h-fit bg-primary" icon={<IoMdAdd />} />
                </Link>
            </div>
            {/* stat */}
            <div className='w-full h-fit my-2 grid grid-cols-2 md:grid-cols-8 gap-2'>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='rounded-lg flex flex-col justify-center items-center gap-y-4 p-3 border bg-green1 cursor-pointer hover:-translate-y-1 duration-200'>
                            {/* icon */}
                            <BsBox2 className='text-green2 text-2xl' />
                            <h1 className='text-green2'>{index + 1} المنتجات</h1>
                        </div>
                    ))
                }
            </div>

            {/* table */}
            <Table columns={columns} data={data} />
        </div>
    )
}

export default AllProducts;
