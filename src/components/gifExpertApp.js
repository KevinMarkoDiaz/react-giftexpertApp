import React, { useState } from "react";
import AddCategorie from "./addcategorie";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['millos', 'nacional', 'america']);
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
                categories.map((category) => {
                    return <li key={category}>{category}</li>

                })
            }
        </ol>

    </>

};


export default GifExpertApp;