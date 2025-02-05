// component
import { Modal, Input, Button, PageTile, CheckBox } from "../../components"
// icons
import { IoAdd, IoImagesOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";


const AddWilaya = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}>
            <div className="flex flex-col">
                <PageTile title="إضافة فئة جديدة" className="self-center" />
                <form action="">
                    <div className="flex flex-col">
                        <Input label="إسم الولاية" placeholder="إضافة إسم الولاية" type="text" />
                        <Input label="سعر التوصيل للمنزل" type="number" />
                        <Input label="سعر التوصيل للمكتب" type="text" />
                        <div className="flex gap-x-2">
                            <div dir="ltr" className="checkbox-wrapper-7 mt-2">
                                <CheckBox name="show" id="show" />
                                <label htmlFor="show" className="tgl-btn"></label>
                            </div>
                            <label htmlFor="show" className="self-end">إظهار الولاية في الموفع؟</label>
                        </div>
                    </div>
                    <Button text="إضافة" className="mt-10 w-full h-fit bg-primary" icon={<IoAdd />} />
                </form>
            </div>
        </Modal>
    )
}

export default AddWilaya;
