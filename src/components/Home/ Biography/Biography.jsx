import React, {useState} from "react"

import s from "./Biography.module.scss"

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
                    return {...item, done: !!item.done === false}
                }
                return item
            })
        ]);
    }

    const updateText = (text, id) => {

        setBiography([
           ...biography.map((item) => {
                if (item.id === id) {
                    return {...item, fullName: text}
                }

                item.info.map((info) => {
                    if (info.id === id) {
                        return {...info, text: info.text=text}
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
                    return a.fullName > b.fullName ? -1 : 1 || a.fullName < b.fullName ? -1 : 1;
                }
            })
        ])
    }

    const DragEndDrop = (e, id) => {
        console.log(e);


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
                {
                    biography.map((item) =>
                        <tr key={item.id}
                            onDoubleClick={activateEditMode}
                            onBlur={deactivateEditMode}
                            onDragStart={(e) => {
                                DragEndDrop(e, item.id)
                            }}
                            draggable="true"
                        >
                            <td>
                                <input type="checkbox"
                                       checked={item.done}
                                       onChange={() => {
                                           onCheckedChange(item.id)
                                       }}
                                />
                                {item.id}
                            </td>
                            <td>
                                {!editMode ? item.fullName
                                    : <input
                                        type="text"
                                        placeholder="fullName"
                                        value={item.fullName}
                                        onChange={(e) => {
                                            updateText(e.target.value, item.id)
                                        }}
                                    />
                                }
                            </td>

                            {item.info.map((info) =>
                                <td key={info.id}>
                                    {!editMode ? info.text
                                        : <input
                                            type="text"
                                            placeholder="fullName"
                                            value={info.text}
                                            onChange={(e,) => {
                                                updateText(e.target.value,  info.id)
                                            }}
                                        />

                                    }
                                </td>
                            )}

                        </tr>
                    )}

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