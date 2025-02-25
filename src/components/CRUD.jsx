import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Input, message, Modal, Table } from 'antd'
import React, { useState } from 'react'

export default function CRUD() {
    const [isEditing, setIsEditing] = useState(false)
    const [editStudent, setEditStudent] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id:1,
            name:"John",
            email:"john@gmail.com",
            address:"John Address"
        },
        {
            id:2,
            name:"David",
            email:"david@gmail.com",
            address:"David Address"
        },
        {
            id:3,
            name:"James",
            email:"james@gmail.com",
            address:"James Address"
        },
        {
            id:4,
            name:"Sam",
            email:"sam@gmail.com",
            address:"Sam Address"
        },
    ])

    const columns = [
        {
            key:"1",
            title:"ID",
            dataIndex:"id"
        },
        {
            key:"2",
            title:"Name",
            dataIndex:"name"
        },
        {
            key:"3",
            title:"Email",
            dataIndex:"email"
        },
        {
            key:"4",
            title:"Address",
            dataIndex:"address"
        },
        {
            key:"5",
            title:"Action",
            render:(record) => {
                return <>
                <EditOutlined onClick={() => onEditStudent(record)} style={{cursor:"pointer"}} />
                <DeleteOutlined onClick={() => onDeleteStudent(record)} style={{color: "red", marginLeft:12, cursor:"pointer"}} />
                </>
            }
        }
        
    ]

    const onAddStudent = () => {
        const random = parseInt(Math.random() * 1000)
        const newStudent = {
            id: random,
            name:"Name" + random,
            email: random + "@gmail.com",
            address: random + " Address"
        }
        setDataSource(prev => {
            return [...prev, newStudent]
        })
    }

    const onEditStudent = (record) => {
        setIsEditing(true)
        setEditStudent({...record})
    }

    const onDeleteStudent = (record) => {
        Modal.confirm({
            title:"Are you sure you want to delete this student record?",
            okText:"Yes",
            okType:"danger",
            onOk:() => {
                setDataSource(prev => {
                    return prev.filter(student => student.id !== record.id)
                })
                message.success("Student deleted successfully")
            }
        })
    }

    const handleOnChange = (e) => {
        const { name, value} = e.target;
        setEditStudent(prev => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div>
        <Button onClick={onAddStudent}>Add a new Student</Button>
        <Table
            columns={columns}
            dataSource={dataSource}
        >
        </Table>
        <Modal
            title="Edit Student"
            open={isEditing}
            okText="Save"
            onCancel={() => {
                setIsEditing(false)
            }}
            onOk={() => {
                setDataSource(prev => (
                    prev.map(student => (
                        student.id === editStudent.id
                        ? editStudent
                        : student
                    ))
                ))
                setIsEditing(false);
                setEditStudent(null);
                message.success("Student updated successfully!");
            }}
        >
            <Input name='name' value={editStudent?.name} onChange={handleOnChange} style={{ marginBottom: 10 }}/>
            <Input name='email' value={editStudent?.email} onChange={handleOnChange} style={{ marginBottom: 10 }}/>
            <Input name='address' value={editStudent?.address} onChange={handleOnChange} />
        </Modal>
    </div>
  )
}
