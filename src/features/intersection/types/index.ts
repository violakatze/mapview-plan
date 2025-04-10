export * from './Intersection'

import { Intersection } from './Intersection'

// 交差点入力フォームの初期値
export const getDefaultValues = (): Intersection => ({
  current: '',
  crossCount: 2,
  number1: '',
  branch1: '',
  number2: '',
  branch2: '',
  number3: '',
  branch3: '',
  number4: '',
  branch4: '',
  number5: '',
  branch5: '',
  number6: '',
  branch6: '',
  number7: '',
  branch7: '',
  number8: '',
  branch8: ''
})
