// dnd-kit and css
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// icons
import { IoIosMove } from "react-icons/io";

// component
import { DeleteBtn, EditBtn, ModalDelete } from "../../../../components";
import { useDisCloser } from "../../../../utils/hooks";



const SecUi = ({ index, s }: { index: number, s: any }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: index })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const { isOpen, onClose , setIsOpen } = useDisCloser()
    const openDeleteModal = (id: any) =>{
        if(!id) return;
        console.log(id)
        setIsOpen(true)
    }
    const onEditDection = (e: number) => {
        console.log("on edit", e)
    }
    // const onDeleteDection = (e: number) => {
    //     console.log("on delete", e)
    // }


    return (
        <div key={index}
            className='my-2'
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}>
            {/* {s.title} */}
            <h1 className="text-slate-800 text-lg">القسم #{s.k} : <span className="text-primary">{s.title}</span></h1>
            <div className="flex w-full gap-x-3 border rounded-lg py-5 px-2">
                <div className="min-h-full grid place-content-center border-l pl-2">
                    <IoIosMove className="text-3xl" />
                </div>
                <div className="w-full h-full grid place-content-center grid-cols-3 gap-2">
                    {/* <h1 className="text-slate-800 text-xl font-semibold flex">
                        <CiWarning className="text-red1 text-3xl" />
                        <span>هذا القسم غير ظاهر حاليا في متجرك!</span>
                    </h1> */}
                    {/* cart */}
                    {/* {
                        Array.from({ length: 3 }).map((c, index) => (
                            <Card key={index} {...classesCard} />
                        ))
                    } */}
                    {s.card}
                </div>
                {/* action btns */}
                <div className="grid place-content-center gap-3">
                    <EditBtn onClick={() => onEditDection(s.id)} />
                    <DeleteBtn onClick={() => openDeleteModal(s.id)} />
                </div>
            </div>
            <ModalDelete isOpen={isOpen} onClose={onClose} title="هل انت متاكد من حذف القسم؟" id={s.id} />
        </div>
    )
}

export default SecUi;
