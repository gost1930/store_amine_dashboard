// import React from 'react'
// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
// component
import { Button } from "../../../components"
import { useState } from "react";

interface ThankYouProps {
    logo?: boolean;
    parentTitle?: boolean;
    descBoolean?: boolean;
    orderNumber?: boolean;
    homeBtn?: boolean;
    sendToEmail?: boolean;
    title?: string
    desc?: string
}
const ThankYou: React.FC<ThankYouProps> = ({
    logo = true,
    parentTitle = true,
    descBoolean = true,
    orderNumber = true,
    homeBtn = true,
    sendToEmail = true,
    title,
    desc
}) => {



    return (
        <section className="w-1/2 h-fit flex flex-col items-center justify-center gap-y-4 border rounded-xl py-20 shadow-lg">
            {/* icon logo  */}

            {logo && <IoMdCheckmarkCircleOutline className="text-green-500 text-[5rem]" />}
            {parentTitle && <h1 className="text-5xl font-bold text-slate-800">{title}</h1>}
            {descBoolean && <p className="text-xl text-zinc-600">{desc}</p>}
            {orderNumber && <div className="w-full h-0.5 bg-zinc-200" />}
            {orderNumber && <div className="flex flex-col items-center gap-x-2">
                <h1 className="text-zinc-600">رقم الطلب</h1>
                <h1 className="text-zinc-800 p-3 rounded-lg flex items-center gap-x-2 shadow-md cursor-pointer">123456789 <span> <FaRegCopy /></span></h1>
            </div>}
            {homeBtn && <Button text="الصفحة الرئيسية" className="bg-primary shadow-lg shadow-primary/70 active:shadow duration-300" />}
            {sendToEmail && (
                <div className="mt-5">
                    <div className="w-full h-0.5 bg-zinc-200" />
                    <p className="text-zinc-500 ">هل ترغب في الحصول على رقم الطلب الخاص بك عن طريق البريد الإلكتروني؟ ستحتاج إلى ذلك للتحقق من حالة طلبك لاحقًا <span className="text-primary underline">هنا</span>.</p>
                    <div className="flex gap-x-2 mt-5">
                        <input type="text" name="" id="" className="w-full py-1 focus:outline-none focus:ring-1 focus:ring-slate-500 rounded-lg border px-2 placeholder:text-zinc-400" placeholder="أدخل إيملك ..." />
                        <Button text="إرسال" className="bg-primary" />
                    </div>
                </div>
            )}

        </section>
    )
}

export default ThankYou;
