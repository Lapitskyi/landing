import React, {useEffect, useState} from "react"
import Table from "./Table";


const TableContainer = (props) => {
    const {tableBody, tableHeadlines} = props.storeTable.state.tableArray;

    const [tableItem, setTableItem] = useState(tableBody);
    const [editMode, setEditMode] = useState(false);

    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        setTableItem(tableBody)
    }, [tableBody])


    const activateEditMode = () => {
        setEditMode(!!editMode === false)
    }

    const onCheckedChange = (id) => {
        setTableItem(
            tableItem.map((item) =>
                (item.id === id) ? {...item, done: !!item.done === false} : item
            )
        );
    }

    const updateFullName = (id, text) => {
        setTableItem(
            tableItem.map(item =>
                (item.id === id) ? {...item, fullName: text} : item
            )
        );
    }

    const updateInfo = (id, idInfo, text) => {
        setTableItem(
            tableItem.map(item => {
                if (item.id === id) {
                    item.info.map(info =>
                        (info.id === idInfo) ? {...info, text: info.text = text} : info)
                }
                return item
            })
        )
    }

    const addTable = () => {
        let newTable = {
            id: tableItem.length + 1,
            fullName: "",
            done: false,
            info: [
                {id: "text", text: ""},
                {id: "phone", text: ""},
                {id: "email", text: ""}
            ]
        };
        setTableItem([
            ...tableItem, newTable
        ])
    }

    const deleteItemTable = () => {
        setTableItem(
            tableItem.filter((item) => item.done === false)
        )

    }
    const onSort = (text, e) => {
        setTableItem([
            ...tableItem.sort((a, b) => {
                if (text === 'id' || text === 'phone') {
                    return a.id - b.id ? -1 : 1
                } else if (text === 'fullName') {
                    return a.fullName > b.fullName ? -1 : 1 || a.fullName < b.fullName ? -1 : 1;
                }
            })
        ])
    }

    const dragStartItem = (e, item) => {
        setCurrentItem(item)
    }

    const dragEndLeaveItem = (e) => {
        currentItem.dragAndDrop = false
    }

    const dragOverItem = (e, td) => {
        e.preventDefault();
            currentItem.dragAndDrop = true
    }

    const dropItem = (e, item) => {
        e.preventDefault()
        currentItem.dragAndDrop = false
        let itemIndex = tableItem.indexOf(currentItem);
        tableItem.splice(itemIndex, 1);
        let dropIndex = tableItem.indexOf(item);
        tableItem.splice(dropIndex + 1, 0, currentItem);

        setTableItem(
            tableItem.map(items =>
                (items.id === tableItem.id) ? {...tableItem}
                        : {...items}
            )
        )
    }

    return <Table activateEditMode={activateEditMode}
                  onCheckedChange={onCheckedChange}
                  updateFullName={updateFullName}
                  updateInfo={updateInfo}
                  addTable={addTable}
                  deleteItemTable={deleteItemTable}
                  onSort={onSort}
                  dragStartItem={dragStartItem}
                  dragEndLeaveItem={dragEndLeaveItem}
                  dragOverItem={dragOverItem}
                  dropItem={dropItem}
                  editMode={editMode}
                  tableItem={tableItem}
                  tableHeadlines={tableHeadlines}
    />

}

export default TableContainer;