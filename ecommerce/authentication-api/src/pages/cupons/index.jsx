import React from 'react'
import AddCupons from './add-cupons'
import ListCupons from './list-cupons'
import {couponApiService} from "../../services/api/auth";
import {useEffect,useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../components/header';
import Sider from '../components/sider';
function Cupons() {
    const [show, setShow] = useState(false);
    const [list, setList] = useState([])
    const [selected, setSelected] = useState(null)
    const Hsubmit = async () => {
        let value = await couponApiService  ()
        console.log(value)
        setList([...value.data.data])
    }
    useEffect(() => {
        Hsubmit()
    }, [])
    return (
        <>
        <Header/>
        <Sider/>
        <div className='all'>
            <Button variant="primary" className='button13' onClick={() => setShow(true)}>
                Add new cupon
            </Button>

            <Modal show={show} onHide={() => { setShow(false) }} >
                <Modal.Header closeButton>
                    <Button  onClick={()=> setShow(false)}>X</Button>
                </Modal.Header>
                <Modal.Body>
                    <AddCupons setShow={setShow} selectedItems={selected} Hsubmit={Hsubmit} setSelected={setSelected} />
                </Modal.Body>
            </Modal>
            {/* <div>Cupons</div> */}
            {/* <AddCupons selectedItems={selected} Hsubmit={Hsubmit} setSelected={setSelected}/> */}
            <ListCupons setShow={setShow} list={list} Hsubmit={Hsubmit} setSelected={setSelected}/>
            </div> </>
    )
}

export default Cupons