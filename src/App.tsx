import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Colors, GeneralPage, LogoCustomize , Theme , ProductCutomize} from "./containers";
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
            <Route path="/store" element={<Store />}>
              <Route path="logo" element={<LogoCustomize />} />
              {/* theme routs */}
              <Route path="theme" element={<Theme />}>
                <Route path="" element={<Colors />} />
                <Route path="product" element={<ProductCutomize />} />
                <Route path="category" element={<h1>cards</h1>} />
                <Route path="nabbar" element={<h1>cards</h1>} />
                <Route path="list" element={<h1>cards</h1>} />
                <Route path="notification" element={<h1>cards</h1>} />
                <Route path="thankyou" element={<h1>cards</h1>} />
              </Route>
            </Route>
          </Routes>
        </GeneralPage>
      </Router>
    </section>
  );
};

export default App;
