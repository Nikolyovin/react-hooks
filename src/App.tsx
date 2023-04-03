import React, { FC, useState } from 'react'
import Hover from './components/Hover'
import List from './components/List'
import useInput from './hooks/useInput'

const App: FC = () => {
  // кастомный хук useInput возвращает value и onChange, и мы с помощью спред оператора передаем в инпут эти значения
  const username = useInput('')
  const password = useInput('')

  return (
    <div>
      <input {...username} type={'text'} placeholder='username' />
      <input {...password} type={'text'} placeholder='password' />
      <button onClick={() => console.log(username.value, password.value)}>
        Click
      </button>

      <Hover />
      <List />
    </div>
  )
}

export default App
