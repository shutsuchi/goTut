import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Todo } from '../models/Todo'
import { SECONDARY_PALE_COLOR, WHITE_COLOR } from '../constants/theme'

const useStyles = makeStyles(() =>
  createStyles({
    todoItem: {
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: SECONDARY_PALE_COLOR,
      color: WHITE_COLOR,
      marginBottom: '1.5rem',
      borderRadius: '5px',
    },
    todoItemText: {
      padding: '1rem',
    },
  }),
)

const TodoItem: FC<Todo> = (props) => {
  const classes = useStyles()
  const { title, description, isCompleted} = props

  return (
    <article className={classes.todoItem}>
      <section className={classes.todoItemText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
      <input type="checkbox" defaultChecked={isCompleted} />
    </article>
  )
}

export default TodoItem