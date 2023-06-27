import { ReactElement, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { get } from 'lodash-es'
import ErrorFieldBase from '../ErrorFieldBase'

interface Props {
  name: string
  severity?: 'error' | 'warning'
  'data-cy'?: string
}

const ErrorField = ({
  name,
  severity,
  'data-cy': dataCy,
}: Props): ReactElement | null => {
  const {
    formState: { errors, submitCount },
    watch,
  } = useFormContext()
  const fieldWatch = watch(name)

  const error = useMemo(() => {
    return submitCount ? get(errors, name) : null
  }, [errors, name, fieldWatch, submitCount])

  if (!error) return null

  return (
    <ErrorFieldBase
      message={error.message as string}
      severity={severity}
      data-cy={dataCy}
    />
  )
}

export default ErrorField
