import MainLayout from "@/components/layout/MainLayout";
import Home from "@/views/Home";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default Router;
