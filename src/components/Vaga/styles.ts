import styled from 'styled-components'

export const Vagas = styled.li`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  transition: all ease 0.3s;

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};

    a {
      background-color: ${(props) => props.theme.colors.secondary};
      border-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
    }
  }

  li {
    list-style: none;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Button = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;

  @media (max-width: 768px) {
    display: block;
  }
`
