import React, { Component } from 'react';
import "../store.js"
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import Menu from './Menu.jsx'; 
import {Container, Card} from 'semantic-ui-react';
import '../App.css'
import BookCard from './BookCard.jsx';
import Filter from '../containers/Filter'


class App extends Component {
    
  componentWillMount() {
      const {setBooks} = this.props;
      axios.get('/books.json').then(({data}) => {
          setBooks(data);
      });
  }
    
  render() {
      const {books , isReady} = this.props;
      return(
       <Container>
         {this.props.match.params.id}
         <Menu/>
         <Filter/>
         <Card.Group itemsPerRow={4}>
         {!isReady ? 
         'Loading'
         : books.map((book, i) => (<BookCard key={i} {...book} />)
          )}
        </Card.Group>
    </Container>
      
    
    )
    
  }
}


export default App;
