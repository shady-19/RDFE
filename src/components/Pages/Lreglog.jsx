// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import { Cookie } from 'universal-cookie';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// import {
//   MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBInput,
// }

//   from 'mdb-react-ui-kit';
// import Header from '../Header';
// import { useCookies } from 'react-cookie';



// function Lreglog() {

//   const [name, setUsername] = useState("")
//   const [email, setuseremail] = useState("")
//   const [password, setuserpassword] = useState("")
//   const [cookies, setCookie] = useCookies(['jwt'])


//   const navigate = useNavigate();
//   const register = () => {
//     const data = {
//       "name": name,
//       "email": email,
//       "password": password
//     }

//     axios.post('http://127.0.0.1:8000/api/reg/', data).then(res => {

//       console.log(res.data)
//     })

//     navigate('/');
//   }

//   const login = () => {

//     const data = {

//       "email": email,
//       "password": password
//     }
//     axios.post("http://127.0.0.1:8000/api/login/", data).then((response) => {
//       console.log(response)
//       localStorage.setItem('jwt' , response.data.jwt)
//        setCookie('jwt', response.data.jwt, { httponly: true, maxAge: 60 })
//       navigate('/libhomee')

      

//     },
//     (error) => { 
//        alert ("Kuch Galat hai bhai")
    
    
//     window.location.reload(true);

       
    
//   }
//     )

//   }


//   // Dont
//   const [justifyActive, setJustifyActive] = useState('tab1');;

//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };


//   // Dont



  
//   return (
//     <div>
// <ToastContainer></ToastContainer>
//       <Header></Header>
//       <MDBContainer className="loginb p-3 my-5 d-flex flex-column w-50">

//         <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
//           <MDBTabsItem>
//             <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
//               Login
//             </MDBTabsLink>
//           </MDBTabsItem>
//           <MDBTabsItem>
//             <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
//               Register
//             </MDBTabsLink>
//           </MDBTabsItem>
//         </MDBTabs>

//         <MDBTabsContent>
//           <MDBTabsPane show={justifyActive === 'tab1'}>



//             <MDBInput wrapperClass='mb-4' onChange={(event) => { setuseremail(event.target.value) }} label='Email address' Required id='form1' type='email' name='email' />


//             <MDBInput wrapperClass='mb-4' Required onChange={(event) => { setuserpassword(event.target.value) }} label='Password' id='form2' type='password' />



//             <MDBBtn onClick={login} className="mb-4 w-100">Log in</MDBBtn>


//           </MDBTabsPane>

//           <MDBTabsPane show={justifyActive === 'tab2'}>
//             <MDBInput wrapperClass='mb-4' onChange={(event) => { setUsername(event.target.value) }} label='Name' id='form1' type='text' />
//             <MDBInput wrapperClass='mb-4' onChange={(event) => { setuseremail(event.target.value) }} label='Email' id='form1' type='email' />
//             <MDBInput wrapperClass='mb-4' onChange={(event) => { setuserpassword(event.target.value) }} label='Password' id='form1' type='password' />



//             <MDBBtn onClick={register} className="mb-4 w-100">Sign up</MDBBtn>

//           </MDBTabsPane>

//         </MDBTabsContent>

//       </MDBContainer>
//     </div>
//   );
// }

// export default Lreglog;




//  // saveJWTinCookie('token', response.data.jwt)
//       //localStorage.setItem('token',response.data.jwt)
//       // setTemp(response.data)
//       // console.log("temp state",temp)