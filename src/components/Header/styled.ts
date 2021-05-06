import styled from 'styled-components/macro'

const HeaderContainer = styled.header`
  --bg-color: hsl(0, 0%, 0%);
  --text-color: hsl(0, 0%, 100%);

  position: sticky;
  top: -20px;
  height: 80px;
  padding-top: 40px;
  color: var(--text-color);
  background-color: var(--bg-color);
`

const HeaderContent = styled.div`
  max-width: 1080px;
  margin: auto;
  font-size: 1.25rem;
`

export { HeaderContainer, HeaderContent }
