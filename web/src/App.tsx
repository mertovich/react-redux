import React, {useState} from 'react'
import { addTodo, remove } from './features/todoSlice'
import { useAppDispatch, useAppSelector } from './store'

type Props = {}

const App = (props: Props) => {
  const todos = useAppSelector(state => state.todo)
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  const onSave  = (title:string) => {
    dispatch(addTodo(title))
    setTitle('')
  }

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => onSave(title)} >Send</button>
      <ul>
        {todos.map(todo => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={() => removeItem(todo.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default App