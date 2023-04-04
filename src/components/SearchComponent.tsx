import axios from 'axios'
import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { ITodo } from '../Types'

const SearchComponent = () => {
  const [value, setValue] = useState<string>('')
  //поиск query поисковое слово
  const search = async (query: string) => {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?query=${query}`
      )
    } catch (e) {
      console.log(e)
    }
  }
  //хук для поиска, принимает коллбэк и задержку
  const debouncedSearch = useDebounce(search, 1000)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div>
      <input type='text' value={value} onChange={onChange} />
    </div>
  )
}

export default SearchComponent
