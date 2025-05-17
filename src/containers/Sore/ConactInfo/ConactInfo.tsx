// import React from 'react'
// components
import { PageDesc, PageTile, Divider } from "../../../components";
import {Input , Button} from "../../../components";

const ConactInfo = () => {
    return (
        <section className="w-full h-fit pl-5 mt-5">
            <PageTile title="معلومات الإتصال والتواصل" />
            <PageDesc text="سيتم عرض هذه التفاصيل في متجرك على صفحة ”تواصل معنا“ حتى يتمكن زبائنك من الاتصال بك." />
            <Divider />
            <form action="">
                {/* contact info content */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-5">
                <Input type="text" name="email" id="email" placeholder="البريد الالكتروني" label="البريد الالكتروني" />
                <Input type="number" name="name" id="name" placeholder="رقم الهاتف" label="رقم الهاتف" />
                <Input type="number" name="name" id="name" placeholder="رقم الهاتف 2" label="رقم الهاتف 2" />
            </div>
            {/* scl media */}
            <PageTile title="وسائل التواصل الإجتماعي" />
            <div className="grid grid-cols-2 gap-3 my-3">
                <Input type="text" name="name" id="name" placeholder="واتساب" label="واتساب" />
                <Input type="text" name="name" id="name" placeholder="فايبر" label="فايبر" />
                <Input type="text" name="name" id="name" placeholder="فيسبوك" label="فيسبوك" />
                <Input type="text" name="name" id="name" placeholder="تويتر" label="تويتر" />
                <Input type="text" name="name" id="name" placeholder="انستقرام" label="انستقرام" />
                <Input type="text" name="name" id="name" placeholder="سناب شات" label="سناب شات" />
                <Input type="text" name="name" id="name" placeholder="تيكتوك" label="تيكتوك" />
            </div>
            <Button type="submit" text="حفظ" className="mt-10 w-32 h-fit bg-primary" />
            </form>
        </section>
    )
}

export default ConactInfo;
