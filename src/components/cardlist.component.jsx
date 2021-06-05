import React from 'react';
import './cardlist.styles.css'
import {Card} from './card.component'

export const CardList= (props)=>
{

    return (<div className='card-list'>{
        
        props.cardData
        .map((values)=>
        ( <Card key = {values.id} userData = {values} />))
          
    }</div>)
} 
