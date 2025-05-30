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
  About,
  // Orders
  AllOrders,
  // products
  AllProducts,
  AddProduct,
  Inventory,
  // categories
  AllCategories,
  // WilayaDelev
  Delivery,
} from "./containers";
// pages
import { Store, Orders, Products, Categoties, WilayaDelev, Reviews, PageNotFound, Statistics } from "./pages";
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
                <Route path="thankyou" element={<ThanksPageCustomize />} />
              </Route>
              {/* Main Page */}
              <Route path="main_page" element={<MainPage />} />
              {/* Contact Info */}
              <Route path="contact_info" element={<ConactInfo />} />
              {/* Faqs */}
              <Route path="faqs" element={<Faqs />} />
              {/* About */}
              <Route path="about" element={<About />} />
            </Route>
            {/* orders */}
            <Route path="/orders" element={<Orders />} >
              <Route path="" element={<AllOrders />} />
            </Route>
            {/* Products */}
            <Route path="/products" element={<Products />} >
              <Route path="" element={<AllProducts />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="inventory" element={<Inventory />} />
            </Route>
            {/* Categoties */}
            <Route path="/categoties" element={<Categoties />} >
              <Route path="" element={<AllCategories />} />
            </Route>
            {/* Wilaya Delivery */}
            <Route path="/wilaya_delivery" element={<WilayaDelev />}>
              <Route path="" element={<Delivery />} />
            </Route>
            {/* Reviews */}
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/*" element={<PageNotFound />} />
            {/* Statistics */}
            <Route path="/statistics" element={<Statistics />} />

          </Routes>
        </GeneralPage>
      </Router>
    </section>
  );
};

export default App;
