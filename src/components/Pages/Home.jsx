import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {

const navigate = useNavigate();
const navigatebooks = () => {
 navigate('/book');
  };

  const navigatereg = () => {
    navigate('/librarian');
     };

     const navigatelog = () => {
      navigate('/userlogin');
       };   

  return (
    <div>
      <Header></Header>
      <CardGroup>
      <Card>
        <Card.Img style={{ height: '18rem' }} variant="top" src="https://media.istockphoto.com/id/1335708681/photo/stacks-of-books-for-teaching-knowledge-college-library-green-background.jpg?b=1&s=170667a&w=0&k=20&c=_-kpFpVyUWgiCafriJgZ6Wr_kLQ2kt19SSCZvlWK63Y=" />
        <Card.Body>
          <Card.Title>See All Books</Card.Title>
          <Card.Text>
           In our Library you can find variety of books from different Genere.
           Please take a look at by the button provided bellow.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <Button className='btn mx-auto d-block' variant="outline-success" size="lg" onClick={navigatebooks}>{'      '}Books</Button>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ height: '18rem' }}  variant="top" src="https://plus.unsplash.com/premium_photo-1664372145482-8ae1e368ede4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" />
        <Card.Body>
          <Card.Title>User</Card.Title>
          <Card.Text>
           Your first time here!!! Not to worry we got you Covered. Get yourself Registered by a Librarian then Login using the button provided below.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" >  <Button className='btn mx-auto d-block' variant="outline-success" size="lg" onClick={navigatelog}>Login</Button></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ height: '18rem' }}  variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/81/92/man-on-background-with-bookcase-librarian-vector-9298192.jpg" />
        <Card.Body>
          <Card.Title>Librarian</Card.Title>
          <Card.Text>
            Want to Join as a Librarian !!!!!!!!
            Register yourself by button bellow.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> <Button className='btn mx-auto d-block' variant="outline-success" size="lg"  onClick={navigatereg}>Register/Login</Button>
</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      

    
     

      
    </div>
  )
}

export default Home
