import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

export default function Filters() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            setDataSource(data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [])


    const columns = [
        {
            title:"ID",
            dataIndex:"id",
            key:"1"
        },
        {
            title:"User ID",
            dataIndex:"userId",
            key:"2",
            sorter: (rec1, rec2) => {
                return rec1.userId > rec2.userId
            }
        },
        {
            title:"status",
            dataIndex:"completed",
            key:"3",
            render: completed => (
                <p>{completed ? "Completed" : "In progress"}</p>
            ),
            filters:[
                {text: "Completed", value: true},
                {text: "In progress", value: false}
            ],
            onFilter:(value, record) => {
                return record.completed === value
            }
        },
    ]

  return (
    <div>
        <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
        >

        </Table>
    </div>
  )
}
