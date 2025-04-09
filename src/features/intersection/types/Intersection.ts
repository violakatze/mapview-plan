import * as yup from 'yup'

// 交差点入力フォームのバリデーションスキーマ
export const IntersectionSchema = yup.object().shape({
  number1: yup.string().max(10).notRequired(),
  branch1: yup.number().notRequired(),
  number2: yup.string().max(10).notRequired(),
  branch2: yup.number().notRequired(),
  number3: yup.string().max(10).notRequired(),
  branch3: yup.number().notRequired(),
  number4: yup.string().max(10).notRequired(),
  branch4: yup.number().notRequired(),
  number5: yup.string().max(10).notRequired(),
  branch5: yup.number().notRequired(),
  number6: yup.string().max(10).notRequired(),
  branch6: yup.number().notRequired(),
  number7: yup.string().max(10).notRequired(),
  branch7: yup.number().notRequired(),
  number8: yup.string().max(10).notRequired(),
  branch8: yup.number().notRequired()
})

// 交差点入力フォームの型
export type Intersection = yup.InferType<typeof IntersectionSchema>
