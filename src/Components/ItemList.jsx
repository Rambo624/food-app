import { MENU_URL} from "../utils/url"




function ItemList(items) {
    console.log(items.info)
    const item = items.info
    return (
        <div className=" w-[50%]  mx-auto">
            {item.map((i) => {
                
                return <ul className="ml-0 pl-1  flex justify-between  border-b-2" >
                    <div>
                        <span>{i.card.info.name}- ₹{i.card.info.price/100}</span>
                   
                    <li className="ml-0 w-11/12 ">{i.card.info.description}</li>
                    </div>
                   
                   <img className="w-3/12" src={MENU_URL+i.card.info.imageId} alt="" />
                   
                   
                </ul>

            })}

        </div>
    )
}

export default ItemList