import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Post = ({post}) => {

    return (
        <Card style={{width:'auto'}}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>{post.category}</Card.Text>
{/*           <Card.Body.Text>{post.comments}</Card.Body.Text> */}
          </Card.Body>
          <Card.Img variant="bottom" src={post.img}/>
          </Card>
    );
}

export default Post;
