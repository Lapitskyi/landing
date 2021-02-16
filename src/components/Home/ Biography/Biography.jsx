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


let Biography = (props) => {

    let [biography, setBiography] = useState(props.biographyArr);


    const addTable = () => {
        let biographyAdd = [... props.biographyArr];
        setBiography(biographyAdd );
    }

    const removeTable = () => {
       let biographyDel = [...biography];
        biographyDel.pop();
        setBiography(biographyDel);

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
                {biography.map((item) =>
                    <TableItem
                        key={item.id}
                        id={item.id}
                        year={item.year}
                        text={item.text}
                    />)}
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