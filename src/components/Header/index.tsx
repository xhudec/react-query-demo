import { FC } from 'react'

import { HeaderContainer, HeaderContent } from './styled'

const Header: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <HeaderContent>{children}</HeaderContent>
    </HeaderContainer>
  )
}

export default Header
