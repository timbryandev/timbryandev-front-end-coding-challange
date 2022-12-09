import camelcaseObject from './camelcaseObject'

describe('util: camelcaseObject', () => {
  it('should return the same object it receives', () => {
    const data = {
      aProp: 1,
      bProp: 2,
    }

    const expected = { ...data }

    const result = camelcaseObject(data)

    expect(result).toEqual(expected)
  })

  it('should return the same object with all keys converted to camelcase', () => {
    const data = {
      a_Prop: 1,
      bProp: 2,
      'c-prop': 3,
      D_PROP: 4,
    }

    const expected = {
      aProp: 1,
      bProp: 2,
      cProp: 3,
      dProp: 4,
    }
    const result = camelcaseObject(data)

    expect(result).toEqual(expected)
  })
})
