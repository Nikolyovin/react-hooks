import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import useScroll from '../hooks/useScroll'
import { ITodo } from '../Types'

const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [page, setPage] = useState<number>(1)
  const limit = 20

  //ссылка на блок внутри которого нужен бесконечный скролл
  const parentRef = useRef<HTMLDivElement>(null)
  //ссылка на элемент который появляется в зоне видимости и после подгружает следующую страницу
  const childRef = useRef<HTMLDivElement>(null)

  const fetchTodos = async (page: number, limit: number) => {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
      )
      console.log(response.data)
      //тк мы подгружаем порционно, то предыдущие данные копируем и туда добавляем новые данные
      setTodos((prev) => [...prev, ...response.data])
      //прибавляем страницу
      setPage((prev) => prev + 1)
    } catch (e) {
      console.log(e)
    }
  }
  // хук для бесконечного скролла
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  )

  return (
    <div ref={parentRef} style={{ height: '50vh', overflow: 'auto' }}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ padding: 10, border: '1px solid black' }}>
          {todo.id} {todo.title}
        </div>
      ))}
      <div ref={childRef} style={{ height: 20, background: 'green' }}></div>
    </div>
  )
}

export default List
