import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
import { getDefaultValues, Intersection, IntersectionSchema } from '../types'

export const useIntersection = () => {
  const values = getDefaultValues()
  const form = useForm<Intersection>({ values, defaultValues: values })

  return {
    form
  }
}
