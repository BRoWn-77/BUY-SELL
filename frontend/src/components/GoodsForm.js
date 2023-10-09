import { useState } from 'react'
import { useGoodsContext } from '../hooks/useGoodsContext'

const GoodsForm = () => {
    const {dispatch} = useGoodsContext()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const  [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const goods = {name, description, price, quantity}

        const response = await fetch('/api/goods', {
            method: 'POST',
            body: JSON.stringify(goods),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setDescription('')
            setPrice('')
            setQuantity('')
            setError(null)
            console.log('new goods added', json)
            dispatch({type: 'CREATE_GOODS', payload: json})
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new goods</h3>

            <label>Name of Goods:</label>
            <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Description of Goods:</label>
            <input
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />

            <label>Price of Goods ($):</label>
            <input
            type='number'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            />

            <label>Quantity of Goods:</label>
            <input
            type='number'
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            />

            <button>Add Goods</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default GoodsForm