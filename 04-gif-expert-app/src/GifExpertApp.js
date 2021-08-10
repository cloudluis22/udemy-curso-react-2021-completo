import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

// Componente Funcional.
const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    const deleteCategory = (category) => {
        if (window.confirm(`¿Desea eliminar las imágenes relacionadas con ${category}?`)) {
            setCategories(categories.filter(cats => cats !== category));
        }
    };

    return (
      <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid
                            category={category}
                            key={category}
                            delete={deleteCategory}
                        />;
                    })
                }
            </ol>
        </>
    );

}

export default GifExpertApp ;