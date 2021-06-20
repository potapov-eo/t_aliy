import React from "react";
import style from "./Examples.module.css";
import pic1 from "../assets/image/1/арх 3-Рисунок 2.jpg";
import pic2 from "../assets/image/1/арх 3-Рисунок 3.jpg";
import pic3 from "../assets/image/1/арх 3-Рисунок 4.jpg";
import pic4 from "../assets/image/1/арх 2-Рис 5.jpg";
import pic5 from "../assets/image/2/сруб - Рисунок1.jpg";
import pic6 from "../assets/image/2/сруб-Рисунок2_.jpg";
import pic7 from "../assets/image/2/сруб-Рисунок4 (3).jpg";
import pic8 from "../assets/image/3/1арх виз.jpg";
import pic9 from "../assets/image/3/2арх1 рисунок2.jpg";
import pic10 from "../assets/image/3/3арх 1 рисунок3.jpg";


function Examples () {
    return (
        <div className={style.examples}>
            <div className={style.container}>

                <div className={style.example}>
                    <div className={style.example__title}>Заголовок 1</div>
                    <div className={style.example__pics}>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic1} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic2} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic3} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic4} alt="дом"/>
                        </div>
                    </div>
                </div>

                <div className={style.example}>
                    <div className={style.example__title}>Заголовок 1</div>
                    <div className={style.example__pics}>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic5} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic6} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic7} alt="дом"/>
                        </div>
                                            </div>
                </div>

                <div className={style.example}>
                    <div className={style.example__title}>Заголовок 1</div>
                    <div className={style.example__pics}>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic8} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic9} alt="дом"/>
                        </div>
                        <div className={style.example__picContainer}>
                            <img className={style.example__pic} src={pic10} alt="дом"/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Examples;
