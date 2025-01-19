import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GeneralPage } from "./containers";
// pages
import { Store } from "./pages";
const App = () => {
  return (
    <section
      dir="rtl"
      className="overflow-x-hidden max-w-screen min-h-screen h-fit relative"
    >
      <Router>
        <GeneralPage>
          <Routes>
            <Route path="/" element={<Store />} />
          </Routes>
        </GeneralPage>
      </Router>
    </section>
  );
};

export default App;
