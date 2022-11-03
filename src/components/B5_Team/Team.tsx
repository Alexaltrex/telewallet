import * as React from "react";
import style from "./Team.module.scss"
import src0 from "../../assets/png/team/0.png";
import src1 from "../../assets/png/team/1.png";
import src2 from "../../assets/png/team/2.png";
import src3 from "../../assets/png/team/3.png";
import {svgIcons} from "../../assets/svg/svgIcons";

const items = [
    {
        src: src0,
        name: "Herman Konstantin",
        job: "CEO & Co-Founder",
        mail: "#",
        inlink: "#"
    },
    {
        src: src1,
        name: "Andrew Malevich",
        job: "CTO & Co-Founder",
        mail: "#",
        inlink: "#"
    },
    {
        src: src2,
        name: "Euginia Holota",
        job: "Head of Community",
        mail: "#",
        inlink: "#"
    },
    {
        src: src3,
        name: "Max Nekrasoff",
        job: "Chief Marketing Officer",
        mail: "#",
        inlink: "#"
    },
]
export const Team = () => {
    return (
        <div className={style.team} id="team" >
            <div className={style.inner}>
                <h2 className={style.title}
                    //data-aos="zoom-in-right"
                >
                    Our <span>team</span>
                </h2>
                <div className={style.items}>
                    {
                        items.map(({src, name, job, mail, inlink}, index) => (
                            <div key={index} className={style.item}
                                 //data-aos="zoom-in"
                                 //data-aos-delay={`${300 * index}`}
                            >
                                <img src={src} alt=""/>
                                <p className={style.name}>{name}</p>
                                <p className={style.job}>{job}</p>
                                <div className={style.links}>
                                    <a href={mail}>
                                        {svgIcons.mail}
                                    </a>
                                    <a href={inlink}>
                                        {svgIcons.in}
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
