import { Table } from "antd";


export default function Tables() {
    const data = [
        {
            name: "Name 1",
            age: 10,
            address: "Address 1",
            key: "1"
        },
        {
            name: "Name 2",
            age: 20,
            address: "Address 2",
            key: "2"
        },
        {
            name: "Name 3",
            age: 30,
            address: "Address 3",
            key: "3"
        },
    ]

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "key",
            render: name => (
                <a href="">{name}</a>
            )
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "key",
            sorter: (a,b) => a.age - b.age
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "key"
        },
        {
            title: "Graduated",
            key: "key",
            render: record => (
                <p>{record.age > 20 ? "Yes" : "No"}</p>
            )
        },
        {
            title: "Test",
            key: "keyTest",
            render: record => (
                <p style={{color: record.address === "Address 1" ? "blue" : "green"}}>{record.address}</p>
            )
        }
    ]

  return (
    <div>
        <Table
            dataSource={data}
            columns={columns}
        >

        </Table>
    </div>
  )
}
