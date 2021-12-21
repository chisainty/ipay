import { BrowserRouter, Route, Routes as Routers } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/styles/utils/Global";
import Home from "../pages/Home";
import Test from "../pages/Test";

const theme = {
  colors: {
    primaryColor: "#2a41cb",
    whiteColor: "#ffffff",
    primaryDark: "#0d1440",
    whiteShade: "#f2f8ff",
    gradientPrimary: "linear-gradient(90deg, #2a41cb 31.27%, #6177f2 99.25%)",
    primary70: "#91a0f2",
  },
  mobile: "768px",
};

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
        </Routers>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
