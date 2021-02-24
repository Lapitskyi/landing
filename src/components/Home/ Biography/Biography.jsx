import React, {useState} from "react"
import PropTypes from "prop-types";

import s from "./Biography.module.scss"


let biographyArray = [
        {
            id: 1,
            year: 2018,
            info: [
                {id: 1, text: "Lorem ipsum. Non,eveniet!"},
                {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"}
            ]
        },
        {
            id: 2,
            year: 2019,
            info: [
                {id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
                {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"}
            ]
        },
        {
            id: 3,
            year: 2020,
            info: [
                {id: 1, text: "Lorem ipsum, dolor  Non,eveniet!"},
                {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"}
            ]
        },
    ]
;


let Biography = (props) => {

    let [biography, setBiography] = useState(biographyArray);


    const addTable = () => {
        let b = [...biography, {id: 4, year: 2000, info: []}];
        setBiography(b)
    }

    const removeTable = () => {
        let b = [...biography];
        b.pop();
        setBiography(b)

    }
    const onSort = (e) => {

    }

    return (
        <div className={s.inner}>
            <table>
                <caption>Биография</caption>
                <thead>
                <tr>
                    <th>№ п/п</th>
                    <th onClick={onSort}>Год</th>
                    <th>Информация</th>
                </tr>
                </thead>
                <tbody>
                {biography.map((item) =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.year}</td>
                        <td>
                            {item.info.map((info)=>
                            <div key={info.id}>
                               {info.text}
                            </div>
                            )}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className={s.btn__box}>
                <button onClick={addTable}>Добавить</button>
                <button onClick={removeTable}>Удалить</button>
            </div>
        </div>

    )
}


Biography.propTypes = {
    id: PropTypes.number,
    year: PropTypes.number,
    text: PropTypes.string
}

export default Biography;