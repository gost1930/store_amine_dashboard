// dnd-kit and css
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// icons
import { IoIosMove } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
// component
import { DeleteBtn, EditBtn, Card } from "../../../../components";



const SecUi = ({ index, s }: { index: number, s: any }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: index })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const onEditDection = (e: number) => {
        console.log("on edit", e)
    }
    const onDeleteDection = (e: number) => {
        console.log("on delete", e)
    }
    const classesCard = {
        parentClassName: "overflow-hidden hover:shadow-xl group",
        parentImageClasseName: "overflow-hidden",
        imageClassName: "group-hover:scale-110 transform",
        discountClassName: "",
        btnClassName: "bg-black text-white hover:-translate-y-2",
    }

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
                <div className="min-h-full grid place-content-center border-l pl-2">
                    <IoIosMove className="text-3xl" />
                </div>
                <div className="w-full h-full grid grid-cols-3 gap-2">
                    {/* <h1 className="text-slate-800 text-xl font-semibold flex">
                        <CiWarning className="text-red1 text-3xl" />
                        <span>هذا القسم غير ظاهر حاليا في متجرك!</span>
                    </h1> */}
                    {/* cart */}
                    {
                        Array.from({ length: 3 }).map((c, index) => (
                            <Card key={index} {...classesCard} />
                        ))
                    }
                </div>
                {/* action btns */}
                <div className="grid place-content-center gap-3">
                    <EditBtn onClick={() => onEditDection(s.id)} />
                    <DeleteBtn onClick={() => onDeleteDection(s.id)} />
                </div>
            </div>
        </div>
    )
}

export default SecUi;
