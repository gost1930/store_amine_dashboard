// import React from 'react'
// dnd-kit and css
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
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
            <div className="flex w-full gap-x-3 border">

            </div>
        </div>
    )
}

export default SecUi;
