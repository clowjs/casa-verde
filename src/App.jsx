import './App.css'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'

function App() {

  const links = [
    { url: '#', text: 'Como fazer' },
    { url: '#', text: 'Ofertas' },
    { url: '#', text: 'Depoimentos' },
    { url: '#', text: 'Videos' },
    { url: '#', text: 'Meu carrinho' },
  ]

  return (
    <>
      <Menu links={links} />
      <Hero />
    </>
  )
}

export default App
