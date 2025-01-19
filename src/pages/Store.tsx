import { Route, Routes } from "react-router-dom";
import { PgesTitle } from "../components";

const Store = () => {
  return (
    <div className="w-full h-fit">
      {/* title */}
      <PgesTitle title="صمِّم " title2="متجرك" />

      <div className="w-full h-fit my5">
        <Routes>
          <Route path="/" element={<h1>dasdawq</h1>} />
          <Route path="/" element={<h1>as</h1>} />
          <Route path="/" element={<h1>asss</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Store;
