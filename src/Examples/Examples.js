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

import Slider from "./Slider/Slider";


const firstPics = {
    pics: [pic1, pic2, pic3, pic4,
    ], title: "title 1",
};
const secondPics = {
    pics: [pic5, pic6, pic7,
    ], title: "title 2",
};
const thirdPics = {
    pics: [pic8, pic9, pic10,
    ], title: "title 3",
};
const allPics = [firstPics, secondPics, thirdPics];

function Examples () {
    return (
        <div className={style.examples}>
            <div className={style.container}>
                <div className={style.container__slider}>
                    {allPics.map (pics => <div className={style.example}>
                        <div className={style.example__title}>{pics.title}</div>
                        <Slider pics={pics.pics}/>
                    </div>)}
                </div>

                <div className={style.container__pics}>
                    {allPics.map (pics => <div className={style.example}>
                        <div className={style.example__title}>{pics.title}</div>
                        <div className={style.example__pics}>
                            {pics.pics.map (pic => < div className={style.example__picContainer}>
                                    <img className={style.example__pic} src={pic} alt="дом"/>
                                </div>
                            )}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Examples;
