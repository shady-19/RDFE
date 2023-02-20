import React from 'react';
import Header from '../Header';
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// import './Userlogin.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';

function UserLoginForm() {

  const [uemail, setuseremail] = useState("")
  const [upassword, setuserpassword] = useState("")
  const navigate = useNavigate();

const login=()=>{
        const data = {

            "uemail": uemail,
            "upassword": upassword
        }
        axios.post("http://127.0.0.1:8000/api/ulogin/",data).then((response)=>{
            console.log(response)
            console.log(response.data)
            localStorage.setItem('uname',response.data.uname)
            localStorage.setItem('uemail',response.data.uemail)


            navigate("/UserHpage")
            //setTemp(response.data)
           // console.log("temp state",temp)
            // if (response.data.error) {
            //     alert("Incorrect Credentials")
            //     alert(response.data.error);
            //   } else {
            //     sessionStorage.setItem("jwt",response.data.jwt)
            //     // navigate('/',{state: response.data})
            //     console.log(response.data)
            //   }
        })
    }



  return (
    <div> 
      <Header></Header>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' onChange={(event)=>{setuseremail(event.target.value)}} label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' onChange={(event)=>{setuserpassword(event.target.value)}} label='Password' id='formControlLg' type='password' size="lg"/>


              <MDBBtn onClick={login} size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

             

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div >
  );
}

export default UserLoginForm;


