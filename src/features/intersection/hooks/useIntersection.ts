import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getDefaultValues, Intersection, IntersectionSchema } from '../types'

export const useIntersection = () => {
  const values = getDefaultValues()
  const form = useForm<Intersection>({
    values,
    defaultValues: values
    // resolver: yupResolver(IntersectionSchema) // notRequiredが意図した動きとならないため保留
  })

  return {
    form
  }
}
