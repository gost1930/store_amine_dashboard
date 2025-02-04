// components
import { PageTile, Input, TextEditor, Button } from '../../../../components';
// hooks
import { useHandleHTextEditor } from '../../../../hooks';
// icon
import { CiTrash } from "react-icons/ci";
// import { IoAdd } from "react-icons/io5";


const GeneralData = () => {
    const { content, clear, handleChange } = useHandleHTextEditor()
    console.log("conent :", content)
    return (
        <div className='w-full h-fit rounded-lg border shadow px-4 pb-4 flex flex-col'>
            <PageTile title='البيانات العامة' />
            {/* form */}
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input type="text" name="name" id="name" placeholder="اسم المنتج" label="اسم المنتج" />
                    <Input type="text" name="name" id="name" placeholder="اسم المنتج" label="اسم المنتج" />
                </div>
                <PageTile title='وصف المنتج (اختياري)'/>
                <TextEditor content={content} handleChange={handleChange} />
                <div className="flex gap-x-3">
                    {content.length > 0 && <Button onClick={clear} text="إزالة كل المحتوى" className="mt-4 w-fit bg-red1 text-lg" icon={<CiTrash />} />}
                    {/* <Button onClick={clear} text="حفظ" className="mt-4 w-fit bg-primary text-lg" icon={<IoAdd />} /> */}
                </div>
            </div>
        </div>
    )
}

export default GeneralData;
