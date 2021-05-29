import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Todo } from '../models/Todo'
import TodoItem from './TodoItem'

const useStyles = makeStyles(() =>
  createStyles({
    todoList: {
      padding: '1.5rem',
      listStyle: 'none',
    },
  }),
)

interface TodoListProps {
  todos: Todo[],
}

const TodoList: FC<TodoListProps> =  (props) => {
  const classes = useStyles()
  const { todos } = props

  return (
    <ul className={classes.todoList}>
      {
       todos.map((todo, idx) => (
          <li key={idx}>
            <TodoItem
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
            />
          </li>
       ))
      }
    </ul>
  )
}

export default TodoList
