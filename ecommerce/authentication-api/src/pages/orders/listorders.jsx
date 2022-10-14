import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { ordersdeleteApiService }from "../../services/api/auth"

function Listorders({ List, Handle, setShow }) {
    const Deletebutton=async(id)=>{
        let datas = await ordersdeleteApiService(id)
        console.log(datas);
        Handle()
    }

    return (
        <div className='row'>{List.map((item, index) => {

            return (
           

                    <div key={index} className="col-3 ml-2 card text-white bg-dark mb-3 ds" >
                        <div className="card-header">{item.date}</div>
                        <div className="card-body">
                            <h5 className="card-title">{item.total}</h5>
                            <p className="card-text">{item.product_id}</p>
                            <p className="card-text">{item.qty}</p>
                        <button onClick={() => { Deletebutton(item._id) }} className="btn btn-primary"><AiFillDelete /></button>
                        </div>
                    </div>
                

            )
        })}</div>
    )
}

export default Listorders