// import React from 'react'
// component
import { useState } from "react"
import { CheckBox, PageTile } from "../../../components"
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
  type Colors = {
    parentBgColor: string;
    nameColor: string;
    categoryTextColor: string;
    categoryBgColor: string;
    dividerColor: string;
  }

  const [colors, setColors] = useState<Colors>({
    parentBgColor: "#fff",
    nameColor: "#000",
    categoryTextColor: "#000",
    categoryBgColor: "#fff",
    dividerColor: "#ccc"
  })


  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    setStyles((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const changesIfColors =[
    {name:"" , title:"parentBgColor" , value:colors.parentBgColor},
    {name:"" , title:"nameColor" , value:colors.nameColor},
    {name:"" , title:"categoryTextColor" , value:colors.categoryTextColor},
    {name:"" , title:"categoryBgColor" , value:colors.categoryBgColor},
    {name:"" , title:"dividerColor" , value:colors.dividerColor},
  ]

  const handleColor = (e: any) => {
    const { title, value } = e.target;
    setColors(prev => ({
      ...prev,
      [title]: value
    }))
  }

  return (
    <section className="w-full h-fit m-2">
      <PageTile title="تخصيص  القائمة الجانبية" />
      {/* slid bar */}
      <div className="flex  gap-4">
        <SlidBar
          {...styles}
          {...colors}
        />
        <div className="w-[70%]">
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
              changesIfColors.map((c , i)=>(
                <div key={i}>
                  <input type="color" name={c.name} id={c.name} value={colors[c.value]} onChange={handleColor} />
                  <label htmlFor={c.name}>{c.name}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlideBarCustomize
