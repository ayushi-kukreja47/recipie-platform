import React from 'react'
import Customimage from './Customimage'

const RecipieCard = ({recipie}) => {
  return (
    <div className='recipie-card'>
        <Customimage imgSrc={recipie.image} pt="65%"/>
        <div className='recipie-card-info'>
            <img className='author-img' src={recipie.authorImg} alt=""/>
            <p className='recipie-title'>{recipie.title}</p>
            <p className='recipie-desc'>Lorem ipsum dolor sit amet, consectetur</p>
            <p className='view-btn' href="#!">VIEW RECIPIE</p>
        </div>
    </div>
  )
}

export default RecipieCard