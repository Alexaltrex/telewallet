import * as React from "react";
import style from "./Faq.module.scss";
import {useState} from "react";
import clsx from "clsx";
import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {svgIcons} from "../../assets/svg/svgIcons";

const items = [
    {
        question: "1What is Telewallet?",
        answer: "1CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration."
    },
    {
        question: "2What is Telewallet?",
        answer: "2CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration."
    },
    {
        question: "3What is Telewallet?",
        answer: "3CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration."
    },
    {
        question: "4What is Telewallet?",
        answer: "4CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration."
    },
]

export const Faq = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className={style.faq} id="faq" >
                <div className={style.inner}>
                    <h2 className={style.title}
                        //data-aos="zoom-in-right"
                    >
                        Frequently asked <span>questions</span>
                    </h2>

                    <div className={style.contentMobile}>
                        <Swiper //className={style.contentMobile}
                                spaceBetween={25}
                                slidesPerView="auto"
                                centeredSlides={true}
                                onSlideChange={swiper => setSelectedIndex(swiper.realIndex)}
                                onSwiper={(swiper) => setSwiper(swiper)}
                        >
                            {
                                items.map(({question, answer}, index) => (
                                    <SwiperSlide key={index}
                                                 className={style.slide}
                                    >
                                        <p className={style.question}>{question}</p>
                                        <p className={style.answer}>{answer}</p>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className={style.buttons}>
                            <button className={clsx({
                                [style.btn]: true,
                                [style.btn_disable]: selectedIndex === 0,
                            })}
                                    onClick={() => swiper?.slidePrev()}
                            >
                                {svgIcons.arrow}
                                <p>Previous question</p>
                            </button>
                            <button className={clsx({
                                [style.btn]: true,
                                [style.btn_disable]: selectedIndex === items.length - 1,
                            })}
                                    onClick={() => swiper?.slideNext()}
                            >
                                {svgIcons.arrow}
                                <p>Next question</p>
                            </button>
                        </div>
                    </div>




                    <div className={style.contentDesktop}>
                        <div className={style.questions}
                             //data-aos="zoom-in-right"
                        >
                            {
                                items
                                    .map(el => el.question)
                                    .map((question, index) => (
                                        <div className={clsx({
                                            [style.question]: true,
                                            [style.question_selected]: selectedIndex === index,
                                        })}
                                             key={index}
                                             onClick={() => setSelectedIndex(index)}
                                        >
                                            <p>{question}</p>
                                        </div>
                                    ))
                            }
                        </div>
                        <div className={style.answerBlock}
                             //data-aos="zoom-in-left"
                        >
                            <p className={style.answer}>{items[selectedIndex].answer}</p>
                            <div className={style.buttons}>
                                <button className={clsx({
                                    [style.btn]: true,
                                    [style.btn_disable]: selectedIndex === 0,
                                })}
                                        onClick={() => {
                                            if (selectedIndex > 0) {
                                                setSelectedIndex(selectedIndex - 1);
                                            }
                                        }}
                                >
                                    {svgIcons.arrow}
                                    <p>Previous question</p>

                                </button>
                                <button className={clsx({
                                    [style.btn]: true,
                                    [style.btn_disable]: selectedIndex === items.length - 1,
                                })}
                                        onClick={() => {
                                            if (selectedIndex < items.length - 1) {
                                                setSelectedIndex(selectedIndex + 1);
                                            }
                                        }}
                                >
                                    {svgIcons.arrow}
                                    <p>Next question</p>

                                </button>
                            </div>
                        </div>
                    </div>


                </div>
        </div>
    )
}
