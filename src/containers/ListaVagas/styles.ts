import styled from 'styled-components'

const Ul = styled.ul`
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-top: 2rem;
  row-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export default Ul
