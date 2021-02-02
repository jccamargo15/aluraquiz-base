import React from 'react'
import { useRouter } from 'next/router'


import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Título Componente</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault()
              router.push(`/quiz?name=${name}`)
              console.log('Fazendo uma submissao por meio do react')
            }}>
              <Input
                name='nomeDoUsuario'
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder='Coloque seu nome'
                value={name}
              />
              <Button type='submit' disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Título Componente</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita amet voluptates doloremque veritatis quos exercitationem facilis hic provident ut non beatae inventore, vel reprehenderit soluta porro? Corrupti magnam asperiores voluptas.</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='google.com.br' />
    </QuizBackground>
  );
}
