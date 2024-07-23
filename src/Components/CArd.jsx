import React from 'react';
import { IMAGE_URL } from '../utils/url';
import "./card.css"
function CArd(props) {
    
    const {resData}=props
    if (!resData) {
        return null; // or return some fallback UI
    }
    const {name,areaName,cloudinaryImageId,avgRating}=resData
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={IMAGE_URL+cloudinaryImageId} className="h-[250px] rounded-lg" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{areaName}</p>
                <a href="#" className="btn btn-primary">{avgRating}</a>
            </div>
        </div>
    );
}

export const withPromotedLabel= (CArd)=>{
    return()=>{
        return(
        <div className='relative'>
            <label className='text-white absolute top-5 z-10 left-8 p-1 bg-black rounded-lg hover:scale[1.1]'>Promoted</label>
            <CArd/>
        </div>
        )
    }
}




export default CArd