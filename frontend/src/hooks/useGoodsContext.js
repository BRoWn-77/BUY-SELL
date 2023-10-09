import { GoodsContext } from "../context/GoodsContext";
import { useContext } from "react";

export const useGoodsContext = () => {
    const context = useContext(GoodsContext)

    if (!context) {
        throw Error('useGoodsContext must be used inside a GoodsContextProvider')
    }

    return context
}