import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipieCard from '../components/RecipieCard'

const Recipies = () => {
    const recipies =[
        {
            title : "Sev Puri",
            image : "/img/gallery/img1.jpeg",
            authorImg :"/img/top-chefs/chef1.jpg",
        },
        {
            title : "Special Thalli",
            image : "/img/gallery/img4.jpeg",
            authorImg :"/img/top-chefs/chef2.jpeg",
        },
        {
            title : "Chicken Pan Pizza",
            image : "/img/gallery/img3.jpeg",
            authorImg :"/img/top-chefs/chef3.jpeg",
        },
        {
            title : "Mutton Biryani",
            image : "/img/gallery/img5.jpeg",
            authorImg :"/img/top-chefs/chef4.jpg",
        },
        {
            title : "American Cheese Burger",
            image : "/img/gallery/img6.jpg",
            authorImg :"/img/top-chefs/chef5.jpeg",
        },
        {
            title : "Veg Kathai Rolls",
            image : "/img/gallery/img8.jpeg",
            authorImg :"/img/top-chefs/chef6.jpeg",
        },
    ].sort(()=> Math.random()-0.5)
  return (
    <div>
       <PreviousSearches />
       <div className='recipie-container'>
            {recipies.map((recipie,index) =>(
                <RecipieCard key={index} recipie={recipie}/>
            ))}
        </div> 
    </div>
  )
}

export default Recipies