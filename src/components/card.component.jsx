import React from 'react';
import './card.style.css'

export const Card=props=>(
 <div className='card-container'>
     <img 
     src={`${props.userData.avatar}`}
     alt="pf-image" />
     <h1>{props.userData.first_name + ' '+ props.userData.last_name }</h1>
     <p>{props.userData.email}</p>
     
 </div>
)
