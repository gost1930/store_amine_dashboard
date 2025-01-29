// import React from 'react'
// dnd-kit and css
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// icons
import { IoIosMove } from "react-icons/io";



const SecUi = ({ index, s }: { index: number, s: any }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: index })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div key={index}
            className='my-2'
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}>
            {/* {s.title} */}
            <h1 className="text-slate-800 text-lg">القسم #{s.k} : <span className="text-primary">جميع التصنيفات</span></h1>
            <div className="flex w-full gap-x-3 border rounded-lg py-5 px-2">
                <IoIosMove className="text-3xl" />
                <div className="">
                    
                </div>
            </div>
        </div>
    )
}

export default SecUi;
