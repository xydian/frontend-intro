import React, { ReactElement, ReactNode } from 'react'
import { Typography } from '@mui/material'

interface Props {
  children: ReactNode
}

const Label = ({ children }: Props): ReactElement => {
  return (
    <Typography
      sx={theme => ({
        fontWeight: 500,
        fontSize: 14,
        marginBottom: theme.spacing(0.5),
        marginRight: theme.spacing(1),
      })}
    >
      {children}
    </Typography>
  )
}

export default Label
