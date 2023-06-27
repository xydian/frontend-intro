import { FormEvent, ReactElement, ReactNode, useEffect } from 'react'
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form'
import { isArray } from 'lodash-es'

import StoreSubscription from './StoreSubscription'
import { yupResolver } from '@hookform/resolvers/yup'

interface FieldSubscription {
  name: string
  value: string | number
}

interface Props {
  onSubmit: (values: any, event: FormEvent<HTMLFormElement>) => void // eslint-disable-line @typescript-eslint/no-explicit-any
  children: ReactNode | ((methods: UseFormReturn) => ReactNode)
  id?: string
  validationSchema?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  validationContext?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  defaultValues?: { [key: string]: any | undefined } // eslint-disable-line @typescript-eslint/no-explicit-any
  enableReinitialize?: boolean
  'data-cy'?: string
  fieldSubscriptions?: FieldSubscription[] | FieldSubscription
  storeSubscription?: StoreSubscription
}

const Form = ({
  onSubmit,
  children,
  defaultValues = {},
  validationSchema,
  id = '',
  enableReinitialize = false,
  validationContext,
  'data-cy': dataCy,
  fieldSubscriptions,
  storeSubscription,
}: Props): ReactElement => {
  const methods: UseFormReturn = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues,
    context: validationContext,
    ...(validationSchema ? { resolver: yupResolver(validationSchema) } : {}),
  })

  useEffect(() => {
    if (enableReinitialize) methods.reset(defaultValues)
  }, [defaultValues, enableReinitialize])

  useEffect(() => {
    if (!fieldSubscriptions) return

    if (!isArray(fieldSubscriptions)) {
      methods.setValue(fieldSubscriptions.name, fieldSubscriptions.value)
    }

    if (isArray(fieldSubscriptions)) {
      fieldSubscriptions.forEach(({ name, value }) => {
        methods.setValue(name, value)
      })
    }
  }, [fieldSubscriptions])

  return (
    <FormProvider {...methods}>
      {storeSubscription && <StoreSubscription {...storeSubscription} />}
      <form
        id={id}
        data-cy={dataCy || id}
        onSubmit={(event) => {
          if (onSubmit) {
            event.stopPropagation()
            methods.handleSubmit((data) => onSubmit(data, event))(event)
          }
        }}
      >
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  )
}

export default Form
