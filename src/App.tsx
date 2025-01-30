import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Colors,
  GeneralPage,
  LogoCustomize,
  Theme,
  ProductCutomize,
  CategoryCusomize,
  NavBarCustomize,
  SlideBarCustomize,
  ThanksPageCustomize,
  MainPage,
  ConactInfo,
  Faqs,
} from "./containers";
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
            {/* store */}
            <Route path="/store" element={<Store />}>
              <Route path="logo" element={<LogoCustomize />} />
              {/* theme routs */}
              <Route path="theme" element={<Theme />}>
                <Route path="" element={<Colors />} />
                <Route path="product" element={<ProductCutomize />} />
                <Route path="category" element={<CategoryCusomize />} />
                <Route path="navbar" element={<NavBarCustomize />} />
                <Route path="list" element={<SlideBarCustomize />} />
                {/* <Route path="notification" element={<h1>cards</h1>} /> */}
                <Route path="thankyou" element={<ThanksPageCustomize />} />
              </Route>
              {/* Main Page */}
              <Route path="main_page" element={<MainPage />} />
              {/* Contact Info */}
              <Route path="contact_info" element={<ConactInfo />} />
              {/* Faqs */}
              <Route path="faqs" element={<Faqs />} />
            </Route>
          </Routes>
        </GeneralPage>
      </Router>
    </section>
  );
};

export default App;
