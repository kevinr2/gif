import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState([])
    const onInputChage =(event)=>{
        setInputValue(event.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <=1)return;
        
        onNewCategory(inputValue.trim())
        /* setCategories(categories =>[inputValue, ...categories]) */
        setInputValue('')
    }
  return (
    <form onSubmit={(onSubmit)}>
        <input 
        type="text"
        placeholder="busca gifs"
        value={inputValue}
        onChange={onInputChage}
        />      
    </form>
  )
}
