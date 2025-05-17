// import React from 'react'
// components
import { PageTile, PageDesc, Button, Divider } from "../../../components"
import { useDisCloser } from "../../../utils/hooks";
// icons
import { MdAdd } from "react-icons/md";
// faqs function
import Sections from "./FaqsDragAndDrop/FaqsSec";
// add or edit  {Modal}
import FaqsAE from "./AddEditFaqs/FaqsAE";
const Faqs = () => {

  const { isOpen, onClose, openModal } = useDisCloser()
  return (
    <section className="w-full h-fit pl-5">
      <PageTile title="الأسئلة الشائعة" />
      <div className="flex justify-between  my-2 w-full">
        <PageDesc text="قم بإضافة الأسئلة الشائعة مع الاجابات لكي تسهل على زبائنك معرفة مشاكلهم الشائعة او المعروفة كثرا." />
        <Button text="أضف سؤال" className="bg-primary" icon={<MdAdd />} onClick={openModal} />
      </div>
      {/* divider */}
      <Divider />
      <Sections />
      <FaqsAE isOpen={isOpen} onClose={onClose} type="add" />

    </section>
  )
}

export default Faqs;
