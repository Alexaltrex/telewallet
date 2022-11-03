import * as React from "react";
import style from "./Table.module.scss";
import {data, footer} from "./data";

export const Table = () => {
    return (
        <div className={style.table}>
            <div className={style.inner}>
                <div className={style.card}>

                    <div className={style.head}>
                        {
                            Object.keys(data[0]).map((el, key) => (
                                <p className={style.headCell} key={key}>{el}</p>
                            ))
                        }
                    </div>

                    <div className={style.body}>
                        {
                            data.map((row, index) => (
                                <div key={index}
                                     className={style.row}
                                >
                                    {
                                        Object.values(row).map((el, j) => (
                                            <div key={j}
                                                 className={style.cell}
                                            >
                                                <p>{el}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.footer}>
                        {
                            footer.map((el, key) => (
                                <p className={style.footerCell} key={key}>{el}</p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
