import { FormEvent, useState } from 'react'
import { Form, Button, Input } from './styles'

type Props = {
  search: (term: string) => void
}

const FormVagas = ({ search }: Props) => {
  const [term, setTerm] = useState<string>('')

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(term.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={submitForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTerm(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  )
}
export default FormVagas
