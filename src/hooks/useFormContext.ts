import { useContext } from 'react'
import { FormData } from '../context/FormContext'

export function useFormsProvider() {
    const value = useContext(FormData)

    return value
}
