import React, {useState} from "react";
import "../scss/Lang.scss";

import en from "../../assets/icon/eng.png"
import ua from "../../assets/icon/ua.png"
import ru from "../../assets/icon/rus.png"


const LangText = () => {

    const [lang, setLang] = useState([{id: "en", lang: true}, {id: "ua", lang: false}, {id: "ru", lang: false}]);

    const onSwitchLanguage = (id) => {
        setLang(
            lang.map(item => (item.id === id) ? {...item, lang: true} :
                (item.id !== id) ? {...item, lang: false} : item)
        )
    }


    return (
        <div className="lang">
            <ul className="lang__list ">
                {lang.map(item =>
                    <li className={item.lang === false ? `lang__item ` : `lang__item active`}
                        key={item.id}
                        onClick={() => onSwitchLanguage(item.id)}
                    >
                        <img className="lang__img" src={item.id === 'ua' ? ua : item.id === 'en' ? en : ru}
                             alt="lang ua"/>
                        {item.id}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default LangText;