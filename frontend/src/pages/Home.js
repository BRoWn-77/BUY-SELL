import { useEffect } from 'react'
import GoodsDetails from '../components/GoodsDetails'
import GoodsForm from '../components/GoodsForm'
import { useGoodsContext } from '../hooks/useGoodsContext'

const Home = () => {
    const {goods, dispatch} = useGoodsContext()

    useEffect(() => {
        const fetchGoods = async () => {
            const response = await fetch('/api/goods')
            const json = await response.json()

            if (response.ok) {
               dispatch({type: 'SET_GOODS', payload: json}) 
            }
        }

        fetchGoods()
    }, [])

    return ( 
        <div className='home'>
            <div className='goods'>
                {goods && goods.map((goods) => (
                    <GoodsDetails key={goods._id} goods={goods} />
                ))} 
            </div>
            <GoodsForm />
        </div>
        
        
     )
}
 
export default Home