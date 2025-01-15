import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import Ul from './styles'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: string
  salarioMax: string
  requisitos: string[]
}

const jobs = [
  {
    id: 1,
    titulo: 'Desenvolvedor(a) Front-end',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 'R$ 3.000,00',
    salarioMax: 'R$ 4.500,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor(a) Node.js',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 'R$ 5.000,00',
    salarioMax: 'R$ 6.500,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor(a) Fullstack',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 'R$ 4.000,00',
    salarioMax: 'R$ 6.000,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer de Interfaces',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 'R$ 4.000,00',
    salarioMax: 'R$ 5.000,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor(a) Front-end',
    localizacao: 'Remoto',
    nivel: 'Sênior',
    modalidade: 'CLT',
    salarioMin: 'R$ 7.000,00',
    salarioMax: 'R$ 8.000,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor(a) Front-end para Projetos Internacionais',
    localizacao: 'Remoto',
    nivel: 'Sênior',
    modalidade: 'PJ',
    salarioMin: 'R$ 12.000,00',
    salarioMax: 'R$ 15.000,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor(a) Front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 'R$ 4.000,00',
    salarioMax: 'R$ 5.000,00',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filter, setFilter] = useState<string>('')

  const filtered = jobs.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filter) >= 0
  )

  return (
    <div>
      <FormVagas search={(term: string) => setFilter(term)} />
      <Ul>
        {filtered.map((job) => (
          <Vaga
            key={job.id}
            titulo={job.titulo}
            localizacao={job.localizacao}
            nivel={job.nivel}
            modalidade={job.modalidade}
            salarioMin={job.salarioMin}
            salarioMax={job.salarioMax}
            requisitos={job.requisitos}
          />
        ))}
      </Ul>
    </div>
  )
}

export default ListaVagas
