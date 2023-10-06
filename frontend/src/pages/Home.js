import { useEffect, useState } from 'react'

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
                <p key={goods._id}>{goods.name}</p>
            ))}
        </div>
        
     );
}
 
export default Home;