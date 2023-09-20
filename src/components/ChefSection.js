import React from 'react'
import ChefCard from './ChefCard'

const ChefSection = () => {
    const chefs=[
        {
            name:"Sanjeev Kapoor",
            img:"/img/top-chefs/chef1.jpg",
            recipesCount:"10",
            cuisine:"Mexican"
        },
        {
            name:"Vikas Khanna",
            img:"/img/top-chefs/chef2.jpeg",
            recipesCount:"11",
            cuisine:"Italian"
        },
        {
            name:"Rajeev Brar",
            img:"/img/top-chefs/chef3.jpeg",
            recipesCount:"10",
            cuisine:"Indian"
        },
        {
            name:"Vineet Bhatia",
            img:"/img/top-chefs/chef4.jpg",
            recipesCount:"10",
            cuisine:"Mexican"
        },
        {
            name:"Shirpa Khanna",
            img:"/img/top-chefs/chef5.jpeg",
            recipesCount:"10",
            cuisine:"Mexican"
        },
        {
            name:"Saransh Golia",
            img:"/img/top-chefs/chef6.jpeg",
            recipesCount:"10",
            cuisine:"Mexican"
        },

    ]
  return (
    <div className='section chefs'>
        <h1 className='title'>Our Top Chefs</h1>
        <div className='top-chefs-container'>
            {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>)}
        </div>
    </div>
  )
}

export default ChefSection