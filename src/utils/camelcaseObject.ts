import camelcase from 'camelcase'

interface ObjType {
  [key: string | number]: unknown
}

function camelcaseObject (obj: ObjType): ObjType {
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
  ) as ObjType

  return camelObj
}

export default camelcaseObject
