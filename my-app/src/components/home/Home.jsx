import React from "react";
import HomeHeader from './HomeHeader.jsx';
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSteps from "./HomeSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";

function Home() {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
        </>
    )
}

export default Home;
