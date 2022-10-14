import React from 'react'
import AddCategories from "./addcategories"
import ListCategories from "./list-categories"
import { useState, useEffect } from 'react'
import { categoriesgetApiService } from "../../services/api/auth"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import Sider from '../components/sider'
function Categories() {
    const [show, setShow] = useState(false);
    const [List, setList] = useState([])
    const [selected, setSelected] = useState(null)
    const Handle = async () => {
        let value = await categoriesgetApiService()
        console.log(value)
        setList(value.data.data)
    }
    useEffect(() => {
        Handle()
    }, [])
    return (
        <div>
            <Header />
            <Sider/><div className='all'>
            <Button variant="primary" className='button13' onClick={() => {setShow(true)
        setSelected(null)}}>
                Add new Categories
            </Button>

            <Modal show={show} >
                <Modal.Header closeButton>
                    <Button onClick={() => setShow(false)}>X</Button>
                </Modal.Header>
                <Modal.Body>
                    <AddCategories Handle={Handle} setShow={setShow} selected={selected} setSelected={setSelected} />
                </Modal.Body>
            </Modal>

            <ListCategories List={List} Handle={Handle} setShow={setShow} setSelected={setSelected} />
            </div>
        </div>
    )
}

export default Categories

