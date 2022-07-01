import type { NextPage } from 'next'

type Props = {
  title: string
}

const test = 0

const Home: NextPage<Props> = ({ title = 'React Avançado' }: Props) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>Curso de react com next.js</p>
    </div>
  )
}

export default Home
