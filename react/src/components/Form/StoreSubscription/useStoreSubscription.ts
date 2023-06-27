import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { get, cloneDeep } from 'lodash-es'
import { useDebouncedCallback } from 'use-debounce'

interface Arguments {
  writeCallback: (values: any) => any // eslint-disable-line
  fieldName?: string
  timeout?: number
}

const useStoreSubscription = ({ writeCallback, fieldName, timeout = 100 }: Arguments) => {
  const { watch } = useFormContext()
  const debouncedWrite = useDebouncedCallback(values => writeCallback(cloneDeep(values)), timeout)

  useEffect(() => {
    const subscription = watch(values => {
      const fieldValues = fieldName ? get(values, fieldName) : values
      debouncedWrite(fieldValues)
    })

    return () => subscription.unsubscribe()
  }, [])
}

export default useStoreSubscription
