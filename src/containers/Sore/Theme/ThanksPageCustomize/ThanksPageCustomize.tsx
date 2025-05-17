// import React from 'react'

import { useState } from "react"
import { Button, CheckBox, PageDesc, PageTile } from "../../../../components"
// thank you component
import ThankYou from "./ThankYou"

// state type
type Styles = {
    logo?: boolean;
    parentTitle?: boolean;
    descBoolean?: boolean;
    orderNumber?: boolean;
    homeBtn?: boolean;
    sendToEmail?: boolean;

}

const ThanksPageCustomize = () => {
    const [styles, setStyles] = useState<Styles>({
        logo: true,
        parentTitle: true,
        descBoolean: true,
        orderNumber: true,
        homeBtn: true,
        sendToEmail: true,
    })
    const [title, setTitle] = useState("شكرًا لك على الطلب😁");
    const [desc, setDesc] = useState("تم استلام طلبك بنجاح")
    const handleTitle = (e: any) => {
        const t = e.target.value;
        t === "" ? setTitle("شكرًا لك على الطلب😁") : setTitle(t);
    }
    const handleDesk = (e: any) => {
        const t = e.target.value;
        t === "" ? setDesc("تم استلام طلبك بنجاح") : setDesc(t);
    }
    const handleChange = (e: any) => {
        const { name, checked } = e.target;
        setStyles((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };
    const setDefaultStyles = () => {
        setStyles({
            logo: true,
            parentTitle: true,
            descBoolean: true,
            orderNumber: true,
            homeBtn: true,
            sendToEmail: true,
        });
        setTitle("شكرًا لك على الطلب😁");
        setDesc("تم استلام طلبك بنجاح");
        
    };

    const changes = [
        { label: "اللوقو", name: "logo" },
        { label: "العنوان", name: "parentTitle" },
        { label: "الوصف", name: "descBoolean" },
        { label: "رقم الطلبية", name: "orderNumber" },
        { label: "زر التنقل الى الصفحة الرئيسية", name: "homeBtn" },
        { label: "ارسال لبريد الالكتروني", name: "sendToEmail" },
    ]
    return (
        <section className="w-full h-fit my-5">
            <PageTile title="تصميم صفحة الشكر" />
            <PageDesc text="يمكنك تغيير صفحة الشكر الخاصة بموقعك." />
            <div className="w-full h-fit flex gap-3">
                <ThankYou {...styles} title={title} desc={desc} />
                {/* form for cahnge the styles or the permissions to show any div or p in the thankyou page */}
                <div className="flex flex-col w-1/2">
                    <div>
                        <h1 className="text-zinc-600 mb-3">تحكم عبر الازرار التالية في اظهار و اخفاء العناصر</h1>
                        {
                            changes.map((c, i) => (
                                <div className="flex items-center gap-3 my-1">
                                    <div dir="ltr" key={i} className="checkbox-wrapper-7">
                                        <CheckBox name={c.name} id={c.name} checked={styles[c.name as keyof Styles]} onChange={handleChange} />
                                        <label htmlFor={c.name} className="tgl-btn"></label>
                                    </div>
                                    <label htmlFor={c.name} className="tgl-btn">
                                        {c.label}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                    <label htmlFor="">العنوان</label>
                    <input type="text"  onChange={handleTitle} name="" id="" className="w-full py-1 focus:outline-none focus:ring-1 focus:ring-slate-500 rounded-lg border px-2 placeholder:text-zinc-400" />
                    <label htmlFor="">الوصف</label>
                    <input type="text"  onChange={handleDesk} name="" id="" className="w-full py-1 focus:outline-none focus:ring-1 focus:ring-slate-500 rounded-lg border px-2 placeholder:text-zinc-400" />
                    <div className="w-full flex justify-end gap-x-2 px-3">
                        <Button text="إعادة تعيين" className="mt-10 w-32 h-fit bg-black" onClick={setDefaultStyles} />
                        <Button text="حفظ" className="mt-10 w-32 h-fit bg-primary" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThanksPageCustomize;
