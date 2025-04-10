import * as yup from 'yup'

// 交差点入力フォームのバリデーションスキーマ
export const IntersectionSchema = yup
  .object()
  .shape({
    current: yup.string().required('必須入力です').max(10, '10桁以内で入力してください'),
    crossCount: yup.number().required(),
    number1: yup.string().max(10, '10桁以内で入力してください'),
    branch1: yup.string().max(2, '2桁以内で入力してください'),
    number2: yup.string().max(10, '10桁以内で入力してください'),
    branch2: yup.string().max(2, '2桁以内で入力してください'),
    number3: yup.string().max(10, '10桁以内で入力してください'),
    branch3: yup.string().max(2, '2桁以内で入力してください'),
    number4: yup.string().max(10, '10桁以内で入力してください'),
    branch4: yup.string().max(2, '2桁以内で入力してください'),
    number5: yup.string().max(10, '10桁以内で入力してください'),
    branch5: yup.string().max(2, '2桁以内で入力してください'),
    number6: yup.string().max(10, '10桁以内で入力してください'),
    branch6: yup.string().max(2, '2桁以内で入力してください'),
    number7: yup.string().max(10, '10桁以内で入力してください'),
    branch7: yup.string().max(2, '2桁以内で入力してください'),
    number8: yup.string().max(10, '10桁以内で入力してください'),
    branch8: yup.string().max(2, '2桁以内で入力してください')
  })
  .test((option, content) => {
    if (option.crossCount < 1 || option.crossCount > 8) {
      return content.createError({ message: '交差点数は1から8の範囲で指定してください' })
    }

    return true
  })

// 交差点入力フォームの型
export type Intersection = yup.InferType<typeof IntersectionSchema>
