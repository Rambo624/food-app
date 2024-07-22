import React, { useEffect, useState } from 'react'
import CArd from './CArd'
import "./body.css"
import restuarantlist from '../Data/restData'




function Body() {

  const [restaurants, setRestaurants] = useState(restuarantlist)
  const [searchText, setsearchText] = useState("")


  return (
    <div>
      <div className='body-buttons'>
        <input className='search' type="text" value={searchText} onChange={(e) => {
          setsearchText(e.target.value)
        }} />
        <button className='search-button' onClick={() => {
          const searchList = restuarantlist.filter((res) => (
            res.name.toLowerCase().includes(searchText.toLowerCase())
          ))
          setRestaurants(searchList)
        }}>Search</button>
        <div className="button">
          <button className='top-button' onClick={() => {
            const filteredList = restuarantlist.filter((restaurant) => (
              restaurant.avgRating > 4
            ))
            setRestaurants(filteredList)
          }} >Top Rated Restaurants</button>
        </div>
      </div>

      <div className='cards'>{
        restaurants.map((restaurant) => (
          <CArd key={restaurant.id} restData={restaurant} />
        ))

      }


      </div>
    </div>


  )
}

export default Body