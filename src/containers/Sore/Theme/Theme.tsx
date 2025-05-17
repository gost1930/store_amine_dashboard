// components
import { Outlet } from "react-router-dom";
import {PageTile , PageDesc} from "../../../components/index.ts";
import Links from "./Links.tsx";

const Theme = () => {
  return (
    <section className="w-full h-fit p-3">
      <PageTile title="الثيم" />
      <PageDesc text="يمكنك تغيير الثيم الخاص بك مثل اللون الخاص بموقعك وأيضا بطاقات الفئات والمنتجات." />

      {/* links */}
      <Links />
      <Outlet />
    </section>
  )
}

export default Theme;