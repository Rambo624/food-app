import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';

function Api() {
    
  const {resId}=useParams()
console.log(resId)
   const [resInfo, setresInfo]=useState(null)
  const [loading, setLoading]=useState(true)


useEffect(()=>{
    
    fetchData();
},[])

const fetchData =async ()=>{
    try {
        const data = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=9.9312328&lng=76.267304099999`);
        const json = await data.json();
       console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle)
        console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants[0].info.name);
        setresInfo(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
}
      
return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : !resInfo ? (
        <div>No data available</div>
      ) : (
        <h1>{resInfo.restaurants[0].info.name}</h1>
      )}
    </div>
  );
}
export default Api