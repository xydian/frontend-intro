import { ReactElement } from 'react'
import InfoIcon from '@mui/icons-material/Info'
import { Typography } from '@mui/material'

import { StyledTooltip } from './styles'
import Box from '../Box'

interface Props extends TooltipContents {
  className?: string
  iconFontSize?: 'inherit' | 'large' | 'medium' | 'small'
}

const InfoTooltip = ({
  text,
  headline,
  className = '',
  iconFontSize = 'small',
}: Props): ReactElement => {
  return (
    <StyledTooltip
      title={
        <>
          {headline && <Typography variant="h6">{headline}</Typography>}
          <Typography variant="body2">{text}</Typography>
        </>
      }
      placement="right"
      className={className}
    >
      <Box
        sx={({ palette }) => ({
          color: palette.info.main,
          cursor: 'pointer',
          '& svg': {
            fontSize: 16,
          },
        })}
      >
        <InfoIcon fontSize={iconFontSize} />
      </Box>
    </StyledTooltip>
  )
}

export default InfoTooltip
