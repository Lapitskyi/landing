import React, {useState} from "react"

import s from "./Biography.module.scss"
import TableItem from "./TabelItem/TableItem";
import TableItemInput from "./TableItemInput/TableItem.Input";
import TableHeader from "./TableHeader/TableHeader";


let biographyArray = [
        {
            id: 1,
            done: false,
            fullName: "Давосу Сиворту",
            info: [
                {
                    id: "text",
                    text: "Десница короля Станниса Баратеона, советник Короля Севера - Джона Сноу (начиная с 6 сезона сериала"
                },
                {id: "phone", text: "8(111)111-11-11"},
                {id: "email", text: "1_mail@mail.com"}
            ]
        },
        {
            id: 2,
            done: false,
            fullName: "Джон Сноу",
            info: [
                {
                    id: "text", text: "Лорд-командующий Ночного Дозора\n" +
                        "Лорд Винтерфелла и Король Севера"
                },
                {id: 'phone', text: "8(222)222-22-22"},
                {id: 'email', text: "2_mail@mail.com"}
            ]
        },
        {
            id: 3,
            fullName: "Сандора Клигана",
            done: false,
            info: [
                {
                    id: "text",
                    text: "телохранитель Джоффри Баратеона (до событий книги «Буря мечей» и до третьего сезона сериала)"
                },
                {id: "phone", text: ""},
                {id: "email", text: ""}
            ]
        },
        {
            id: 4,
            fullName: "Тирион Ланнистер",
            done: false,
            info: [
                {
                    id: "text",
                    text: "Десница Короля (в «Битве Королей»), Мастер над монетой (в «Буре мечей»), советник Дейенерис Таргариен (в 5-м сезоне сериала «Игра престолов»), Десница Королевы Дейенерис Таргариен (в 6-м сезоне сериала), Десница короля Брандона Старка (в 8-м сезоне сериала)"
                },
                {id: "phone", text: ""},
                {id: "email", text: ""}
            ]
        },

    ]
;


let Biography = (props) => {

    const [biography, setBiography] = useState(biographyArray);
    const [editMode, setEdinMode] = useState(false);


    const activateEditMode = (id) => {
        setEdinMode(true);
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

    const updateText = (text, id, idInfo) => {
        console.log(text, id, idInfo)
        setBiography([
            ...biography.map((item) => {
                if (item.id === id) {
                    return {...item, fullName: text}
                }
                item.info.map((info) => {
                    if (info.id === idInfo) {
                        return {...info, text:text}
                    }
                    return info
                })
                return item;
            }),
        ]);
    }

    const addTable = (id) => {

        let newBiography = {
            id: biography.length + 1,
            fullName: "",
            done: false,
            info: [
                {id: "text", text: ""},
                {id: "phone", text: ""},
                {id: "email", text: ""}
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
    const onSort = (text, e) => {
        setBiography([
            ...biography.sort((a, b) => {
                if (text === 'id') {
                    return a.id - b.id ? -1 : 1
                } else if (text === 'fullName') {
                    return a.fullName > b.fullName ? -1 : 1 || a.fullName < b.fullName ? -1 : 1 ;

                }

            })
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
                        fullName={item.fullName}
                        info={item.info}
                    />
                )
                }
                {editMode &&
                biography.map((item) =>
                    <TableItemInput
                        deactivateEditMode={deactivateEditMode}
                        onCheckedChange={onCheckedChange}
                        updateText={updateText}

                        key={item.id}
                        done={item.done}
                        id={item.id}
                        fullName={item.fullName}
                        info={item.info}
                    />
                )
                }

                </tbody>
            </table>


            <div className={s.btn__box}>
                <button className={s.btn} onClick={() => {
                    addTable()
                }}>Добавить
                </button>
                <button className={s.btn} onClick={(e) => {
                    deleteItemTable(e)
                }}>Удалить
                </button>
            </div>
        </div>
    )
}


export default Biography;