import * as React from "react";
import style from "./Roadmap.module.scss"
import {steps} from "./data";
import {svgIcons} from "../../assets/svg/svgIcons";
import src0 from "../../assets/png/roadmap/0.png";
import src1 from "../../assets/png/roadmap/1.png";
import src2 from "../../assets/png/roadmap/2.png";
import src3 from "../../assets/png/roadmap/3.png";
import src4 from "../../assets/png/roadmap/4.png";
import desktop from "../../assets/png/roadmap/desktop.png";

const srcs = [src0, src1, src2, src3, src4];


export const Roadmap = () => {
    return (
        <div className={style.roadmap} id="roadmap">
            <div className={style.inner}>
                <h2 className={style.title}
                    //data-aos="zoom-in-right"
                >
                    What we’ve achieved so far and <span>where we’re going</span>
                </h2>

                <div className={style.stepsMobile}>
                    {
                        steps.map(({stepTitle, options}, index) => (
                            <div className={style.step} key={index}
                                 //data-aos="zoom-in-up"
                            >
                                <div className={style.imgWrapper}>
                                    <img src={srcs[index]} alt=""/>
                                </div>

                                <div className={style.options}>
                                    {
                                        options.map(({value, checked}, key) => (
                                            <div className={style.optionItem} key={key}>
                                                {checked ? svgIcons.checked : svgIcons.notChecked}
                                                <p className={style.value}>{value}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className={style.stepsDesktop}>
                    <img src={desktop} alt="" className={style.img}/>

                    <div className={style.steps}>
                        {
                            steps.map(({stepTitle, options}, index) => (
                                <div className={style.step}
                                     key={index}
                                     //data-aos="zoom-in-up"
                                     //data-aos-delay={`${300 * index}`}
                                >
                                    <div className={style.options}>
                                        {
                                            options.map(({value, checked}, key) => (
                                                <div className={style.optionItem} key={key}>
                                                    {checked ? svgIcons.checked : svgIcons.notChecked}
                                                    <p className={style.value}>{value}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
