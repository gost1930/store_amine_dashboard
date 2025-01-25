// import React from 'react'
// component
import { PageTile } from "../../../components"
import SlidBar from "./SlidBar"
const SlideBarCustomize = () => {
  return (
    <section className="w-full h-fit m-2">
      <PageTile title="تخصيص  القائمة الجانبية" />
      {/* slid bar */}
      <div className="flex items-center justify-start">
        <SlidBar />
        <div className="w-[70%]"></div>
      </div>
    </section>
  )
}

export default SlideBarCustomize
