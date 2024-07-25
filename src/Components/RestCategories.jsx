import React, { useState } from 'react'
import ItemList from './ItemList'
const RestCategories = (data) => {
    const [showItems, setShowItems] = useState(false)

    function handleclick() {
        setShowItems(!showItems)

    }
    return (
        <div>
            <div onClick={handleclick} className='flex my-3 bg-gray-200 justify-between w-[50%] mx-auto'>
                <span className='font-bold'>{data.data.title}({data.data.itemCards.length})</span>
                <p>🔽</p>
            </div >
            {showItems && < ItemList info={data.data.itemCards} />}
        </div>
    )
}

export default RestCategories