import React from 'react'
import Header from '../components/header'
import { useEffect, useState } from 'react';
import Addorders from './addorders'
import { ordersgetApiService } from "../../services/api/auth"
import Listorders from './listorders'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Sider from '../components/sider';

function Orders() {
  const [List, setList] = useState([])
  const [show, setShow] = useState(false)



  const Handle = async () => {
    let value = await ordersgetApiService()
    console.log(value)
    setList(value.data.data)
  }
  useEffect(() => {
    Handle()
  }, [])
  return (
    <div>
      <Header />
      <Sider />
      <div className='all'>
        <Button variant="primary" className='button13' onClick={() => {

          setShow(true)
        }}
        >
          Order Products
        </Button>

        <Modal show={show} >
          <Modal.Header closeButton>
            <Button onClick={() => setShow(false)}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <Addorders Handle={Handle} setShow={setShow} />
          </Modal.Body>
        </Modal>

        <Listorders List={List} Handle={Handle} setShow={setShow} />
      </div>
    </div>
  )
}

export default Orders