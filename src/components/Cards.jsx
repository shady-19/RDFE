import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cards = () => {

    const [data, setData] = useState([]);

    const [SearchApiData, setSearchApiData] = useState([]);

    const [filterVal, setFilterVal] = useState("");

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/getallbooks/').then(res => {
            setData(res.data)
            setSearchApiData(res.data)
            console.log(res.data)
        })

    }, []);


    const handleFilter = (e) => {
        if (e.target.value === '') {
            setData(SearchApiData)
        } else {
            const filterResult = SearchApiData.filter(item => item.bname.toString().toLowerCase().includes(e.target.value.toLowerCase()) || item.author.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||

            item.about.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||

            item.subject.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||

            item.bid.toString().toLowerCase().includes(e.target.value.toLowerCase())
            
            
            )


            setData(filterResult)
        }
        setFilterVal(e.target.value)
    }


    return (
        <div>
            <input class="position-absolute top-0 end-0 m-2 p-1 mx-2" type="search" placeholder='Search Your book here'

                value={filterVal} onChange={(e) => handleFilter(e)}


            />
            <section>

                <table class="table table-hover table-fixed">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>About</th>
                            <th>Genre</th>

                        </tr>
                    </thead>



                </table>

            </section>

            {
                data.map((value, key) => {
                    return (
                        <div>


                            <section>

                                <table class="table table-hover table-fixed">



                                    <tbody>
                                        <tr>
                                            <th scope="row"> {value.bid} </th>
                                            <td>{value.bname}</td>
                                            <td>{value.author}</td>
                                            <td>{value.subject}</td>
                                            <td>{value.about}</td>

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

export default Cards
