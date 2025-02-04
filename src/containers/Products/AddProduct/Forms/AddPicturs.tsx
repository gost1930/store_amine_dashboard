// icons
import { CiInboxOut } from "react-icons/ci";
// components
import { PageTile } from "../../../../components";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const AddPicturs = () => {
    const [pictures, setPictures] = useState<File[]>([]);

    const getPic = (e: React.ChangeEvent<HTMLInputElement>) => {
        const picLimited = 5;
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            if (pictures.length + newFiles.length > picLimited) return alert("لا يمكن اضافة اكثر من 5 صور");
            setPictures((prev) => [...prev, ...newFiles]);
        }
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = pictures.findIndex((pic) => pic.name === active.id);
            const newIndex = pictures.findIndex((pic) => pic.name === over.id);
            setPictures((prev) => arrayMove(prev, oldIndex, newIndex));
        }
    };

    const handleRemove = (index: number) => {
        setPictures((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="">
            <PageTile title="الصور" />
            <div className="relative cursor-pointer">
                <input
                    type="file"
                    onChange={getPic}
                    accept="image/png, image/jpeg, image/webp, image/gif"
                    multiple
                    className="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-full h-full"
                />
                <div className="p-4 border-2 border-dashed rounded-lg space-y-4 flex flex-col items-center justify-center">
                    <CiInboxOut className="text-7xl text-gray-600" />
                    <p className="text-center text-gray-500">إضغط هنا لرفع ملفات.</p>
                </div>
            </div>

            {pictures.length > 0 && (
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={pictures.map((pic) => pic.name)}>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
                            {pictures.map((pic, index) => (
                                <SortableItem key={pic.name} file={pic} index={index} handleRemove={handleRemove} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            )}
        </div>
    );
};

const SortableItem = ({ file, index, handleRemove }: { file: File; index: number; handleRemove: (index: number) => void }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: file.name });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="relative group">
            <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border"
            />
            <div
                onMouseDown={() => handleRemove(index)}
                className="absolute top-1 right-1 w-8 h-8 grid place-content-center bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                ✕
            </div>
        </div>
    );
};

export default AddPicturs;
