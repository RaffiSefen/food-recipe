import { useContext } from "react"
import { FoodContext } from "../Context/FoodContext"
import Food from "./Food"

const FoodList = () => {
  const foods = useContext(FoodContext)
  console.log("food in component :>> ", foods)

  return (
    <div className="m-3 p-2">
      {foods.map((food) => {
        return <Food food={food}></Food>
      })}
    </div>
  )
}
export default FoodList
