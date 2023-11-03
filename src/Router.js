import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/*" element={PageNotFound}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
