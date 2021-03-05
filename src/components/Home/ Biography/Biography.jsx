import React, {useState} from "react"

import s from "./Biography.module.scss"



let biographyArray = [
        {
            id: 1,
            name: "FullName1",
            info: [
                {id: 1, text: "Text_1"},
                {id: 2, text: "8(111)111-11-11"},
                {id: 3, text: "1_mail@mail.com"}
            ]
        },
        {
            id: 2,
            name: "FullName2",
            info: [
                {id: 1, text: "Text_2"},
                {id: 2, text: "8(222)222-22-22"},
                {id: 3, text: "2_mail@mail.com"}
            ]
        },
        {
            id: 3,
            name: "FullName3",
            info: [
                {id: 1, text: "Text_3"},
                {id: 2, text: "8(333)333-33-33"},
                {id: 3, text: "3_mail@mail.com"}
            ]
        },

    ]
;


let Biography = (props) => {

    const [biography, setBiography] = useState(biographyArray);
    const [addNewText, setAddNewText] = useState('');

    const onNewText = (e, id) => {
        setBiography([
            ...biography.map((item) => {
                if (item.id === id) {
                    return {
                        ...item, name: addNewText
                    }
                }
                return item
            })
        ]);
        // setAddNewText("");
        console.log(id)
    }

    const addTable = () => {
        let newBiography = {
            id: biography.length + 1,
            name: "",
            info: [
                {id: "1", text: ""},
                {id: "2", text: ""},
                {id: "3", text: ""}
            ]
        };
        setBiography([
            ...biography, newBiography
        ])

        console.log("Старый обьект", biography)
    }

    const removeTable = () => {

        let b = [...biography];
        b.pop();
        setBiography(b)
        console.log("Старый обьект", biography)
        console.log("Новый обьект", b)

    }
    const onSort = () => {
        let s = [...biography]
        s.sort((a, b) => a.id > b.id ? -1 : 1)
        setBiography(s)

        console.log("Старый обьект", biography)
        console.log("Новый обьект", s)
    }


    return (
        <div className={s.inner}>
            <table>
                <caption>Biography</caption>
                <thead>
                <tr>
                    <th rowSpan="2" onClick={() => {
                        onSort('id')
                    }}>№
                    </th>
                    <th rowSpan="2">FIO</th>
                    <th colSpan="3">Information</th>
                </tr>
                <tr>
                    <td onClick={() => {
                        onSort('address')
                    }}>Address
                    </td>
                    <td onClick={() => {
                        onSort('phone')
                    }}>Phone
                    </td>
                    <td onClick={() => {
                        onSort('email')
                    }}>Email
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    biography.map((item) =>
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={item.name}
                                    onChange={(e) => onNewText(setAddNewText(e.target.value), (item.id))}
                                />
                            </td>
                            {item.info.map((info) =>
                                <td key={info.id}>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value={info.text}
                                        onChange={onNewText}
                                    />
                                </td>
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


export default Biography;