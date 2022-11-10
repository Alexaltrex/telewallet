import * as React from "react";
import style from "./Header.module.scss";
import {HashLink} from 'react-router-hash-link';
import {svgIcons} from "../../assets/svg/svgIcons";
import logo from "../../assets/png/logo.png"
import {FC, useRef, useState} from "react";
import {useOutsideButNotOnTargetClick, useOutsideClick} from "../../hooks/useOutsideClick";
//import { CSSTransition } from 'react-transition-group';
import "./Header.css";
import Fade from '@mui/material/Fade';
import clsx from "clsx";

const links = [
    {label: "About us", to: "/#about"},
    {label: "Products", to: "/#products"},
    {label: "Tokenomics", to: "/#tokenomics"},
    {label: "Roadmap", to: "/#roadmap"},
    {label: "Team", to: "/#team"},
    {label: "FAQ", to: "/#faq"},
]

const popup = [
    {icon: svgIcons.buy, text: "Buy Crypto with Fiat"},
    {icon: svgIcons.help, text: "Help Center"},
];

interface IHeader {
    pageYOffset: number
}

export const Header: FC<IHeader> = ({pageYOffset}) => {
    const [showPopup, setShowPopup] = useState(false);

    const outsideRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLButtonElement>(null);

    useOutsideButNotOnTargetClick(outsideRef, targetRef, () => setShowPopup(false));

    return (
        <header className={clsx({
            [style.header]: true,
            [style.header_scroll]: pageYOffset > 50
        })}>
            <div className={style.inner}>
                <HashLink smooth
                          to="/"
                          className={style.logo}
                >
                    <img src={logo} alt=""/>
                </HashLink>

                <div className={style.links}>
                    {
                        links.map(({label, to}, index) => (
                            <HashLink key={index}
                                      to={to}
                                      smooth
                                      className={style.link}
                            >
                                {label}
                            </HashLink>
                        ))
                    }
                </div>

                <div className={style.popupBtnWrapper}>
                    {/*{*/}
                    {/*    showPopup ? (*/}
                    {/*            <button className={style.popupBtn}*/}
                    {/*                    //onClick={() => setShowPopup(false)}*/}
                    {/*            >*/}
                    {/*                {svgIcons.burger}*/}
                    {/*                {svgIcons.person}*/}
                    {/*                close*/}
                    {/*            </button>*/}
                    {/*        ) : (*/}
                    {/*        <button className={style.popupBtn}*/}
                    {/*                onClick={() => setShowPopup(true)}*/}
                    {/*        >*/}
                    {/*            {svgIcons.burger}*/}
                    {/*            {svgIcons.person}*/}
                    {/*            open*/}
                    {/*        </button>*/}
                    {/*    )*/}

                    {/*}*/}

                    <button className={style.popupBtn}
                            onClick={() => setShowPopup(!showPopup)}
                            ref={targetRef}
                    >
                        {svgIcons.burger}
                        {svgIcons.person}

                    </button>

                    <Fade in={showPopup}>
                        <div className={style.popup} ref={outsideRef} id="popup">
                            <button className={style.btn}>
                                Open your wallet
                            </button>
                            <div className={style.items}>
                                {
                                    popup.map(({icon, text}, index) => (
                                        <div key={index}
                                             className={style.item}
                                        >
                                            {icon}
                                            <p>{text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Fade>


                    {/*<CSSTransition in={showPopup}*/}
                    {/*               nodeRef={ref}*/}
                    {/*               classNames="popup"*/}
                    {/*               unmountOnExit*/}
                    {/*               timeout={1000}*/}
                    {/*>*/}
                    {/*    <div className={style.popup} ref={ref} id="popup">*/}
                    {/*        <button className={style.btn}>*/}
                    {/*            Open your wallet*/}
                    {/*        </button>*/}
                    {/*        <div className={style.items}>*/}
                    {/*            {*/}
                    {/*                popup.map(({icon, text}, index) => (*/}
                    {/*                    <div key={index}*/}
                    {/*                         className={style.item}*/}
                    {/*                    >*/}
                    {/*                        {icon}*/}
                    {/*                        <p>{text}</p>*/}
                    {/*                    </div>*/}
                    {/*                ))*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</CSSTransition>*/}

                    {/*{*/}
                    {/*    showPopup && (*/}
                    {/*        <div className={style.popup} ref={ref}>*/}
                    {/*            <button className={style.btn}>*/}
                    {/*                Open your wallet*/}
                    {/*            </button>                                */}
                    {/*            <div className={style.items}>*/}
                    {/*                {*/}
                    {/*                    popup.map(({icon, text}, index) => (*/}
                    {/*                        <div key={index}*/}
                    {/*                             className={style.item}*/}
                    {/*                        >*/}
                    {/*                            {icon}*/}
                    {/*                            <p>{text}</p>*/}
                    {/*                        </div>*/}
                    {/*                    ))*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}


                </div>


            </div>
        </header>
    )
}
