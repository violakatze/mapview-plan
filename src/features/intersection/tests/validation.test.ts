import { Intersection, IntersectionSchema } from '../types/Intersection'

const baseValue: Intersection = {
  current: '1234567890',
  crossCount: 2,
  branch1: undefined,
  number1: undefined,
  branch2: undefined,
  number2: undefined,
  branch3: undefined,
  number3: undefined,
  branch4: undefined,
  number4: undefined,
  branch5: undefined,
  number5: undefined,
  branch6: undefined,
  number6: undefined,
  branch7: undefined,
  number7: undefined,
  branch8: undefined,
  number8: undefined
}

const baseValue2: Intersection = {
  ...baseValue,
  current: '1'
}

describe('Intersection Validation', () => {
  test('通常1', () => {
    const model: Intersection = {
      current: '1234567890',
      crossCount: 2,
      branch1: '01',
      number1: '1234567890',
      branch2: '02',
      number2: '1234567890',
      branch3: '03',
      number3: '1234567890',
      branch4: '04',
      number4: '1234567890',
      branch5: '05',
      number5: '1234567890',
      branch6: '06',
      number6: '1234567890',
      branch7: '07',
      number7: '1234567890',
      branch8: '08',
      number8: '1234567890'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeTruthy()
  })

  test('通常2', () => {
    expect(IntersectionSchema.isValidSync(baseValue)).toBeTruthy()
  })

  test('通常3', () => {
    expect(IntersectionSchema.isValidSync(baseValue2)).toBeTruthy()
  })

  // 通常ケースは変移しそうなので一旦ここまで

  test('必須チェック', () => {
    const model: Intersection = {
      ...baseValue,
      current: ''
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('数値範囲チェック1', () => {
    const model: Intersection = {
      ...baseValue,
      crossCount: 0
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('数値範囲チェック2', () => {
    const model: Intersection = {
      ...baseValue,
      crossCount: 9
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックcurrent', () => {
    const model: Intersection = {
      ...baseValue,
      current: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber1', () => {
    const model: Intersection = {
      ...baseValue,
      number1: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber2', () => {
    const model: Intersection = {
      ...baseValue,
      number2: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber3', () => {
    const model: Intersection = {
      ...baseValue,
      number3: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber4', () => {
    const model: Intersection = {
      ...baseValue,
      number4: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber5', () => {
    const model: Intersection = {
      ...baseValue,
      number5: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber6', () => {
    const model: Intersection = {
      ...baseValue,
      number6: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber7', () => {
    const model: Intersection = {
      ...baseValue,
      number7: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックnumber8', () => {
    const model: Intersection = {
      ...baseValue,
      number8: '12345678901'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch1', () => {
    const model: Intersection = {
      ...baseValue,
      branch1: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch2', () => {
    const model: Intersection = {
      ...baseValue,
      branch2: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch3', () => {
    const model: Intersection = {
      ...baseValue,
      branch3: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch4', () => {
    const model: Intersection = {
      ...baseValue,
      branch4: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch5', () => {
    const model: Intersection = {
      ...baseValue,
      branch5: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch6', () => {
    const model: Intersection = {
      ...baseValue,
      branch6: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch7', () => {
    const model: Intersection = {
      ...baseValue,
      branch7: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })

  test('最大文字数チェックbranch8', () => {
    const model: Intersection = {
      ...baseValue,
      branch8: '123'
    }
    expect(IntersectionSchema.isValidSync(model)).toBeFalsy()
  })
})
