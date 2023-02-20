import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

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


function Liblog() {
  const navigate = useNavigate();

  const [email, setuseremail] = useState("")
  const [password, setuserpassword] = useState("")
  const [cookies, setCookie] = useCookies(['jwt'])

  const login = () => {

    const data = {

      "email": email,
      "password": password
    }
    axios.post("http://127.0.0.1:8000/api/login/", data

    ).then((response) => {
      Cookies.set('jwt', response.data.jwt, {
        expires: 0.041, sameSite: 'lax',
      })
      console.log(response)
      
      navigate('/libhome')
    }, (error) => {
      alert("Incorrect Details")
      window.location.reload(true);
    }
    )
  }

  return (
    <div>
      <Header></Header>


      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100'
                 onChange={(event) => { setuseremail(event.target.value) }} 
                labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />

                <MDBInput wrapperClass='mb-4 mx-5 w-100' onChange={(event) => { setuserpassword(event.target.value) }} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />


                <MDBBtn onClick={login} className="mb-4 w-100">Login</MDBBtn>




                <div>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>

  );
}

export default Liblog;