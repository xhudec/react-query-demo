import { FC } from 'react'

import { RadioGroupContainer, RadioGroupLegend } from './styled'

export interface IRadioGroupProps {
  label: string
}

const RadioGroup: FC<IRadioGroupProps> = ({ label, children }) => {
  return (
    <RadioGroupContainer>
      <RadioGroupLegend>{label}</RadioGroupLegend>
      {children}
    </RadioGroupContainer>
  )
}

export default RadioGroup
