import * as React from "react";
import style from "./Block.module.scss";

const blocks = [
    {
        title: "10K",
        text: "Users",
    },
    {
        title: "4",
        text: "EVM Networks",
    },
    {
        title: "63K",
        text: "Transactions",
    },
    {
        title: "700K",
        text: "Market Cap",
    },
];

export const Blocks = () => {
    return (
        <div className={style.blocks}>
           <div className={style.inner}>
               {
                   blocks.map(({title, text}, index) => (
                       <div key={index} className={style.block}
                            //data-aos="zoom-in"
                            //data-aos-delay={`${300 * index}`}
                       >
                           <p className={style.title}>{title}</p>
                           <p className={style.text}>{text}</p>
                       </div>
                   ))
               }
           </div>
        </div>
    )
}
