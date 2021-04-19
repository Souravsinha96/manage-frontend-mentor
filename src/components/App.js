import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import bgDesktop from "../images/bg-tablet-pattern.svg";
import Banner from "./Banner";
import { useTheme } from "@material-ui/core/styles";
import Section from "./Section";

//FFF0EC
export default function App() {
  const theme1 = useTheme();
  const matches = useMediaQuery(theme1.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          backgroundImage: `url(${bgDesktop})`,
          backgroundPosition: matches ? "52px -89px" : "865px -78px",
          backgroundRepeat: "no-repeat",
          backgroundSize: matches ? "481px" : "720px",
          height: matches ? "143vh" : "168vh",
          width: "100vw",
        }}
      ></div>
      <Header />
      <Banner />
      <Section />
      <Footer />
    </ThemeProvider>
  );
}
