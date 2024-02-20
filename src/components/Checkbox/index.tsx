'use client'
import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'
export type CheckboxType = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean,
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>
const Checkbox = ({
  value,
  isChecked = false,
  onCheck,
  label,
  labelFor = "",
  labelColor = "white",
  ...props
}: CheckboxType) => {
  const [checked, setChecked] = useState(isChecked)
  const onChange = () => {
    const status = !checked
    setChecked(status)
    if (onCheck) {
      onCheck(status)
    }
  }
  return (
    <S.Wrapper >
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && <S.Label labelColor={labelColor} htmlFor={labelFor}>{label}</S.Label>}
    </S.Wrapper>
  )
}

export default Checkbox