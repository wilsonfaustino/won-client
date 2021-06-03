import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  disabled?: boolean
  label?: string
  labelFor?: string
  error?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  disabled = false,
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  error,
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
