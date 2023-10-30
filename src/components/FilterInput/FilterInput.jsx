import { useState } from 'react'
import style from "./FilterInput.module.css"

const FilterInput = ({ filtration }) => {
  const [filter, setFilter] = useState('')

  const filterHandler = (e) => {
    const name = e.target.value
    setFilter(name)
    filtration(name)
  }

  return (
    <div className={style.search}>
      <input
        type="search"
        placeholder="Search Name"
        value={filter}
        onChange={filterHandler}
      />
    </div>
  )
}
export default FilterInput
