import * as React from "react";
import style from "./Preloader.module.scss";
import Fade from "@mui/material/Fade";
import {FC} from "react";
import logo from "../../assets/png/logo.png";
import "./preloader.scss"
import clsx from "clsx";

interface IPreloader {
    showPreloader: boolean
    preloaderDuration: number
}

export const Preloader: FC<IPreloader> = ({
                                              showPreloader,
                                              preloaderDuration
}) => {
    return (
        <Fade in={showPreloader} timeout={1000} appear={false}>
            <div className={style.preloader}>
                {/*<div className={clsx(style.indicator, "indicator")}*/}
                {/*     style={{*/}
                {/*         animationDuration: `${preloaderDuration}ms`*/}
                {/*     }}*/}
                {/*/>*/}
                <img src={logo} alt="" className={clsx(style.logo, "logo")}/>
            </div>
        </Fade>

    )
}
