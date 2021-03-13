import React, { useState } from "react";



const AddCategorie = ({ setCategories }) => {

    const [inputValue, setImputValue] = useState('hola mundo')

    const handleInputChange = (e) => {
        setImputValue(e.target.value);
    };



    const handeSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategories(cats => [...cats, inputValue]);
            setImputValue('');
        }
    };

    return (
        <form onSubmit={handeSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>


    )

};

export default AddCategorie;



