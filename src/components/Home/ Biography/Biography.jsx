import React, {useState} from "react"
import PropTypes from "prop-types";

import s from "./Biography.module.scss"


let biographyArray = [
        {
            id: 1,
            name: "FullName1",
            info: [
                {id: "address", text: "Lorem ipsum. Non,eveniet!"},
                {id: "phone", text: "8(050)000-00-00"},
                {id: "email", text: "mail@mail.com"}
            ]
        },
        {
            id: 2,
            name: "FullName2",
            info: [
                {id: "address", text: "Lorem ipsum. Non,eveniet!"},
                {id: "phone", text: "8(050)000-00-00"},
                {id: "email", text: "mail@mail.com"}
            ]
        },
        {
            id: 3,
            name: "FullName3",
            info: [
                {id: "address", text: "Lorem ipsum. Non,eveniet!"},
                {id: "phone", text: "8(050)000-00-00"},
                {id: "email", text: "mail@mail.com"}
            ]
        },

    ]
;


let Biography = (props) => {

    const [biography, setBiography] = useState(biographyArray);



    const addTable = () => {
        let b = [...biography, {id: "", name: "", info: [{id: "", text: ""}, {id: "", text: ""}, {id: "", text: ""}]}];
        setBiography(b)
    }

    const removeTable = () => {
        let b = [...biography];
        b.pop();
        setBiography(b)

    }
    const onSort = () => {


    }

    return (
        <div className={s.inner}>
            <table>
                <caption>Biography</caption>
                <thead>
                <tr>
                    <th rowSpan="2" onClick={onSort}>№</th>
                    <th rowSpan="2">FIO</th>
                    <th colSpan="3">Information</th>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
                </thead>
                <tbody>
                {biography.map((item) =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        {item.info.map((info) =>
                            <td key={info.id}>{info.text}</td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>

            <div className={s.btn__box}>
                <button className={s.btn} onClick={addTable}>Добавить</button>
                <button className={s.btn} onClick={removeTable}>Удалить</button>
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