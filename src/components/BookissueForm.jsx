import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

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


function App() {

  const [bid, setBid] = useState("")
  const [uid, setUid] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate();

  const issue = () => {
    const data = {
      "bid": bid,
      "uid": uid,
      "id": id
    }

    axios.post('http://127.0.0.1:8000/api/issue/', data).then(res => {

      console.log(res.data)
    }, alert("Book Issued!!!!!"),

    )
   
    axios.get(`http://127.0.0.1:8000/api/libid/${id}`).then(res =>{
      console.log('name',res.data.name)
      localStorage.setItem('name',res.data.name)
    })

    axios.get(`http://127.0.0.1:8000/api/getbooks/${bid}`).then(res =>{
      console.log('bname',res.data.bname)
      console.log(res.data.bid)
      localStorage.setItem('bname',res.data.bname)
      localStorage.setItem('bid',res.data.bid)

    })
   navigate("/issuedbooks")
  }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Issue Your book Here</h2>
             
              <MDBInput wrapperClass='mb-4 mx-5 w-100'
                onChange={(event) => { setBid(event.target.value) }}
                // value={localStorage.getItem('bid')}

              labelClass='text-white' label='Enter Book Id' id='formControlLg' type='number' size="lg"/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
               onChange={(event) => { setUid(event.target.value) }}
              labelClass='text-white' label='Enter User Id' id='formControlLg' type='number' size="lg"/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
               onChange={(event) => { setId(event.target.value) }}
              labelClass='text-white' label='Enter Librarian Id' id='formControlLg' type='number' size="lg"/>

             
              <MDBBtn onClick={issue} variant="danger" className='mx-2 px-5'  size='lg'>
                Issue
              </MDBBtn>

             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;