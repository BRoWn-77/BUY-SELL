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