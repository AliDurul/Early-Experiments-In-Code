import React from 'react'
import { useNavigate } from 'react-router-dom'

const MealItem = ({ meals }) => {
    let navigate = useNavigate()
    return (
        <>
           {
                (!meals) ?"Not Found": meals.map(item=>{
                    return(
                    <div  className="card" key={item.idMeal} onClick={()=>navigate(item.idMeal)}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <span>
                        <h3>{item.strMeal}</h3>
                        </span>
                    </div>
                    )
                })
            }


        </>
    )
}

export default MealItem