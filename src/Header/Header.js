import React from "react";
import style from "./Header.module.css";

function Header () {
    return (
        <div className={style.header}>
            <div className={style.header__fon}>
                <div className={style.container}>
                    <div className={style.header__info}>
                        <div className={style.header__name}> ENGINEERING GROUP</div>
                        <div className={style.header__text}>Проектирование домов и коттеджей по всему миру</div>
                        <div className={style.header__contact}>
                            <p>Контакты:Тел.</p>
                            <p>+7 928 452 11 84</p>
                            <p>+375 29 643 94 86</p>
                            <p>+995 599 26 87 72</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
