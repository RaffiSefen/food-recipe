import FoodProvider from "./Components/Context/FoodContext"
import FoodsPage from "./Components/All Food/FoodsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RecipeDetails from "./Components/Recipes/RecipeDetails"

function App() {
  return (
    <FoodProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<FoodsPage />} />
            <Route path="/recipe/details/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FoodProvider>
  )
}

export default App
