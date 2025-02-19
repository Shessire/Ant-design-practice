import { Table, Tag } from 'antd'
import React, { useState } from 'react'

export default function SelectRow() {

    const [selectedRow, setSelectedRow] = useState(["1", "3"])

    const dataSource = [
        {
            id:"1",
            key:"1",
            name:"Student Name 1",
            grade:"A+"
        },
        {
            id:"2",
            key:"2",
            name:"Student Name 2",
            grade:"A"
        },
        {
            id:"3",
            key:"3",
            name:"Student Name 3",
            grade:"B"
        },
        {
            id:"4",
            key:"4",
            name:"Student Name 4",
            grade:"C"
        },
        {
            id:"5",
            key:"5",
            name:"Student Name 5",
            grade:"A"
        },
    ]

    const columns = [
        {
            title:"Student ID",
            dataIndex:"id"
        },
        {
            title:"Student Name",
            dataIndex:"name"
        },
        {
            title:"Student Grade",
            dataIndex:"grade",
            render: ((grade) => {
                const color = grade.includes("A") ? "Green" : grade.includes("B") ? "Blue" : "Red"
                return <Tag color={color} key={grade}>{grade}</Tag>
            })
        },
    ]

  return (
    <div>
        <Table
            columns={columns}
            dataSource={dataSource}
            rowSelection={{
                selectedRowKeys: selectedRow,
                onChange: (keys) => {
                    setSelectedRow(keys)
                },
                onSelect: (record) => {
                    console.log(record)
                },
                getCheckboxProps: (record) => ({
                    disabled: record.grade === "C"
                }),
                selections:[
                    Table.SELECTION_NONE,
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    {
                        key: "even",
                        text: "Select Even Rows",
                        onSelect:(allKeys) => {
                            const selectedKeys = allKeys.filter(key => {
                                return key %2 === 0
                            })
                            setSelectedRow(selectedKeys)
                        }
                    },
                    {
                        key: "excellent",
                        text: "Select Excellent Students",
                        onSelect:(allKeys) => {
                            const selectedKeys = allKeys.filter(key => {
                                const isExcellent = dataSource.find(student => {
                                    return student.key === key && student.grade.includes("A")
                                })
                                return isExcellent
                            })
                            setSelectedRow(selectedKeys)
                        }
                    },
                ]
            }}
        >

        </Table>
    </div>
  )
}
