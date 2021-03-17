import React from 'react';
import { useFetchGifs } from '../hooks/useFetcGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);
    /* 
 
     useEffect(() => {
 
         getGift(category).then(imgs => setimages(imgs))
 
     }, [category]);

    getGift()
*/
    return (
        <>
            <h3>{category}</h3>

            {loading && <h2>Cargando</h2>}

            <div className="cardGrid">



                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img} />)
                }

            </div>
        </>
    )
}

export default GifGrid;

