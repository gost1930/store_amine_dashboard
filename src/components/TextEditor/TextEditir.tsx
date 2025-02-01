// hooks
import { useState } from "react";
// quill Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// comonent
import Button from "../gen/Button";
// icon
import { CiTrash } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";


const TextEditor = () => {
    const [content, setContent] = useState("");

    const handleChange = (value: string) => {
        setContent(value);
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["blockquote"],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const clear = () => setContent("")
    return (
        <div className="p-4 max-w-2xl">
            <h2 className="text-xl font-semibold mb-2">React Quill Editor</h2>
            <ReactQuill value={content} onChange={handleChange} modules={modules} className="bg-white" />
            <div className="flex gap-x-3">
                <Button onClick={clear} text="إزالة كل المحتوى" className="mt-4 w-fit bg-black text-lg" icon={<CiTrash />} />
                <Button onClick={clear} text="حفظ" className="mt-4 w-fit bg-primary text-lg" icon={<IoAdd />} />
            </div>
            <div className="mt-4 border  rounded-xl ">
                <h3 className="text-lg mb-8 font-medium p-2">معاينة:</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} className="border-t p-3" />
            </div>
        </div>
    );
};

export default TextEditor;
