import { ReactElement, ReactNode } from 'react'
import {
  FormControl as MuiFormControl,
  FormHelperText,
  CircularProgress,
} from '@mui/material'

import { Box } from '..'
import InfoTooltip from '../InfoTooltip'
import Label from '../Label'

interface Props {
  label?: string | ReactNode
  children: ReactNode
  error?: string
  isLoading?: boolean
  tooltip?: TooltipContents
  'data-cy'?: string
  fullWidth?: boolean
}

const FormControl = ({
  label,
  children,
  error,
  isLoading = false,
  tooltip,
  fullWidth = true,
  'data-cy': dataCy,
}: Props): ReactElement => {
  return (
    <MuiFormControl
      fullWidth={fullWidth}
      sx={{
        '& .Mui-error': {
          marginLeft: 0,
        },
      }}
    >
      {label && (
        <Box display="flex" alignItems="center">
          <Label>{label}</Label>
          {tooltip && <InfoTooltip {...tooltip} />}
          {isLoading && <CircularProgress size={12} />}
        </Box>
      )}
      {children}
      {!!error && (
        <FormHelperText
          error
          {...(dataCy
            ? {
                'data-cy': `${dataCy}-error`,
                'data-cy-error-message': error,
              }
            : {})}
        >
          {error}
        </FormHelperText>
      )}
    </MuiFormControl>
  )
}

export default FormControl
