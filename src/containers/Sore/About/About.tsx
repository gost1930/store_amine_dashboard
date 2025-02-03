// component
import { TextEditor, PageTile, PageDesc , Button } from "../../../components";
// icon
import { CiTrash } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
// hooks
import {useHandleHTextEditor} from "../../../hooks"
const About = () => {
  const {content , handleChange , clear} = useHandleHTextEditor()
  return (
    <section>
      <PageTile title="من نحن" />
      <PageDesc text="قم بإضافة الأسئلة الشائعة مع الاجابات لكي تسهل على زبائنك معرفة مشاكلهم الشائعة او المعروفة كثرا." />
      <TextEditor content={content} handleChange={handleChange} />
      <div className="flex gap-x-3">
        <Button type="button" onClick={clear} text="إزالة كل المحتوى" className="mt-4 w-fit bg-black text-lg" icon={<CiTrash />} />
        <Button onClick={clear} text="حفظ" className="mt-4 w-fit bg-primary text-lg" icon={<IoAdd />} />
      </div>
    </section>
  )
}

export default About
