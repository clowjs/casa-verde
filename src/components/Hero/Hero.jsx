import AssinaturaNewsletter from '../AssinaturaNewsletter/AssinaturaNewsletter';
import './Hero.css';

function Hero() {

  return (
    <div className='hero-container'>
      <span className='text-top'>Sua casa com as</span>
      <h1 className='text-middle'>melhores plantas</h1>
      <p className='text-bottom'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
      <AssinaturaNewsletter />
    </div>
  )
}
export default Hero;