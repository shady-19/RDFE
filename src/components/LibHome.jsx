import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import React from 'react'


const LibHome = () => {
    axios.defaults.withCredentials = true
    const [details1, setDetails] = useState([]);
 
    const token=localStorage.getItem("jwt")
    // axios.interceptors.request.use(
    //   config=>{config.headers.authorization=`Bearer ${token}`;
    // return config;
    //   },error=>{return Promise.reject(error);}
    // );

    const addemployees_url = "http://127.0.0.1:8000"
  const authAxios=axios.create({
    
    Base_Url:addemployees_url,
    headers:{
      Authorization:`${token}`,
      Expires:60 ,
      Cookie: `${token}` ,
      

    }
  })


    useEffect(() => {

        authAxios.get("http://127.0.0.1:8000/api/librarian/").then((res) => {
             res.cookie('jwt',localStorage.getItem("jwt"))
            setDetails(res.data)
            console.log(res.data)
        })
    }, [])

    return (

        <div>

            <section>

                <table class="table table-hover table-fixed">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>


                        </tr>
                    </thead>



                </table>



            </section>

            {
               details1.map((value, key) => {
                return (
                    <div>


                        <section>

                            <table class="table table-hover table-fixed">



                                <tbody>
                                    <tr>
                                        <th scope="row"> {value.id} </th>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>


                                    </tr>

                                </tbody>

                            </table>

                        </section>



                    </div>
                )
            })
            }


        </div>





    )
}

export default LibHome
