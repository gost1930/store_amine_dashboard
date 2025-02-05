// components
import { Modal, PageTile, Button, Input } from "../../components"
// icons
import { IoAdd, IoImagesOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";


const AddCategory = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true} >
            <div className="flex flex-col">
                <PageTile title="إضافة فئة جديدة" className="self-center" />
                <form action="">
                    <div className="px-5 py-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <Input type="text" name="name" id="name" placeholder="اسم الفئة بالعربي" label="اسم الفئة بالعربي" />
                                <Input type="text" name="name" id="name" placeholder="اسم الفئة بالإنجليزي" label="اسم الفئة بالإنجليزي" />
                            </div>
                            <div className=" relative rounded-lg border-dashed border-gray-400 border-2 cursor-pointer">
                                <Input type="file" name="categoryImage" className=" absolute h-full w-full border-none focus:ring-0 opacity-0 cursor-pointer" />
                                <div className="p-4 rounded-lg space-y-4 flex flex-col items-center justify-center">
                                    <IoImagesOutline className="text-7xl text-gray-600" />
                                    <p className="text-center text-gray-500">إضغط هنا لرفع صورة.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <IoMdInformationCircleOutline className=" cursor-pointer m-1 text-3xl text-slate-600" />
                            <p className="text-sm text-slate-500 mt-2">الإسم بالإنجليزي هو نفسه الذي يكتب كمسار معين في الرابط الخاص بكل فئة مثال: <span className="text-slate-600">https://example.com/en/category-name</span></p>
                        </div>
                        <Button text="إضافة" className="mt-10 w-full h-fit bg-primary" icon={<IoAdd />} />
                    </div>
                </form>
            </div>

        </Modal>
    )
}

export default AddCategory;
