import * as React from "react";
import style from "./Footer.module.scss"
import logo from "../../assets/png/logo.png";
import {useFormik} from "formik";
import {svgIcons} from "../../assets/svg/svgIcons";

const links = [
    {
        groupLabel: "Products",
        links: [
            { label: "Wallet", href: "#" },
            { label: "Platform", href: "#" },
            { label: "Marketplace", href: "#" },
            { label: "Efinity", href: "#" },
            { label: "JumpNet", href: "#" },
        ]
    },
    {
        groupLabel: "Use cases",
        links: [
            { label: "Wallet", href: "#" },
            { label: "Platform", href: "#" },
            { label: "Marketplace", href: "#" },
            { label: "Efinity", href: "#" },
            { label: "JumpNet", href: "#" },
        ]
    },
    {
        groupLabel: "Resources",
        links: [
            { label: "Wallet", href: "#" },
            { label: "Platform", href: "#" },
            { label: "Marketplace", href: "#" },
            { label: "Efinity", href: "#" },
            { label: "JumpNet", href: "#" },
        ]
    },
    {
        groupLabel: "About",
        links: [
            { label: "Wallet", href: "#" },
            { label: "Platform", href: "#" },
            { label: "Marketplace", href: "#" },
            { label: "Efinity", href: "#" },
            { label: "JumpNet", href: "#" },
        ]
    }
]

const socialLinks = [
    {icon: svgIcons.iconLink0, href: "#"},
    {icon: svgIcons.iconLink1, href: "#"},
    {icon: svgIcons.iconLink2, href: "#"},
    {icon: svgIcons.iconLink3, href: "#"},
    {icon: svgIcons.iconLink4, href: "#"},
    {icon: svgIcons.iconLink5, href: "#"},
    {icon: svgIcons.iconLink6, href: "#"},
    {icon: svgIcons.iconLink7, href: "#"},
];

const bottomLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#" },
]


interface IValues {
    email: string
}

export const Footer = () => {
    const initialValues = {
        email: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values: IValues) => {
            console.log(values)
        }
    })

    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.topBlock}>
                    <div className={style.leftPart}
                         //data-aos="zoom-in-right"
                    >
                        <img src={logo} alt="" className={style.logo}/>
                        <p className={style.stay}>Stay up to date:</p>
                        <p className={style.dont}>Don’t miss the latest TeleWallet news</p>

                        <form onSubmit={formik.handleSubmit}
                              className={style.form}
                        >
                            <input {...formik.getFieldProps('email')}
                                   className={style.field}
                                   placeholder="Enter your email address"
                            />
                            <button className={style.submit}
                                    type="submit"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className={style.policy}>
                            For more details review our <a href="#">Privacy Policy</a>
                        </p>


                    </div>

                    <div className={style.right}
                         //data-aos="zoom-in-left"
                    >
                        {
                            links.map(({groupLabel, links}, index) => (
                                <div className={style.group} key={index}>
                                    <p className={style.groupLabel}>{groupLabel}</p>
                                    <div className={style.groupLinks}>
                                        {
                                            links.map(({label, href}, key) => (
                                                <a href={href} className={style.link} key={key}>{label}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={style.bottomBlock}
                     //data-aos="zoom-in-up"
                >
                    <div className={style.socialLinks}>
                        {
                            socialLinks.map(({href, icon}, index) => (
                                <a href={href}
                                   className={style.socialLink}
                                   key={index}
                                   target="_blank"
                                   rel="noopener noreferrer nofollow"
                                >
                                    {icon}
                                </a>
                            ))
                        }
                    </div>
                    <div className={style.bottom}>
                        <p className={style.mark}>© 2022 TeleWallet</p>
                        <div className={style.bottomLinks}>
                            {
                                bottomLinks.map(({label, href}, index) => (
                                    <a href={href}
                                       key={index}
                                       className={style.bottomLink}
                                    >
                                        {label}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
