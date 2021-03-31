import React, {useState} from "react"

import s from "./Biography.module.scss"

import TableHeader from "./TableHeader/TableHeader";
import Item from "./Item/Item";
import ItemCheckbox from "./Item/ItemCheckbox";


let biographyArray = [
        {
            id: 1,
            done: false,
            fullName: "Что такое Lorem Ipsum?",
            info: [
                {
                    id: "text",
                    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                },
                {id: "phone", text: "8(111)111-11-11"},
                {id: "email", text: "1_mail@mail.com"}
            ]
        },
        {
            id: 2,
            done: false,
            fullName: "Почему он используется?",
            info: [
                {
                    id: "text",
                    text: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\" Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам \"lorem ipsum\" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты)."
                },
                {id: 'phone', text: "8(222)222-22-22"},
                {id: 'email', text: "2_mail@mail.com"}
            ]
        },
        {
            id: 3,
            done: false,
            fullName: "Откуда он появился?",
            info: [
                {
                    id: "text",
                    text: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, \"consectetur\", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги \"de Finibus Bonorum et Malorum\" (\"О пределах добра и зла\"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", происходит от одной из строк в разделе 1.10.32\n" +
                        "\n" +
                        "Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 \"de Finibus Bonorum et Malorum\" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год."
                },
                {id: "phone", text: ""},
                {id: "email", text: ""}
            ]
        },


    ]
;


let Biography = (props) => {
    const [biography, setBiography] = useState(biographyArray);
    const [editMode, setEditMode] = useState(false);
    const [currentTable, setCurrentTable] = useState(null)
    const [currentItem, setCurrentItem] = useState(null);


    const activateEditMode = (id) => {
        setEditMode(!!editMode === false)
    }

    const onCheckedChange = (id) => {
        setBiography([
            biography.map((item) => {
                if (item.id === id) {
                    return {...item, done: !!item.done === false}
                }
                return item
            })
        ]);
    }

    const updateFullName = (id, text) => {
        setBiography([
            biography.map(item =>
                (item.id === id) ? {...item, fullName: text} : item
            )
        ]);
    }

    const updateInfo = (id, idInfo, text) => {
        setBiography([
            biography.map(item => {
                if (item.id == id) {
                    item.info.map(info =>
                        (info.id === idInfo) ? {...info, text: info.text = text} : info)
                }
                return item
            })
        ])
    }

    const addTable = (arr) => {

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
            biography.filter((item) => item.done === false)
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

    const dragStartItem = (e, table, item) => {
        setCurrentItem(item)
        setCurrentTable(table)
    }

    const dragEndLeaveItem = (e) => {
        e.target.style.boxShadow = 'none'
    }

    const dragOverItem = (e, td) => {
        e.preventDefault();
        e.target.style.boxShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
    }

    const dropItem = (e, table, item) => {
        e.preventDefault()
        if (e.target.style.boxShadow) {
            e.target.style.boxShadow = 'none'
        }
        let itemIndex = currentTable.indexOf(currentItem);
        currentTable.splice(itemIndex, 1);
        let dropIndex = table.indexOf(item);
        table.splice(dropIndex + 1, 0, currentItem);

        setBiography([
            biography.map(items => {
                    if (items.id === table.id) {
                        return table
                    }
                    if (items.id === currentTable.id) {
                        return currentTable
                    }
                    return items
                }
            )
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
                {
                    biography.map(item =>
                        <tr key={item.id}
                            onDoubleClick={activateEditMode}
                            draggable
                            onDragStart={(e) => dragStartItem(e, biography, item)}
                            onDragLeave={(e) => dragEndLeaveItem(e)}
                            onDragEnd={(e) => dragEndLeaveItem(e)}
                            onDragOver={(e) => dragOverItem(e, item)}
                            onDrop={(e) => dropItem(e, biography, item)}

                        >
                            <ItemCheckbox
                                onCheckedChange={onCheckedChange}
                                done={item.done}
                                id={item.id}
                            />

                            <Item
                                editMode={editMode}
                                val={item.fullName}
                                id={item.id}
                                updateText={(newText) => updateFullName(item.id, newText)}

                            />
                            {item.info.map(info =>
                                <Item
                                    editMode={editMode}
                                    key={info.id}
                                    id={info.id}
                                    val={info.text}
                                    updateText={(newText) => updateInfo(item.id, info.id, newText)}
                                />
                            )}
                        </tr>
                    )
                }
                </tbody>
            </table>


            <div className={s.btn__box}>
                <button className={s.btn} onClick={() => {
                    addTable(biography)
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