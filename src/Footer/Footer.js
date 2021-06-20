import React from "react";
import style from "./Footer.module.css";

function Footer () {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footer__content}>
                   <div> Контакты:Тел.+7 928 452 11 84;
                    +375 29 643 94 86;
                    +995 599 26 87 72;</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
