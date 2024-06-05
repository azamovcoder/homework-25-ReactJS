import { Route, Routes } from "react-router-dom";

import Admin from "./pages/admin";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import Header from "./components/header/Header";
import Home from "./pages/home";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import SinglePage from "./pages/singlePage";
import Wishlist from "./pages/wishlist";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/singlePage/:Id" element={<SinglePage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
