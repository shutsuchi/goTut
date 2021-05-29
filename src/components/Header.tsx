import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { DEEP_BLUE_COLOR, WHITE_COLOR } from '../constants/theme'

const useStyles = makeStyles(() =>
  createStyles({
    pageHeader: {
      height: '6rem',
      display: 'flex',
      alignItems: 'center',
      background: DEEP_BLUE_COLOR,
      color: WHITE_COLOR,
      padding: '0 2rem',
    },
  }),
)

const Header: FC = (props) => {
  const classes = useStyles()

  return (
    <header className={classes.pageHeader}>
      <h1>goTut</h1>
    </header>
  )
}

export default Header
