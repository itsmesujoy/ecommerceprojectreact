import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ProductApiService, ProducteditApiService, productsphotoApiService } from "../../services/api/auth";
import { useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';

const defaultVal = {
    name: "",
    description: "",
    price: "",
    strikeprice: ""
}


const productSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    description: Yup.string()
        .required('Required'),
    price: Yup.number()

        .required('Required'),
    strikeprice: Yup.number()
        .required('Required')
});

function Addproduct({ Handle, setShow, setSelected, selected }) {
    const [data, setData] = useState({ ...defaultVal })

    const handleSubmit = async (values) => {
        const data = {
            name: values.name,
            description: values.description,
            price: values.price,
            strikeprice: values.strikeprice

        }
             const form = new FormData()
        form.append('file', values.file)
        // await uploadApi
        // file
        let datas1 = await productsphotoApiService(form)
        console.log(datas1);
        if (selected === null) {
            data.file = datas1.data.file.filename
            let datas = await ProductApiService(data)
            Handle()
            return
        }
        else{
            data.id = selected._id
            let datas = await ProducteditApiService(data)
           console.log(datas)
            Handle()
            return

        }


    }
    useEffect(() => {
        if (selected !== null) {
            setData({
                name: selected.name,
                description: selected.description,
                price: selected.price,
                strikeprice: selected.strikeprice
            })
        }
        else {
            setData({ ...defaultVal })
        }
    }, [selected])
    return (
        <>
            {selected === null ? <h2 className='text-secondary'>Add Products</h2> : <h2 className='text-secondary'>Edit Products</h2>}
            <div className='container '>
              
                <Formik 
                    enableReinitialize={true}
                    initialValues={data
                    }
                    validationSchema={productSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        handleSubmit(values)
                        setShow(false)
                        resetForm()
                        setSelected(null)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        resetForm,
                        setFieldValue,
                        ...rest

                        /* and other goodies */
                    }) => {
                        console.log(rest)
                        return (
                            <>
                                <Form> 
                                    <input id="file" name="file" type="file" onChange={(event) => {
                                        setFieldValue("file", event.currentTarget.files[0]);
                                    }} />
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field
                                            className="form-control"

                                            id="name"
                                            name='name'
                                            placeholder='Product Name' />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <Field
                                            className="form-control"

                                            id="description"
                                            name='description'
                                            placeholder='Product description' />
                                        <ErrorMessage
                                            name="description"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Product price</label>
                                        <Field
                                            className="form-control"
                                            type="number"
                                            id="price"
                                            name='price'
                                            placeholder='Enter price' />
                                        <ErrorMessage
                                            name="price"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="strikeprice">Strikeprice</label>
                                        <Field
                                            className="form-control"
                                            type="number"
                                            id="strikeprice"
                                            name='strikeprice'
                                            placeholder='Final Price' />
                                        <ErrorMessage
                                            name="strikeprice"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                    <button type='button' onClick={() => {
                                        setSelected(null)
                                        resetForm()
                                    }} className="btn ml-10">Clear</button>
                                </Form>
                            </>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default Addproduct