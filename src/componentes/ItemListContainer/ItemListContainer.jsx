import React from 'react';
import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
    <>
    <div className='hero'>
     <h1>{props.greeting}</h1>
      <h4>{props.subtitle}</h4>
      </div>
     </>
  )
}

export default ItemListContainer;