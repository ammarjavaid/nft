import React, { useState } from "react";
import Clients from "./component/pages/Clients";
import Footer from "./component/pages/Footer";
import Free from "./component/pages/Free";
import Home from "./component/pages/Home";
import Like from "./component/pages/Like";
import Navbar from "./component/pages/Navbar";
import Release from "./component/pages/Release";
import ScrollToTop from "./component/pages/ScrollToTop";
import Signup from "./component/pages/Signup";
import SuperRare from "./component/pages/SuperRare";

function App() {

  const [theme, setTheme] = useState("dark")

  const current = ()=>{
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <>
      <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar current={current} mode={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
      </div>
    </>
  );
}

export default App;
