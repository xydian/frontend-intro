import { ReactElement, ReactNode } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import {
  TextField as MuiTextField,
  InputProps,
  OutlinedTextFieldProps,
  InputAdornment,
  InputBaseComponentProps,
} from '@mui/material'
import FormControl from '../FormControl'
import NumberInput from '../NumberInput'

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {
  name: string
  type?: 'text' | 'number'
  placeholder?: string
  label?: string | ReactNode
  inputLabel?: string
  tooltip?: TooltipContents
  InputProps?: InputProps
  inputProps?: InputBaseComponentProps
  format?: (value: string | number) => string | number
  unit?: string
  'data-cy'?: string
}

const TextField = ({
  name,
  type = 'text',
  rows = 1,
  multiline = false,
  autoFocus = false,
  placeholder = '',
  disabled = false,
  label = '',
  inputLabel,
  InputProps = {},
  inputProps,
  tooltip,
  unit,
  format = (value) => value,
  'data-cy': dataCy,
  ...textFieldProps
}: Props): ReactElement => {
  const { control } = useFormContext()
  const {
    field: { onChange, onBlur, name: fieldName, value, ref },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <FormControl
      data-cy={dataCy}
      label={!inputLabel ? label : undefined}
      error={error?.message}
      tooltip={tooltip}
    >
      <MuiTextField
        variant="outlined"
        onChange={onChange}
        onBlur={onBlur}
        value={format(value)}
        // number format needs text type
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        name={fieldName}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        inputRef={ref}
        size="small"
        InputProps={{
          ...(type === 'number'
            ? {
                // eslint-disable-next-line
                inputComponent: NumberInput as any,
              }
            : {}),
          endAdornment: unit ? (
            <InputAdornment position="end">{unit}</InputAdornment>
          ) : null,
          ...InputProps,
        }}
        inputProps={inputProps}
        label={inputLabel}
        data-cy={dataCy}
        {...textFieldProps}
      />
    </FormControl>
  )
}

export default TextField
