import React, {useState} from "react"

import s from "./Biography.module.scss"
import TableItem from "./TabelItem/TableItem";
import TableItemInput from "./TableItemInput/TableItem.Input";
import TableHeader from "./TableHeader/TableHeader";


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
        {
            id: 4,
            name: "FullName4",
            info: [
                {id: 1, text: "Text_4"},
                {id: 2, text: "8(444)444-44-44"},
                {id: 3, text: "4_mail@mail.com"}
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


    const updateText = (id, addNewText) => {
        // setBiography([
        //     ...biography.map((item) => {
        //         if (item.id === id) {
        //             return {
        //                 ...item, name:addNewText
        //             }
        //         }
        //         return item
        //     })
        // ]);
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
    }

    const removeTable = () => {
        let b = [...biography];
        b.pop();
        setBiography(b)
        console.log("Старый обьект", biography)
        console.log("Новый обьект", b)

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
                            key={item.id}
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
                            setAddText={setAddText}
                            key={item.id}
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
                <button className={s.btn} onClick={removeTable}>Удалить</button>
            </div>
        </div>
    )
}


export default Biography;