import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ITodo } from '../Types'

const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos/`
      )
      console.log(response.data)

      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default List
