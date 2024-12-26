import MainLayout from "@/components/layout/MainLayout";
import Cart from "@/views/Cart";
import Home from "@/views/Home";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
              </Routes>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
