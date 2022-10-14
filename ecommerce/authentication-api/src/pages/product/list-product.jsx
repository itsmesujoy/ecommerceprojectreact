import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { ProductdeleteApiService } from "../../services/api/auth"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const FileUrl = "http://localhost:3006/uploads/"
function Listproduct({ List, Handle, setSelected,  }) {


  const [show, setShow] = useState(false);
const Deletebutton =async(id)=>{
  let value = await ProductdeleteApiService(id)


  Handle()

}




  return (
   <dir>
      <div className='row'>{List.map((item,index)=>{
return(
<div className='col-3' key={index}>
    <div className="card bg-dark text-white">
      <h1 className="card-header text-white">
        {item.name}
      </h1>
      <div className="card-body">
        <h5 className="card-title">DESCRIPTION:   {item.description}</h5>
        <p className="card-text">PRICE: {item.price}</p>
        <p className="card-text">STRIKEPRICE:  {item.strikeprice}</p>
        <img className='dp' src={FileUrl + item.file} alt="" />
        
        <Button variant="primary" className=' hi1' onClick={() => {
          setSelected(null)
          setShow(true)
        }}
        >
          Delete
        </Button>


        <Modal show={show} >
          <Modal.Header closeButton>
            <Button onClick={() => setShow(false)}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure ?</p>
            <button onClick={() => { Deletebutton(item._id)
               setShow(false) }} className="btn btn-primary"><AiFillDelete /></button>
          </Modal.Body>
        </Modal>
        <button className='ml-2 bg-warning' onClick={()=>{setSelected({...item})
          setShow(true)
        }}><AiFillEdit/></button>
      </div>
    </div>









 

  
  
</div>

  
)

})}</div>

   </dir>
  )
}

export default Listproduct