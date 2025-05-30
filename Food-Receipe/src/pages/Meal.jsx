import React, { useEffect, useState } from "react";
import MealItem from "../components/MealItem";
import ReacipeIndex from "../components/ReacipeIndex";

import axios from "axios"


const Meal = () => {

  
    const [meals, setMeals] = useState()
    const [search, setSearch] = useState("")

    const [url, setUrl] = useState(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);


  
    const fetcData = async () => {
        const request = await axios.get(url)
        setMeals(request.data.meals)
    }

    useEffect(() => {
        fetcData()
    }, [url])


    const handleSearch = (e) => {
        setSearch(e.target.value.toLocaleLowerCase())
       
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

    }

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    {/* <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4> */}
                </div>
                <div className="searchBox">
                    <form action="" >
                        <input type="search" className="search-bar"
                        placeholder="Search for meal.."
                        
                        onChange={(e) => handleSearch(e)} />
                    </form>
                </div>
                <div className="container">

                    {
                        meals ? <MealItem meals={meals} /> : "No Data Found!"
                    }

                </div>
                <div className="indexContainer">
                    <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>

            </div>
        </>
    )
}
export default Meal;