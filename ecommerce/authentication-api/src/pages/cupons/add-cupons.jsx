import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CoupenApiService, CoupeneditApiService } from '../../services/api/auth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const defaultVal = {
    min_amount: '',
    max_amount: '',
    value: '',
    max_discount: '',
}
const CuponSchema = Yup.object().shape({
    min_amount: Yup.number()
        .required('Required'),
    max_amount: Yup.number()
        .required('Required'),
    value: Yup.string()
        .min(1, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    max_discount: Yup.number()
        .required('Required')
});

function AddCupons({ Hsubmit, selectedItems, setSelected, setShow }) {

    const [data, setData] = useState({...defaultVal})
    const handleSubmit = async (values) => {
        const data = {
            min_amount: values.min_amount,
            max_amount: values.max_amount,
            value: values.value,
            max_discount: values.max_discount
        }
        if (selectedItems === null) {
            let datas = await CoupenApiService(data)
            Hsubmit()
            return
        }
        else{
            data.id = selectedItems._id
            let datas = await CoupeneditApiService(data)
            Hsubmit()
            return
        }
    }
    useEffect(() => {
        if (selectedItems !== null) {
            setData({
                max_amount: selectedItems.max_amount,
                min_amount: selectedItems.min_amount,
                value: selectedItems.value,
                max_discount: selectedItems.max_discount
            })
        }
        else {
            setData({...defaultVal})
        }
    }, [selectedItems])


    return (<div >



        <>


            <div className='container '>
                <h2>{selectedItems === null ? 'Add': 'Edit'} Cupons</h2>
                <Formik
                    enableReinitialize={true}
                    initialValues={data}
                    validationSchema={CuponSchema}
                    onSubmit={(values, { setSubmitting, resetForm, ...rest }) => {
                        console.log(rest)
                        console.log(values)
                        handleSubmit(values)
                        resetForm()
                        setSelected(null)
                        setShow(false)
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
                        ...rest
                        /* and other goodies */
                    }) => {
                        // console.log(rest)
                        return (
                            <>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="min_amount">Minimum amount</label>
                                        <Field
                                            className="form-control"
                                            type="number"
                                            id="min_amount"
                                            name='min_amount'
                                            placeholder='Min amount' />
                                        <ErrorMessage
                                            name="min_amount"
                                            component="div"
                                            className="text-danger"
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="max_amount">Maximum amount</label>
                                        <Field
                                            className="form-control"
                                            type="number"
                                            id="max_amount"
                                            name='max_amount'
                                            placeholder='Max amount' />
                                        <ErrorMessage
                                            name="max_amount"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="value">Cupon code</label>
                                        <Field
                                            className="form-control"
                                            id="value"
                                            name='value'
                                            placeholder='Enter cupon code' />
                                        <ErrorMessage
                                            name="value"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="max_discount">Maximum discount</label>
                                        <Field
                                            className="form-control"
                                            type="number"
                                            id="max_discount"
                                            name='max_discount'
                                            placeholder='Max discount' />
                                        <ErrorMessage
                                            name="max_discount"
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
        </> </div>

    )
}

export default AddCupons