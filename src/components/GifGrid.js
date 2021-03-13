import React from 'react';
export const GifGrid = ({ category }) => {

    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=superman&limit=10&api_key=cnI2ih8LB5b5gtm4g2ZLNXeS0O3j4YsZ';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {

            return {
                id: img.id,
                tittle: img.tittle,
                url: img.images?.downsized_medium.url

            }
        });

        console.log(gifs);

    };


    getGift();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;

