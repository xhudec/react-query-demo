import { FC, InputHTMLAttributes } from 'react'

import { RadioInputLabel, RadioInput } from './styled'

export interface IRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const RadioInputField: FC<IRadioInputProps> = ({ label, ...delegated }) => {
  return (
    <RadioInputLabel>
      <RadioInput type="radio" {...delegated} />
      {label}
    </RadioInputLabel>
  )
}

export default RadioInputField
