import { useEffect, useState } from 'react'
import GoodsDetails from '../components/GoodsDetails'


const Home = () => {
    const [goods, setGoods] = useState()

    useEffect(() => {
        const fetchGoods = async () => {
            const response = await fetch('/api/goods')
            const json = await response.json()

            if (response.ok) {
                setGoods(json)
            }
        }

        fetchGoods()
    }, [])

    return ( 
        <div className='goods'>
            {goods && goods.map((goods) => (
                <GoodsDetails key={goods._id} goods={goods} />
            ))}
        </div>
        
     );
}
 
export default Home;