import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  display: flex;
  height: 22.5rem;
  justifi-content: center;
  position: relative;
  width: 100%;

  ::before {
    background-color: ${(props) => props.theme.colors.primary};
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.7;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 1.5rem 0;
  }
`

export const Container = styled.div`
  color: #eee;
  margin: 0 auto;
  max-width: 1024px;
  position: relative;
  width: 80%;
`

export const H2 = styled.h2`
  font-family: Gloock, serif;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
