import React, {useState} from "react"
import PropTypes from "prop-types";

import s from "./Biography.module.scss"


let TableItem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.year}</td>
            <td>
                {props.text}
            </td>
        </tr>
    )
}

let biographyArray = [
    {id: 1, year: 2018, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"},
    {id: 2, year: 2019, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
    {id: 3, year: 2020, text: "Lorem ipsum, dolor sit amet"},
    {id: 4, year: 2021, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"},
];

let Biography = (props) => {

    let [biography, setBiography] = useState(biographyArray);

    let itemTable = biographyArray.map((item)=>
    <TableItem
    key={item.id}
    id={item.id}
    year={item.year}
    text={item.text}
    />)

    const addTable = () => {
        console.log("addTable")
    }

    const removeTable = () => {
        console.log("removeTable")
    }
    const onSort = () => {
        console.log("onSort")
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
                {itemTable}
                </tbody>
            </table>

            <div className={s.btn__box}>
                <button onClick={addTable}>Добавить</button>
                <button onClick={removeTable}>Удалить</button>
            </div>

        </div>

    )
}


TableItem.propTypes = {
    id: PropTypes.number,
    year: PropTypes.number,
    text: PropTypes.string
}

export default Biography;