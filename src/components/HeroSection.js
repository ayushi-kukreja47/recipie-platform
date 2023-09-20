import React from 'react'
import Customimage from './Customimage'

const HeroSection = () => {
    const images=[
        "/img/gallery/img1.jpeg",
        "/img/gallery/img2.jpeg",
        "/img/gallery/img3.jpeg",
        "/img/gallery/img4.jpeg",
        "/img/gallery/img5.jpeg",
        "/img/gallery/img6.jpg",
        "/img/gallery/img7.webp",
        "/img/gallery/img8.jpeg",
        "/img/gallery/img9.jpeg",
    ]
  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What Are We About?</h1>
            <p className='info'>
                FoodiesHub is a place where you can please your soul and tummy with delicious food recipies of all cuisine and our service is absolutely free.So start exploring now.
            </p>
            <button className='btn'>Explore Now</button>
        </div>
        <div className='col gallery'>
            {images.map((src,index) =>(
                <Customimage key={index} imgSrc={src} pt={"90%"}/>
            ))}
            
        </div>
    </div>
  )
}

export default HeroSection