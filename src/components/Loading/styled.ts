import styled from 'styled-components/macro'
import { keyframes } from 'styled-components'

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`


const LoadingRing = styled.div`
  display: inline-block;
  position: relative;

  width: var(--size);
  height: var(--size);;
`

const PART_SIZE_FACTOR = 0.8
const PART_LINE_SIZE_FACTOR = 0.1

const AnimatedPart = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;

  border-style: solid;
  border-radius: 50%;
  animation: ${spinningAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color, currentColor) transparent transparent transparent;

  width: calc(var(--size) * ${PART_SIZE_FACTOR});
  height: calc(var(--size) * ${PART_SIZE_FACTOR});
  margin: calc(var(--size) * ${PART_LINE_SIZE_FACTOR});
  border-width: calc(var(--size) * ${PART_LINE_SIZE_FACTOR});

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export { LoadingRing, AnimatedPart }
