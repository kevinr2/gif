import { useState } from "react"
import { AddCategory,GifGrid } from "./components"



export const GifExpertApp = () => {
    const [categories, setCategories]=useState(['one puch'])

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory))return;
        setCategories([newCategory,...categories])
        /* console.log(newCategory) */
    }
    return (
        <div>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory 
            /* setCategories={setCategories} */ 
            onNewCategory={value=>onAddCategory(value)}
            />
            {/* listado de gif */}
            
            
                {categories.map(category =>(
                    <div key={category}>
                        <GifGrid category={category} />
                    </div>
                ))}
            
            {/* gif items */}
        </div>
  )
}
