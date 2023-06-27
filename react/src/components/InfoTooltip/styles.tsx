import React from 'react'
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material'
import { styled } from '@mui/system'

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderRadius: 4,
    padding: theme.spacing(0.5, 1),
    fontWeight: 500,
    boxShadow: '0 0 8px 4px rgba(0, 0, 0, 0.1)',
  },
}))
