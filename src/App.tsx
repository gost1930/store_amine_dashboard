import { BrowserRouter as Router, Routes } from "react-router-dom";
import { GeneralSideBar } from "./containers";
const App = () => {
  return (
    <section dir="rtl">
      <Router>
        <GeneralSideBar />
        <Routes></Routes>
      </Router>
    </section>
  );
};

export default App;
