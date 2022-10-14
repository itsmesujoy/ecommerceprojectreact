import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { couponApiService } from "../../services/api/auth"
import { coupondelApiService } from "../../services/api/auth"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';


function ListCupons({ list, Hsubmit, setSelected, setShow }) {




  const Hdel = async (id) => {
    let value = await coupondelApiService(id)
    console.log(value)
    Hsubmit()
  }




  return (
    <div>

<div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">MAXIMUM AMOUNT</th>
              <th scope="col">MINIMUM AMOUNT</th>
              <th scope="col">MAXIMUM DISCOUNT</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.value}</td>
              <td>{item.max_amount}</td>
              <td>{item.min_amount}</td>
              <td>{item.max_discount}</td>
              <td>
                <button className='text-primary' onClick={() => Hdel(item._id)} ><AiFillDelete/></button>
                <button onClick={() => {
                  setShow(true)
                  setSelected({ ...item })
                }}><AiFillEdit/></button>


              </td>




            </tr>)



        })}
      
          </tbody>
        </table>
</div>


    </div>
  )
}

export default ListCupons