import { Link } from "react-router-dom"

const Food = (props) => {
  const { food } = props
  return (
    <div className="border">
      <Link
        to={`/recipe/details/${food.id}`}
        food={food}
        className="btn btn-info mt-3"
      >
        <h2>{food.name}</h2>
      </Link>
    </div>
  )
}

export default Food
