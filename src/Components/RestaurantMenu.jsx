import React from 'react'
import { restMenu } from '../Data/restData'
import RestCategories from './RestCategories'
function RestaurantMenu() {

    

    const {title}=restMenu[0]
    const categories=restMenu[0].categories
   
  return (
    <div >
        <h3 className='ml-[45%]' >{title}</h3>
      {categories.map((category)=>{

 return  <RestCategories key={category.title} data={category} />
      })}
       
      
    </div>
  )
}

export default RestaurantMenu