const GoodsDetails = ({ goods }) => {
    return ( 
        <div className="goods-details">
            <h4>{goods.name}</h4>
            <p><strong>Description:</strong>{goods.description}</p>
            <p><strong>Price ($):</strong>{goods.price}</p>
            <p><strong>Quantity:</strong>{goods.quantity}</p>
            <p>{goods.createdAt}</p>
        </div>
     );
}
 
export default GoodsDetails;