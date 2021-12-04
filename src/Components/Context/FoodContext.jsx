import { createContext, useEffect, useState } from "react"
import Spinner from "../Spinner"
export const FoodContext = createContext()

const FoodProvider = (props) => {
  const url = "http://localhost:5005/food"

  const [food, setFood] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const handleFetch = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setFood(data)
    } catch (error) {
      console.log("error :>> ", error)
    }
  }
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      handleFetch()
      setIsLoading(false)
    }, 1500)
  }, [])

  const { children } = props
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <FoodContext.Provider value={food}>{children}</FoodContext.Provider>
      )}
    </>
  )
}

export default FoodProvider
