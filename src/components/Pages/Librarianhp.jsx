import React from 'react'
import Lheader from '../Lheader'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import  { useState } from 'react';
import Cookies from 'js-cookie'

import axios from 'axios';

const Librarianhp = () => {
  const navigate = useNavigate();

const [data, setData] = useState([]);




useState(() => {

let token = Cookies.get('jwt')
console.log(token)

const config = {
  headers: {Accept: 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `${token}`}
};

axios.get("http://127.0.0.1:8000/api/librarian", config

).then((res) => {
        
        console.log(res.data)
        console.log(res.data.name)
        setData(res.data)
        


    },(error)=>{console.log(error);})
},[])

const Logout=()=>{
 axios.post('http://127.0.0.1:8000/api/logout/').then((response) => {
  Cookies.remove('jwt')
  alert("User Loggedout")
  navigate("/")
 }
 
 )
}

  return (
    <div>
<Lheader></Lheader>

       <MDBCard className="position-absolute top-50 start-50 translate-middle" style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://img.freepik.com/free-vector/girl-picking-book_53876-16966.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Hey There This is {data.name} </MDBCardTitle>
            <MDBCardText>
             I am Your Librarian I can help you many ways.
             My id is {data.id}.<br></br>
             You can reach out to me at <b>  {data.email} </b>

            </MDBCardText>
            <Button 
            onClick={() => {
              Logout();
          }}
            variant="danger">Logout</Button>{' '}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
     
       {/* change */}
       {
      
       }
      
        </div>
  )
}

export default Librarianhp
