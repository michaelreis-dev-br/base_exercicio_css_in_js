import styled from 'styled-components'

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0.75rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto;
  margin-top: 2.5rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0.0625rem solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-size: 1.125rem;
  height: 2.5rem;
  padding: 0 1rem;
`

export const Input = styled.input`
  outline-color: ${(props) => props.theme.colors.primary};
  padding: 0 1rem;
  height: 2.5rem;
`
