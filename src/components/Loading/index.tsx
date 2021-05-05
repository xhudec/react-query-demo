import { CSSProperties, FC } from 'react'

import { LoadingRing, AnimatedPart } from './styled'

export interface ILoadingProps {
  color?: string
  /**
   * @default 40
   */
  size?: number
}

const Loading: FC<ILoadingProps> = ({ color, size = 40 }) => {
  return (
    <LoadingRing style={{ '--size': `${size}px`, '--color': color } as CSSProperties}>
      <AnimatedPart />
      <AnimatedPart />
      <AnimatedPart />
      <AnimatedPart />
    </LoadingRing>
  )
}

export default Loading
