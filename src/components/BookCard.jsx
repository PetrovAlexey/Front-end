import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const BookCard = ({title, author, price,  image, id}) => (
    <Card >
    <Image src={image} href={"/app/" + id}/ >
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{author}</span>
      </Card.Meta>
      
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
  </Card>
);

export default BookCard;