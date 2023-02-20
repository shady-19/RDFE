import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Cookie } from 'universal-cookie';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from 'react-bootstrap'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import Header from '../Header';
import { useCookies } from 'react-cookie';
const Libreg = () => {

  const navigate = useNavigate();

  const navigatelog = () => {
    navigate('/login');
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = () => {
    const data = {
      "name": name,
      "email": email,
      "password": password
    }

    axios.post('http://127.0.0.1:8000/api/reg/', data).then(res => {

      console.log(res.data)
    }, alert("Succesfully Register!!!!! Please Login")
    )

    navigate('/login');

  }


  return (
    <div>
      <Header></Header>
      
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>

                <MDBInput wrapperClass='mb-4'
                 onChange={(event) => { setName(event.target.value) }} 
                label='Name' id='form1' type='text' />
                <MDBInput wrapperClass='mb-4' onChange={(event) => { setEmail(event.target.value) }} label='Email' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' onChange={(event) => { setPassword(event.target.value) }} label='Password' id='form1' type='password' />



                <MDBBtn onClick={register} className="mb-4 w-100">Sign up</MDBBtn>



                <div>

                  <p className="mb-0">Already have an account?
                  </p>
                  <MDBBtn onClick={navigatelog} className="mb-4 w-100">Log In</MDBBtn>




                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
     
    </div>
  )
}

export default Libreg
