import { ReactElement } from 'react'
import { ErrorOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Box from '../Box'

interface Props {
  severity?: 'error' | 'warning'
  message: string
  'data-cy'?: string
}

const ErrorFieldBase = ({
  severity = 'error',
  message,
  'data-cy': dataCy,
}: Props): ReactElement => {
  const isError = severity === 'error'

  return (
    <Box
      data-cy={dataCy}
      sx={({ spacing, palette }) => ({
        display: 'flex',
        padding: spacing(0.5),
        background: '#fff',
        color: palette[isError ? 'error' : 'warning'].main,
        border: '1px solid',
        borderColor: palette[isError ? 'error' : 'warning'].main,
        borderRadius: '4px',
      })}
    >
      <ErrorOutline
        fontSize="small"
        sx={{ marginRight: ({ spacing }) => spacing(0.5) }}
      />
      <Typography sx={{ fontSize: 12 }}>{message}</Typography>
    </Box>
  )
}

export default ErrorFieldBase
