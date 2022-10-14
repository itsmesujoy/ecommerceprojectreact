import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { categoriesdeleteApiService } from "../../services/api/auth"
const FileUrl ="http://localhost:3006/uploads/"
function ListCategories({ List, Handle, setSelected, setShow }) {
    const Deletebutton = async (id) => {
        let value = await categoriesdeleteApiService(id)


        Handle()

    }




    return (
        <dir>
        
            <div className='row  bg-dark lg'><br />{List.map((item, index) => {
                return (
                    <div className='col-3 ' key={index}><br />
                        <div className="card  text-white bg-secondary mb-3 image">
                            <div className="card-header text-white ">
                              Name:  {item.name}
                            </div>
                            <img className='dp'  src={FileUrl + item.file} alt="" />
                            <div className="card-body description ">
                                <h5 className="card-title ">DESCRIPTION:   {item.description}</h5>
            
                            
                            </div><div>    <button onClick={() => { Deletebutton(item._id) }} className="btn btn-primary mr-2"><AiFillDelete /></button>
                                <button className='ml-2 bg-success' onClick={() => {
                                    setSelected({ ...item })
                                    setShow(true)
                                }}><AiFillEdit /></button></div>
                        </div>
                        













                    </div>


                )

            })}</div>

        </dir>
    )
}

export default ListCategories