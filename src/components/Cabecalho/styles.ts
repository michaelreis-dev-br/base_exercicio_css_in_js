import styled from 'styled-components'

export const Component = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 1.5rem 0;
`

export const H1 = styled.h1`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
