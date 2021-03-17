import { useEffect, useState } from "react";
import { getGift } from "../components/helpers/getGift"

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {

        getGift(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs)
                    setstate({
                        data: imgs,
                        loading: false
                    }, 3000)
                })


            })

    }, [category]);





    return state;

};