import * as React from "react";
import style from "./AboutUs.module.scss";
import img from "../../assets/png/aboutUs.png";
import {svgIcons} from "../../assets/svg/svgIcons";
import {FC} from "react";

interface IAboutUs {
    x: number
    y: number
}


export const AboutUs: FC<IAboutUs> = ({x, y}) => {
    return (
        <div className={style.aboutUs} id="about">
            <div className={style.inner}>
                <div className={style.top}>
                    <h1 className={style.title}
                        //data-aos="zoom-in-right"
                    >
                        <span>Non-custodial wallet</span> in your <a href="#">Telegram messenger</a>
                    </h1>
                    <div className={style.text}
                         //data-aos="zoom-in"
                    >
                        <p>TeleWallet is a fully decentralized blockchain wallet developed by Telegram fans to support
                            billions of users.</p>
                        <br/>
                        <p>We can boast of ultra fast transactions, support for major networks and a user friendly and
                            intuitive interface.</p>
                    </div>

                    <img src={img} alt=""/>

                    <div className={style.buttons}>
                        <button className={style.btn}
                                //data-aos="fade-right"
                        >
                            <div className={style.inner}>
                                {svgIcons.wallet}
                                <p>Create a Wallet</p>
                            </div>

                        </button>
                        <button className={style.btn}
                                //data-aos="fade-left"
                        >
                            <div className={style.inner}>
                                {svgIcons.tewa}
                                <p>Buy TEWA</p>
                            </div>

                        </button>
                    </div>

                </div>

                <img src={img} alt=""
                     className={style.bottom}
                     style={{
                         transform: `translate(${10 * x}px, ${10 * y}px)`
                     }}
                />
            </div>
        </div>
    )
}
