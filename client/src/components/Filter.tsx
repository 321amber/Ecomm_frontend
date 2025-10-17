import type { RootState } from "../store";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";


export const Filter = ({catagories,setCatagories}) => {
    const [choosingCatagories, setChoosingCatagories] = useState<string[]>([])
    const [selectedCatagories, setSelectedCatagories] = useState<string[]>([]);
    const items = useSelector((state:RootState)=> state.products.items);   

    useEffect(()=>{
        if(items.length>0){

            const uniqueCatagory = Array.from(new Set(items.map((products)=> products.category)));
            
            setChoosingCatagories(uniqueCatagory);
        }
    },[items])

     const handleCheckboxChange = (category: string) => {
    let updatedSelected: string[];

    if (catagories.includes(category)) {
      updatedSelected = catagories.filter((c) => c !== category);
    } else {
      updatedSelected = [...catagories, category];
    }

    setCatagories(updatedSelected);
  };
  
    
  return (
   <div style={{'marginTop':'50px'}} className="filterItems">
      <h3 className="filterIntro">Filter by Category: </h3>
      {choosingCatagories.map((category, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={category}
            checked={catagories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category}>{category.toUpperCase()}</label>
        </div>
      ))}
    </div>
  )
}


