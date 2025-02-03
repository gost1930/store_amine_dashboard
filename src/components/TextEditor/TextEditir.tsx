// quill Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";




const TextEditor = ({ content , handleChange }: { content: string  , handleChange: (value: string) => void}) => {
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

    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-semibold mb-2">React Quill Editor</h2>
            <ReactQuill value={content} onChange={handleChange} modules={modules} className="bg-white" />
            
            <div className="mt-4 border  rounded-xl ">
                <h3 className="text-lg mb-8 font-medium p-2">معاينة:</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} className="border-t p-3" />
            </div>
        </div>
    );
};

export default TextEditor;
