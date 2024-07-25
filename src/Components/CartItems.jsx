import { addItem } from "../utils/CartSlice"
import { MENU_URL} from "../utils/url"
import { useDispatch } from "react-redux"



function CartItems({items}) {
  

    const dispatch=useDispatch()
function handleAddItem(item){
dispatch(addItem(item))

}


    return (
        <div className=" w-[50%]  mx-auto">
            {items.map((i) => {
                
                return <div key={i.card.info.id} className="ml-0 pl-1  flex justify-between  border-b-2 my-3" >
                    <div className="w-9/12">
                        <span>{i.card.info.name}- ₹{i.card.info.price/100}</span>
                   
                    <li className="ml-0 w-11/12 list-none ">{i.card.info.description}</li>
                    </div>
                   <div className=" w-3/12 relative">
                   <img className=" mb-4" src={MENU_URL+i.card.info.imageId} alt=""  />
                   <button onClick={()=>handleAddItem(i)} className="bg-white font-bold  w-[70%] border py-2 text-[#4cb591] absolute bottom-0 left-[15%] px-1 rounded-lg">ADD+</button>
                   </div>
                   
                  
                   
                   
                </div>

            })}

        </div>
    )
}

export default CartItems