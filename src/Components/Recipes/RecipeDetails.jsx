import { useContext } from "react"
import { useParams } from "react-router"
import { FoodContext } from "../Context/FoodContext"

const RecipeDetails = () => {
  const { id } = useParams()
  console.log("id  :>> ", id)
  const foods = useContext(FoodContext)
  const foodItem = foods.find((item) => {
    return id == item.id
  })
  console.log("foodItem :>> ", { foodItem })

  console.log("foods in details :>> ", foods)

  return <h3>Recipe Details of {foodItem.name}</h3>
}

export default RecipeDetails
