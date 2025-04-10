import * as yup from 'yup'

// 交差点入力フォームのバリデーションスキーマ
export const IntersectionSchema = yup.object().shape({
  current: yup.string().required().max(10, '10文字以内で入力してください'),
  crossCount: yup.number().required(),
  number1: yup.string().required().max(10, '10文字以内で入力してください'),
  branch1: yup.string().required().max(2, '2桁以内で入力してください'),
  number2: yup.string().required().max(10, '10文字以内で入力してください'),
  branch2: yup.string().required().max(2, '2桁以内で入力してください'),
  number3: yup.string().required().max(10, '10文字以内で入力してください'),
  branch3: yup.string().required().max(2, '2桁以内で入力してください'),
  number4: yup.string().required().max(10, '10文字以内で入力してください'),
  branch4: yup.string().required().max(2, '2桁以内で入力してください'),
  number5: yup.string().required().max(10, '10文字以内で入力してください'),
  branch5: yup.string().required().max(2, '2桁以内で入力してください'),
  number6: yup.string().required().max(10, '10文字以内で入力してください'),
  branch6: yup.string().required().max(2, '2桁以内で入力してください'),
  number7: yup.string().required().max(10, '10文字以内で入力してください'),
  branch7: yup.string().required().max(2, '2桁以内で入力してください'),
  number8: yup.string().required().max(10, '10文字以内で入力してください'),
  branch8: yup.string().required().max(2, '2桁以内で入力してください')
})

// 交差点入力フォームの型
export type Intersection = yup.InferType<typeof IntersectionSchema>
