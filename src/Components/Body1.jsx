import React, { useEffect, useState } from 'react'
import CArd, {withPromotedLabel} from './CArd'
import "./body.css"
import { Link } from 'react-router-dom'




function Body() {

  const [restaurants, setRestaurants] = useState([])
  const [filterRestaurants, setfilterRestaurants] = useState([])
  const [searchText, setsearchText] = useState("")
  const [loading, setLoading] = useState(true)
const RestaurantCardPromoted = withPromotedLabel(CArd)
  useEffect(() => {
    fetchdata()
  }, [])

  async function fetchdata() {
    const data = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=9.9312328&lng=76.267304099999`)
    const json = await data.json()
    console.log(json.data.success)
    console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants[0].info.promoted)
    const resData = json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants
    console.log( resData)
    setRestaurants(resData)
    setfilterRestaurants(resData)
  }




  /*
  
  if(!restaurants.length===0){
    setLoading(false)
  }
  
  
  if(loading){
    return <div>Loading....</div>
  }
  */
  /*
  if(onlineStatus===false){
    return <div><h1>Oops!!! Looks Like You Are Offline</h1></div>
  }
  */
  return (
    <div >
      <div className='flex items-center  '>
        <div>
        <input className='border border-solid border-black p-1 ml-2 rounded-tl-lg rounded-bl-lg' type="text" value={searchText} onChange={(e) => {
          setsearchText(e.target.value)
        }} />
        <button className="border border-solid border-black p-1 px-2 bg-blue-600 text-white rounded-tr-lg rounded-br-lg" onClick={() => {
          const searchList = restaurants.filter((res) => (
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          ))
          setfilterRestaurants(searchList)
        }}>Search</button>
        </div>
       
        <div >
          <button className='border border-solid border-black mt-2 ml-5 p-1 bg-gray-100 rounded-md mb-2' onClick={() => {
            const filteredList = restaurants.filter((restaurant) => (
              restaurant.info.avgRating > 4.3
            ))
            setfilterRestaurants(filteredList)
          }} >Top Rated Restaurants</button>
        </div>
      </div>

      <div className='flex flex-wrap justify-between'>{
        filterRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/help/${restaurant.info.id}`}>
            {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant.info}/>:<CArd resData={restaurant.info}/>}
       
          
          </Link>
        ))

      }


      </div>
    </div>


  )
}

export default Body