import { useState } from 'react';
import { data } from './Data';
import  Card  from './Card';
import './App.css';

function App() {

const[book, setBook] = useState(0);
const{id} = data[book];

const previousBook = () => {
  setBook((prevBook)=> {
    prevBook --
    if (prevBook < 0){
     return data.length-1
    }
    return prevBook
  })
}


const nextBook = () => {
  setBook((prevBook)=> {
    prevBook ++
    if(prevBook === data.length-1){
      prevBook = 0
    }
    return prevBook
  })
}

  return (
    <div className='container'>
     
     <Card key={id} {...data[book]}/>

     <div className='wrapper'>
     <div>
      <button className='btn'onClick={previousBook}>Previous book</button>
     </div>

     <div>
      <button className='btn' onClick={nextBook}>Next book</button>
     </div>

     
     </div>

    </div>
  );
}

export default App;
