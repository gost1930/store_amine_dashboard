// import React from 'react'
// import { useState } from "react";
import { PageDesc, PageTile, Button } from "../../../components";
// custom hooks
import { useDisCloser } from "../../../hooks";
// icons
import AddSections from "./AddSections/AddSections";
// sections
import Sections from "./Sections/Sections";

const MainPage = () => {
  const { isOpen, openModal, onClose } = useDisCloser();

  return (
    <section className="h-fit min-h-fit m-5 w-[90%]">
      <PageTile title=" الصفحة الرئيسية" />
      <div className="flex justify-between  my-2">
        <PageDesc text="خصص الصفحة الرئيسية بالأدوات التي أتحناها لك" />
        <Button text="إضافة قسم جديد" className="mt-10 w-fit bg-primary text-xl" onClick={openModal} />
        {/* Modal */}
        <AddSections isOpen={isOpen} onClose={onClose} />
      </div>
      {/* divider */}
      <div className="w-full h-0.5 bg-zinc-200" />

      <Sections />
    </section>
  )
}

export default MainPage;
