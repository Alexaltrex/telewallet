import * as React from "react";
import style from "./Tokenomics.module.scss"
import {svgIcons} from "../../assets/svg/svgIcons";
import logo_small from "../../assets/png/logo_small.png";

const text = "TEWA token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration."

const items = [
    {
        param: "Symbol:",
        value: "TEWA"
    },
    {
        param: "Total supply:",
        value: "100,000,000 TEWA"
    },
    {
        param: "Name:",
        value: "TELEWALLET"
    },
    {
        param: "Retail price:",
        value: "1 TEWA = $0,07"
    },
    {
        param: "Blockchain:",
        value: "BINANCE BEP20"
    },
    {
        param: "Total supply:",
        value: "100,000,000 TEWA"
    },
];

export const Tokenomics = () => {
    return (
        <div className={style.tokenomics} id="tokenomics">
            <div className={style.inner}>
                <div className={style.leftBlock}>
                    <h2 className={style.title}
                        //data-aos="zoom-in-right"
                    >
                        <span>Tokenomics</span>
                    </h2>
                    <p className={style.text}
                       //data-aos="zoom-in"
                    >
                        {text}
                    </p>

                    <div className={style.items}>
                        {
                            items.map(({param, value}, index) => (
                                <div className={style.item} key={index}
                                     //data-aos="zoom-in"
                                     //data-aos-delay={`${300 * index}`}
                                >
                                    <p className={style.param}>{param}</p>
                                    <p className={style.value}>{value}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className={style.rightBlock}>

                    <div className={style.diagramMobile}>
                        {svgIcons.diagram_mobile}
                        <img src={logo_small} alt=""/>
                    </div>

                    <div className={style.diagramDesktop}>

                        <svg width="520" height="520" viewBox="0 0 520 520" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             className={style.circle}
                        >
                            <circle cx="259.818" cy="260.214" r="184.5" fill="#40BFA8"/>
                            <path
                                d="M117.308 376.949C137.403 401.484 163.483 420.425 193.031 431.943C222.58 443.462 254.598 447.17 285.997 442.708C317.396 438.247 347.114 425.768 372.284 406.474C397.455 387.181 417.227 361.725 429.693 332.564L260.043 260.043L117.308 376.949Z"
                                fill="#0052A4"/>
                            <path
                                d="M77.4802 288.264C82.4459 320.716 95.9806 351.255 116.688 376.73L259.857 260.357L77.4802 288.264Z"
                                fill="#FF00B3"/>
                            <path
                                d="M374.697 115.517C353.873 99.1213 329.761 87.404 304.003 81.1633L260.559 260.476L374.697 115.517Z"
                                fill="#9E91FF"/>
                            <path
                                d="M303.56 80.7974C289.226 77.3241 274.528 75.5822 259.779 75.6088L260.112 260.108L303.56 80.7974Z"
                                fill="white"/>
                            <path
                                d="M405.645 146.704C396.579 135.071 386.151 124.566 374.585 115.415L260.112 260.108L405.645 146.704Z"
                                fill="#A630FF"/>
                            <path
                                d="M423.611 174.619C418.499 164.843 412.52 155.544 405.747 146.836L260.112 260.109L423.611 174.619Z"
                                fill="#4BFFFF"/>
                            <path
                                d="M77.2916 233.626C74.6361 251.864 74.7283 270.398 77.5654 288.609L259.866 260.209L77.2916 233.626Z"
                                fill="#009AE7"/>
                            <path
                                d="M80.0216 219.026C78.9347 223.772 78.0361 228.56 77.3279 233.378L259.866 260.209L80.0216 219.026Z"
                                fill="white"/>
                            <path
                                d="M259.819 75.7091C218.078 75.7199 177.575 89.8842 144.924 115.888C112.273 141.893 89.4053 178.2 80.0551 218.88L259.866 260.209L259.819 75.7091Z"
                                fill="#BD03D2"/>
                            <circle cx="260.319" cy="260.714" r="104" fill="#06070A"/>
                        </svg>


                        <div className={style.diagramWithoutCircle}>{svgIcons.diagram_desktop_without_circle}</div>
                        <img src={logo_small} alt=""/>
                    </div>

                </div>
            </div>

        </div>
    )
}
