import React, {useState} from "react"

import s from "./Biography.module.scss"
import TableItem from "./TabelItem/TableItem";
import TableItemInput from "./TableItemInput/TableItem.Input";
import TableHeader from "./TableHeader/TableHeader";


let biographyArray = [
        {
            id: 1,
            done: false,
            name: "FullName1",
            info: [
                {id: 1, text: "Text_1"},
                {id: 2, text: "8(111)111-11-11"},
                {id: 3, text: "1_mail@mail.com"}
            ]
        },
        {
            id: 2,
            done: false,
            name: "FullName2",
            info: [
                {id: 1, text: "Text_2"},
                {id: 2, text: "8(222)222-22-22"},
                {id: 3, text: "2_mail@mail.com"}
            ]
        },
    ]
;


let Biography = (props) => {

    const [biography, setBiography] = useState(biographyArray);
    const [addText, setAddText] = useState('');
    const [editMode, setEdinMode] = useState(false);


    const activateEditMode = (id) => {
        setEdinMode(true);
        updateText(id)
    }

    const deactivateEditMode = (id) => {
        setEdinMode(false);
    }

    const onCheckedChange = (id) => {
        setBiography([
            ...biography.map((item) => {
                if (item.id === id) {
                    if (item.done === true) {
                        return {...item, done: false}
                    } else if (item.id === id) {
                        if (item.done === false) {
                            return {...item, done: true}
                        }
                    }
                }
                return item
            })
        ]);
    }


    const updateText = (id) => {

        setBiography([
            ...biography.map((item) => {
                if (item.id === id) {
                    return {
                        ...item, name: addText
                    }
                }
                return item
            })
        ]);
    }

    const addTable = () => {
        let newBiography = {
            id: biography.length + 1,
            name: "",
            done: false,
            info: [
                {id: "1", text: ""},
                {id: "2", text: ""},
                {id: "3", text: ""}
            ]
        };
        setBiography([
            ...biography, newBiography
        ])
    }

    const deleteItemTable = () => {
        setBiography([
            ...biography.filter((item) => item.done === false)
        ])

    }
    const onSort = () => {
        setBiography([
            ...biography.sort((a, b) => a.id - b.id ? -1 : 1)
        ])
    }


    return (
        <div className={s.inner}>
            <table>
                <thead>
                <TableHeader
                    onSort={onSort}
                />
                </thead>

                <tbody>
                {!editMode &&
                biography.map((item) =>
                    <TableItem
                        activateEditMode={activateEditMode}
                        onCheckedChange={onCheckedChange}
                        key={item.id}
                        done={item.done}
                        id={item.id}
                        name={item.name}
                        info={item.info}
                    />
                )
                }
                {editMode &&
                biography.map((item) =>
                    <TableItemInput
                        deactivateEditMode={deactivateEditMode}
                        onCheckedChange={onCheckedChange}

                        setAddText={setAddText}
                        key={item.id}
                        done={item.done}
                        id={item.id}
                        name={item.name}
                        info={item.info}
                    />
                )
                }

                </tbody>
            </table>


            <div className={s.btn__box}>
                <button className={s.btn} onClick={addTable}>Добавить</button>
                <button className={s.btn} onClick={(e) => {
                    deleteItemTable(e)
                }}>Удалить
                </button>
            </div>
        </div>
    )
}


export default Biography;