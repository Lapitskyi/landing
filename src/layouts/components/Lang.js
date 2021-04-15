import React from "react";
import "../scss/Lang.scss";

import en from "../../assets/icon/eng.png"
import ua from "../../assets/icon/ua.png"
import ru from "../../assets/icon/rus.png"


const Lang = () => {
    return (
        <div className="lang">
            <ul className="lang__list ">
                <li className="lang__item active">
                    <img className="lang__img" src={ua} alt="lang ua"/>
                    ua
                </li>
                <li className="lang__item ">
                    <img className="lang__img" src={ru} alt="lang ru"/>
                    ru
                </li>
                <li className="lang__item ">
                    <img className="lang__img" src={en} alt="lang en"/>
                    en
                </li>
            </ul>


        </div>

    )
}


export default Lang;