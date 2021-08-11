import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Pregnancy from "./component/Pregnancy";
import Baby from "./component/Baby";

import { Switch, Route } from "react-router-dom";
import Toddler from "./component/Toddler";
import PregnancyTips from "./component/PregnancyTips";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import Error from "./component/Error";

function App() {
  
  return (
    <>
      <Header />
      <Switch>
        {/* <Home/> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/pregnancy" component={Pregnancy} />
        <Route exact path="/baby" component={Baby} />
        <Route exact path="/toddler" component={Toddler} />
        <Route exact path="/pregnancyTips" component={PregnancyTips} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
