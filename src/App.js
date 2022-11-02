import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import FeatureCard from "./FeatureCards";
import Footer from "./Footer";
import Pricing from "./Pricing";
import PlayGround from "./PlayGround";
const App = ()=> {
    return(
        <React.Fragment>
            <NavBar/>
            <PlayGround/>
            <Hero/> 
            <Pricing/>
            <FeatureCard/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;