// component
import {TextEditor , PageTile , PageDesc} from "../../../components";
const About = () => {
  return (
    <section>
        <PageTile title="من نحن" />
        <PageDesc text="قم بإضافة الأسئلة الشائعة مع الاجابات لكي تسهل على زبائنك معرفة مشاكلهم الشائعة او المعروفة كثرا." />
      <TextEditor />
    </section>
  )
}

export default About
