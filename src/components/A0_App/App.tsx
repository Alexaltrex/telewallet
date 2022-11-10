import React, {useEffect, useState} from 'react';
import style from "./App.module.scss";
import {AboutUs} from "../B0_AboutUs/AboutUs";
import {Blocks} from "../B1_Blocks/Blocks";
import {Products} from "../B2_Products/Products";
import {Team} from "../B5_Team/Team";
import {Faq} from "../B6_Faq/FaqComponent";
import {Footer} from "../A2_Footer/Footer";
import {Header} from "../A1_Header/Header";
import {Table} from "../B3_2_Table/Table";
import {Tokenomics} from "../B3_1_Tokenomics/Tokenomics";
import {Roadmap} from "../B4_Roadmap/Roadmap";
import AOS from "aos";
import "aos/dist/aos.css";
import {throttle} from "../../utils/throttle";
import {Preloader} from "../A3_Preloader/Preloader";
import Fade from "@mui/material/Fade";
import clsx from "clsx";

export const App = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX;
        const y = e.clientY;
        const x_m = window.innerWidth / 2;
        const y_m = window.innerHeight / 2;
        setX((x - x_m) / x_m);
        setY((y - y_m) / y_m);

    }
    const onMouseMoveThrottle = throttle(onMouseMoveHandler, 100);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1500,
    //         //once: true,
    //     });
    //     AOS.refresh()
    // }, []);

    const preloaderDuration = 4000;
    const [showPreloader, setShowPreloader] = useState(true);
    useEffect(() => {
        setTimeout(() => setShowPreloader(false), preloaderDuration)
    }, []);

    const [pageYOffset, setPageYOffset] = useState(0);
    useEffect(() => {
        document.addEventListener(
            'scroll',
            throttle(() => {
                setPageYOffset(window.pageYOffset);
            }, 100)
        );
        return document.removeEventListener(
            'scroll',
            throttle(() => {
                setPageYOffset(window.pageYOffset);
            }, 100)
        );
    });

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_showPreloader]: showPreloader,
        })}
             onMouseMove={onMouseMoveThrottle}
        >
            <Preloader showPreloader={showPreloader} preloaderDuration={preloaderDuration}/>
            <Header pageYOffset={pageYOffset}/>
            <AboutUs x={x} y={y}/>
            <Blocks/>
            <Products/>
            <Tokenomics/>
            <Table/>
            <Roadmap/>
            <Team/>
            <Faq/>
            <Footer/>
        </div>
    );
}

