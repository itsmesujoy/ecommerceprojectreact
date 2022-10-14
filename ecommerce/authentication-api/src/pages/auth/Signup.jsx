import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { SignUpApiService } from '../../services/api/auth'



function Signup() {
  const history = useHistory()
  const [signup, setSignup] = useState({
    name: "",
    email: "", password: ""
  })


  const handleInputSubmit = async (e) => {
    e.preventDefault();
    if (signup.email === "") {

      return (
        alert("enter valid email")
      )
    }

    const data = {

      name: signup.name,
      password: signup.password,
      email: signup.email
    };
    console.log(data)

    let values = await SignUpApiService(data);
    if (values.data.data.error) alert(values.data.data.error)
    else {
      alert('Values inserted.')
      historypush()
    }
    console.log(values.data.data)







  }

  const historypush = () => {
    history.push("/login")

  }
  const Clear = () => {


  }
  return (
    <div>



      <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control"
                              onChange={(ev) => {
                                let temp = { ...signup }
                                temp.name = ev.target.value
                                setSignup(temp)
                              }} />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control"
                              onChange={(ev) => {
                                let temp = { ...signup }
                                temp.email = ev.target.value
                                setSignup(temp)
                              }} />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example4c" className="form-control"
                              onChange={(ev) => {
                                let temp = { ...signup }
                                temp.password = ev.target.value
                                setSignup(temp)
                              }} />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>



                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg"
                            onClick={
                              handleInputSubmit
                            }>Register</button>
                        </div>
                        <h1 className='Already'>Alrady a member?</h1>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={historypush}>Login</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"></img>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



  )
}

export default Signup