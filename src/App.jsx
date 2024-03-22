import './App.css'
import AssinaturaNewsletter from './components/AssinaturaNewsletter/AssinaturaNewsletter'
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
      <AssinaturaNewsletter />
    </>
  )
}

export default App
