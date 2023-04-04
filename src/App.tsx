import axios from 'axios'
import React, { FC, useState } from 'react'
import Hover from './components/Hover'
import List from './components/List'
import SearchComponent from './components/SearchComponent'
import useInput from './hooks/useInput'
import { ITodo } from './Types'

const App: FC = () => {
  // кастомный хук useInput возвращает value и onChange, и мы с помощью спред оператора передаем в инпут эти значения
  const username = useInput('')
  const password = useInput('')

  return (
    <div>
      <div style={{ padding: 20 }}>
        <input {...username} type={'text'} placeholder='username' />
        <input {...password} type={'text'} placeholder='password' />
        <button onClick={() => console.log(username.value, password.value)}>
          Click
        </button>
      </div>
      <div style={{ padding: 20 }}>
        <Hover />
      </div>
      <div
        style={{
          width: '90vh',
          padding: 20,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <List />
        <SearchComponent />
      </div>
    </div>
  )
}

export default App
