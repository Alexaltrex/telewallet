import * as React from "react";
import style from "./Products.module.scss"
import src0 from "../../assets/png/products/0.png";
import src1 from "../../assets/png/products/1.png";
import src2 from "../../assets/png/products/2.png";
import src3 from "../../assets/png/products/3.png";
import src4 from "../../assets/png/products/4.png";

const products = [
    {
        title: "Private & Secure",
        text: "Only you can access the wallet. We don’t collect any personal data.",
        src: src0
    },
    {
        title: "Interact for apps ",
        text: "Use your favorite decentralized apps & find new ones, without leaving your telegram wallet.",
        src: src1
    },
    {
        title: "Store and send cryptocurrency",
        text: "Perform operations with cryptocurrency in 2 clicks without leaving telegram application",
        src: src2,
    },
    {
        title: "Buy and exchange cryptocurrency ",
        text: "Get your first cryptocurrency in 2 clicks without leaving the telegram app",
        src: src3
    },
    {
        title: "All NFTs in one TeleWallet",
        text: "TeleWallet offers you an easy way to keep all your unique ERC721 and ERC1155 crypto NFTs and game assets in one place. Love your crypto NFTs? We love them too. Store them all in your TeleWallet",
        src: src4
    },
];

export const Products = () => {
    return (
        <div className={style.products} id="products">
            <div className={style.inner}>
                <h2 className={style.title}
                    //data-aos="zoom-in-right"
                >
                    You deserve <span>even easier access</span> to crypto currencies
                </h2>
                <p className={style.text}>
                    No need to download additional software. Telegram becomes an ecosystem by combining messenger, files, media and crypto wallet
                </p>

                <div className={style.items}>
                    {
                        products.map(({title, text, src}, index) => (
                            <div key={index} className={style.item}
                                 //data-aos="zoom-in"
                            >
                                <div className={style.imgWrapper}>
                                    <img src={src} alt=""/>
                                </div>
                                <div className={style.texts}>
                                    <p className={style.subtitle}>{title}</p>
                                    <p className={style.description}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
