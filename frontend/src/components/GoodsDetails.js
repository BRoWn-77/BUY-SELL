import { useGoodsContext } from "../hooks/useGoodsContext"

const GoodsDetails = ({ goods }) => {
    const { dispatch } = useGoodsContext()

    const handleClick = async () => {
        const response = await fetch('/api/goods/' + goods._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_GOODS', payload: json})
        }
    }

    return ( 
        <div className="goods-details">
            <h4>{goods.name}</h4>
            <p><strong>Description:</strong>{goods.description}</p>
            <p><strong>Price ($):</strong>{goods.price}</p>
            <p><strong>Quantity:</strong>{goods.quantity}</p>
            <p>{goods.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
     );
}
 
export default GoodsDetails;