/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint space-before-function-paren: 0 */
import React, { forwardRef, ReactElement } from 'react'
import { Box as MuiBox } from '@mui/material'

type BoxProps = React.ComponentProps<typeof MuiBox>

// @ts-ignore required due to a TS bug caused by the interplay of MUI and R3F
// (which seems to be an unfortunate combination). adding component="div to
// every Box might be another solution. more context:
// * https://stackoverflow.com/questions/68692230/ts-expression-produces-a-union-type-that-is-too-complex-to-represent-with-materi
// * https://stackoverflow.com/questions/69625898/typescript-box-produces-a-union-type-that-is-too-complex-to-represent
const Box = forwardRef(function MuiBoxComponent(
  props: BoxProps,
  ref
): ReactElement {
  // eslint-disable-line
  // @ts-ignore
  return <MuiBox {...props} ref={ref} />
})

export default Box
