// import React from 'react'
// component
import { useState } from "react"
import { Button, CheckBox, PageTile, ColorInput } from "../../../components"
import SlidBar from "./SlidBar"
import { changes } from "../../../utils/Variables/slideVar"

// state type
type Styles = {
  logo: boolean;
  name: boolean;
  searchBar: boolean;
  mainPage: boolean;
  categoriesPage: boolean;
  cartPage: boolean;
  orderStatusPage: boolean;
  deliveryPricePage: boolean;
  contactPage: boolean;
  categoriesSection: boolean;
  sclMediaSection: boolean;

}
type Colors = {
  parentBgColor: string;
  nameColor: string;
  categoryTextColor: string;
  categoryBgColor: string;
  dividerColor: string;
}
const SlideBarCustomize = () => {


  const [styles, setStyles] = useState<Styles>({
    logo: true,
    name: true,
    searchBar: true,
    mainPage: true,
    categoriesPage: true,
    cartPage: true,
    orderStatusPage: true,
    deliveryPricePage: true,
    contactPage: true,
    categoriesSection: true,
    sclMediaSection: true,

  })

  const [colors, setColors] = useState<Colors>({
    parentBgColor: "#fff",
    nameColor: "#000",
    categoryTextColor: "#000",
    categoryBgColor: "#f5f5f5",
    dividerColor: "#ccc"
  })

  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setStyles((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const changesIfColors: { name: string, title: keyof Colors, value: string }[] = [
    { name: "لون الخلفية الرئيسية", title: "parentBgColor", value: colors.parentBgColor },
    { name: "لون إسم الموقع", title: "nameColor", value: colors.nameColor },
    { name: "لون الروابط", title: "categoryTextColor", value: colors.categoryTextColor },
    { name: "لون خلفية التصنيفات", title: "categoryBgColor", value: colors.categoryBgColor },
    { name: "لون الشريط السفلي", title: "dividerColor", value: colors.dividerColor },
  ]

  const handleColor = (e: any) => {
    const { name, value } = e.target;
    setColors(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const setDefaultColors = () => {
    setColors({
      parentBgColor: "#fff",
      nameColor: "#000",
      categoryTextColor: "#000",
      categoryBgColor: "#f5f5f5",
      dividerColor: "#ccc"

    })
  }

  return (
    <section className="w-full h-fit m-2">
      <PageTile title="تخصيص  القائمة الجانبية" />
      {/* slid bar */}
      <div className="flex  gap-4">
        <SlidBar
          {...styles}
          colors={colors}
        />
        <div className="w-[70%] flex flex-col">
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
          <div className="h-[1px] ml-2 w-full bg-zinc-300 rounded-full"></div>
          <div className="w-full">
            {
              changesIfColors.map((c, i) => (
                // <div key={i}>
                //   <input type="color" name={c.title} id={c.title} value={c.value} onChange={handleColor} />
                // </div>
                <div className="flex items-center gap-3 my-1" key={i}>
                  <ColorInput color={colors[c.title]} onChange={handleColor} name={c.title} id={c.title} />
                  <label htmlFor={c.name}>{c.name}</label>
                </div>
              ))
            }
          </div>
          <div className="flex gap-x-4 self-end">
            <Button text="استعادة الوضع الافتراضي" type="button" onClick={setDefaultColors} className="my-2 border bg-black hover:bg-gray-800" />
            <Button text="حفظ" type="button" className="my-2 border bg-primary hover:bg-rose-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlideBarCustomize
