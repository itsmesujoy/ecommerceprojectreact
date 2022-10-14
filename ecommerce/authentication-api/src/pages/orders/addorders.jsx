import React from 'react'

import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ordersApiService } from "../../services/api/auth"
const ordersSchema = Yup.object().shape({
    date: Yup.string()
        .required('Required'),
    total: Yup.number()
        .required('Required'),
    product_id: Yup.string()
        .required('Required'),
    qty: Yup.number()
        .required('Required'),

});
function Addorders({ Handle, setShow }) {
   
    const handlesubmit=async(values)=>{
        const data = {
            date: values.date,
            total: values.total,
            product_id: values.product_id,
            qty: values.qty

        }
        let datas = await ordersApiService(data)
        console.log(datas)
        Handle()

    }
  return (
      <div>   <Formik
          enableReinitialize={true}
          initialValues={{
              date: "",
              total: "",
              product_id: "",
              qty: ""

          }
          }
          validationSchema={ordersSchema}
          onSubmit={(values, { setSubmitting, }) => {
              console.log(values)
              handlesubmit(values)
              setShow(false)
            
              
          }}
      >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handlesubmit,
              isSubmitting,
             

              /* and other goodies */
          }) => {
           
              return (
                  <>
                      <Form>
                          <div className="form-group">
                              <label htmlFor="name">date</label>
                              <Field
                                  className="form-control"

                                  id="date"
                                  name='date'
                                  placeholder='Purchase Date' />
                              <ErrorMessage
                                  name="date"
                                  component="div"
                                  className="text-danger"
                              />

                          </div>
                          <div className="form-group">
                              <label htmlFor="description">Total</label>
                              <Field
                                  className="form-control"
                                  type="number"
                                  id="total"
                                  name='total'
                                  placeholder='Total price' />
                              <ErrorMessage
                                  name="total"
                                  component="div"
                                  className="text-danger"
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="price">Product Id</label>
                              <Field
                                  className="form-control"
                                  
                                  id="product_id"
                                  name='product_id'
                                  placeholder='Enter product id' />
                              <ErrorMessage
                                  name="product_id"
                                  component="div"
                                  className="text-danger"
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="strikeprice">Quantity</label>
                              <Field
                                  className="form-control"
                                  type="number"
                                  id="qty"
                                  name='qty'
                                  placeholder='Total Quantity' />
                              <ErrorMessage
                                  name="qty"
                                  component="div"
                                  className="text-danger"
                              />
                          </div>
                          <Button type="submit" className="btn btn-primary">Submit</Button>
                     
                      </Form>
                  </>
              )
          }}
      </Formik></div>
  )
}

export default Addorders