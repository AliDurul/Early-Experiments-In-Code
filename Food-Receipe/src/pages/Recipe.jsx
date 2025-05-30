import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    let { Mealid } = useParams()

    const [meal, setMeal] = useState()
    console.log(Mealid);

    const getDatabyId = async () => {
        if (Mealid) {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
            setMeal(data.meals[0])
        }
    }
    console.log(meal);
    useEffect(() => {
        getDatabyId()


    }, [])

    return (
        <>
            {
                meal &&

                <div className="content">
                    <img src={meal.strMealThumb} alt="" />
                    <div className="inner-content">
                        <h1>{meal.strMeal}</h1>
                        <h2>{meal.strArea} Food</h2>
                        <h3>{meal.strCategory}</h3>
                    </div>

                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            <table >
                                <tbody>
                                    <tr>
                                        <td><h4>{(meal.strIngredient1).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure1}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient2).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure2}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient3).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure3}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient4).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure4}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient5).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure5}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient6).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure6}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient7).toUpperCase()}  </h4> </td>
                                        <td><> : {meal.strMeasure7}</></td>
                                    </tr>
                                    <tr>
                                        <td><h4>{(meal.strIngredient8).toUpperCase()} </h4> </td>
                                        <td><> : {meal.strMeasure8}</></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2>
                            <h4>{meal.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">

                        {/* setVurl(meal.strYoutube)
                                //const str=meal.strYoutube.split("=");
                                //state=str[str.length-1];
                                //state="hj"    */}


                        <iframe width="
                        100%" height="515" title="recipeVideo"
                            src={`https://www.youtube.com/embed/${Mealid}`}>
                        </iframe>
                    </div>

                </div>

            }
        </>
    )
}
export default Recipe