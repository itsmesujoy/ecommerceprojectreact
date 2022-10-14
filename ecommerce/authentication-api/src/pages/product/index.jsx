import React from 'react'
import Addproduct from './addproduct'
import Listproduct from './list-product'
import { useState, useEffect } from 'react'
import { ProductgetApiService } from "../../services/api/auth"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import Sider from '../components/sider'
function Product() {
  const [show, setShow] = useState(false);
  const [List, setList] = useState([])
  const [selected, setSelected] = useState(null)
  const Handle = async () => {
    let value = await ProductgetApiService()
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
        setSelected(null)
        setShow(true)
      }}
      >
        Add new Products
      </Button>
      
     
      <Modal show={show} >
        <Modal.Header closeButton>
          <Button onClick={() => setShow(false)}>X</Button>
        </Modal.Header>
        <Modal.Body>
          <Addproduct Handle={Handle} setShow={setShow} selected={selected} setSelected={setSelected} />
        </Modal.Body>
      </Modal>

      <Listproduct List={List} Handle={Handle} setShow={setShow} setSelected={setSelected} />
      </div></div>
  )
}

export default Product

