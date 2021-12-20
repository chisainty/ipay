import { BrowserRouter, Route, Routes as Routers } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
      </Routers>
    </BrowserRouter>
  );
};

export default Routes;
