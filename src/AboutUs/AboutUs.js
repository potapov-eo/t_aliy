import React from "react";
import style from "./AboutUs.module.css";

function AboutUs () {
    return (

        <div className={style.AboutUs}>
            <div className={style.container}>
                <div className={style.AboutUs__content}>
                    <p> Авангардные,только индивидуальные проекты предлагает компания ENGINEERING GROUP.-школа
                        знаменитого
                        грузинского архитектора Вахтанга Квимсадзе.</p>
                    <p> Грузинские зодчие всегда занимали ведущее место в мировой архитектуре.</p>
                    <p> Наши предложения будут созвучны с Вашими ожиданиями.</p>
                    <p> Работают опытные профессионалы.Выполняют работы любой сложности в промышленном и гражданском
                        строительстве.</p>

                </div>
            </div>
        </div>

    );
}

export default AboutUs;
