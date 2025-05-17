// component
import { Modal, Button, TextArea, Input } from "../../../../components";
// icons
import { MdAdd } from "react-icons/md";
import { useDisCloser } from "../../../../utils/hooks";
interface Props {
    isOpen: boolean;
    onClose: () => void;
    type: "add" | "edit";
    id?: string | number;

}
const FaqsAE: React.FC<Props> = ({ isOpen, onClose, type, id }) => {
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}>
            <h1>{type === "add" ? "اضافة سؤال جديد" : "تعديل سؤال"} {id}</h1>
            <div className="px-4 pb-4">

                {/* from */}
                <form action="">
                    <Input type="text" name="name" id="name" placeholder="اسم السؤال" label="اسم السؤال" />
                    {/* <label htmlFor="answer" className="text-lg font-semibold mt-3 mb-1">الإجابة</label>
                <textarea name="answer" id="answer" className="w-full h-52 border focus:outline-none"></textarea> */}
                    <TextArea label="الإجابة" className="h-32" />
                    <Button text="إضافة" className="bg-primary" icon={<MdAdd />} />
                </form>
            </div>
        </Modal>
    )
}

export default FaqsAE
