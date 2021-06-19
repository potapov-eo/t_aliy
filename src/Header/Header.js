import React from "react";
import style from "./Header.module.css";

function Header () {
    return (
        <div className={style.headerContainer}>

            <div className={style.headerBlock}>
                <div className={style.headerInfo}>
                    <div className={style.name}> ENGINEERING GROUP</div>
                    <div className={style.text}>Строительство домов в Грузии</div>
                    <div className={style.contact}>
                        <p>Контакты:Тел.</p>
                        <p>+7 928 452 11 84</p>
                        <p>+375 29 643 94 86</p>
                        <p>+995 599 26 87 72</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
