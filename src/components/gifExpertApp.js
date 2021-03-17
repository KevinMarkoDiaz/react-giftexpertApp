import React, { useState } from "react";
import AddCategorie from "./addcategorie";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Colombia']);
    /*
        const handleAdd = () => {
            setCategories([...categories,]);
    
        };
    */


    return <>
        <h2>GifExpertApp</h2>

        <AddCategorie setCategories={setCategories} />

        <hr />
        <ol>
            {
                categories.map(category =>
                (<GifGrid
                    category={category}
                    key={category}

                />)
                )
            }
        </ol>

    </>
};


export default GifExpertApp;