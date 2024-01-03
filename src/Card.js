import React, { useState } from 'react';

function Card ({id, name, by, image, source, description, show}){
    

 const[showText, setShowText] = useState(show);
 
 const showMe = () => {
    setShowText(!showText);
 }

return (
       
<div className='containerWrap' key={id}>

<div className='container'>
 <h1 >Books About Future</h1>
</div>

<div className='container'>
 <h2 className='bold'>{id} - {name}</h2>
</div>

<div className='container'>
 <h2 className="red">{by}</h2>
</div>

<div className='container'>
 <img src={image} width="160px" alt="book"/>
</div>

<div className='container'>
 <p>Source:{source}</p>
</div>

<div className='container'>
 <h4>{showText? description : description.substring(0, 300)}
 <button className="showBtn" onClick={showMe}>{showText? "Show less...":"Show more..."}</button>
 </h4>

</div>

</div>

    )
}

export default Card;