interface StoreSubscription {
  fieldName?: string
  writeCallback: (values: any) => void // eslint-disable-line
}
