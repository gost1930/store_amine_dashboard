// import React from 'react'
// components
import {PageTile , PageDesc , Button , Divider , Modal , Input , TextArea} from "../../../components"
import { useDisCloser } from "../../../hooks";
const Faqs = () => {

    const {isOpen , onClose , openModal} = useDisCloser()
  return (
    <section className="w-full h-fit pl-5">
      <PageTile title="الأسئلة الشائعة" />
      <div className="flex justify-between  my-2 w-full">
      <PageDesc text="قم بإضافة الأسئلة الشائعة مع الاجابات لكي تسهل على زبائنك معرفة مشاكلهم الشائعة او المعروفة كثرا." />
      <Button text="أضف سؤال" className="bg-primary" onClick={openModal} />
      </div>
        {/* divider */}
        <Divider />
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}> 
                <h1>إضافة سؤال مع الجواب الخاص به</h1>
            <div className="px-4 pb-4">
                
                {/* from */}
                <form action="">
                    <Input type="text" name="name" id="name" placeholder="اسم السؤال" label="اسم السؤال" />
                    {/* <label htmlFor="answer" className="text-lg font-semibold mt-3 mb-1">الإجابة</label>
                    <textarea name="answer" id="answer" className="w-full h-52 border focus:outline-none"></textarea> */}
                    <TextArea  label="الإجابة" className="h-32"  />
                    <Button text="إضافة"  className="bg-primary" />
                </form>
            </div>
        </Modal>
    </section>
  )
}

export default Faqs;
