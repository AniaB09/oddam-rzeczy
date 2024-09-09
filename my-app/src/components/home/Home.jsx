import React from "react";
import HomeHeader from './HomeHeader.jsx';
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSteps from "./HomeSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeOrganizations from "./HomeOrganizations.jsx";
import HomeContact from "./HomeContact.jsx";

function Home() {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeOrganizations />
            <HomeContact />
        </>
    )
}

export default Home;
