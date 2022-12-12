import camelcase from 'camelcase'

function camelcaseObject (obj: Object): Object {
  const camelObj = Object.entries(obj).reduce(
    (acc, [key, value]: [string | number, unknown]) => {
      let newKey = key

      if (typeof key === 'string') {
        newKey = camelcase(key)
      }

      // @ts-expect-error as we're dealing with unknown values
      acc[newKey] = value

      return acc
    },
    {}
  )

  return camelObj
}

export default camelcaseObject
