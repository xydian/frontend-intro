import { ReactElement, forwardRef } from 'react'
import NumberFormat, { InputAttributes } from 'react-number-format'

interface Props {
  onChange: (values: {
    target: {
      name: string
      value: string
    }
  }) => void
  name: string
}

const NumberInput = forwardRef<NumberFormat<InputAttributes>, Props>(
  (props, ref): ReactElement => {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        type="text"
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        thousandSeparator="."
        isNumericString
        decimalSeparator=","
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        decimalScale={other.decimalScale || 2}
      />
    )
  }
)

NumberInput.displayName = 'NumberInput'

export default NumberInput
