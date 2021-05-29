import React from "react";
import { MainInfo } from "./Components/MainInfo";
import { Promotion } from "./Components/Promotion";
// import { UserAction } from "./Components/UserAction";
import './MainPage.scss';

export const MainPage = () => {
    return (
        <section className="main-page">
            <MainInfo />
            {/* <UserAction /> */}
            <Promotion />
        </section>
    )
}