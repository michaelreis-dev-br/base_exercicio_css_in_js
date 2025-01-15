import { Vagas, Title, Button } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: string
  salarioMax: string
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <Title>{props.titulo}</Title>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contrato: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} ~ {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Button href="#">Ver detalhes</Button>
  </Vagas>
)

export default Vaga
