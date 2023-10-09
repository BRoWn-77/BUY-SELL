import { createContext, useReducer } from "react";

export const GoodsContext = createContext()

export const goodsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GOODS':
            return {
                goods: action.payload
            }
        case 'CREATE_GOODS':
            return {
                goods: [action.payload, ...state.goods]
            }
        case 'DELETE_GOODS':
            return {
                goods: state.goods.filter((g) => g._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const GoodsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(goodsReducer, {
        goods: null
    })
    
    return (
        <GoodsContext.Provider value={{...state, dispatch}}>
            {children}
        </GoodsContext.Provider>
    )
}