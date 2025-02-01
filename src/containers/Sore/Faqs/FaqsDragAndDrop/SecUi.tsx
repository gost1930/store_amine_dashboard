import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IoIosMove } from "react-icons/io";
import { DeleteBtn, EditBtn, ModalDelete } from "../../../../components";
import { useDisCloser } from "../../../../hooks";
import FaqsAE from "../AddEditFaqs/FaqsAE";
import { useState, useCallback } from "react";

interface SectionProps {
    s: {
        id: number;
        k: number;
        title: string;
        qe: string;
        answer: string;
    };
}

const SecUi: React.FC<SectionProps> = ({ s }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: s.id });
    const style = { transition, transform: CSS.Transform.toString(transform) };

    const [openEdit, setOpenEdit] = useState(false);
    const { isOpen, onClose, setIsOpen } = useDisCloser();

    const onEditDection = useCallback(() => setOpenEdit(true), []);
    const openDeleteModal = useCallback(() => setIsOpen(true), [setIsOpen]);

    return (
        <div key={s.id} className='my-2' ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <h1 className="text-slate-800 text-lg">
                القسم #{s.k} : <span className="text-primary">{s.title}</span>
            </h1>
            <div className="flex w-full gap-x-3 border rounded-lg py-5 px-2">
                <div className="min-h-full grid place-content-center border-l pl-2">
                    <IoIosMove className="text-3xl" />
                </div>
                <div className="w-full h-full grid place-content-center grid-cols-3 gap-2">
                    <div>
                        <h1 className="text-lg font-semibold text-slate-800">{s.qe}</h1>
                        <h1 className="text-base">{s.answer}</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 place-content-center gap-3 pl-2">
                    <EditBtn onClick={onEditDection} />
                    <DeleteBtn onClick={openDeleteModal} />
                </div>
            </div>
            <ModalDelete isOpen={isOpen} onClose={onClose} title="هل انت متأكد من حذف السؤال؟" id={s.id} />
            {openEdit && <FaqsAE isOpen={openEdit} onClose={() => setOpenEdit(false)} type="edit" id={s.id} />}
        </div>
    );
};

export default SecUi;
