import './AssinaturaNewsletter.css';

function AssinaturaNewsletter() {
  return (
    <div className='newsletter-container'>
      <img src="./icon-email.svg" alt="" />
      <input type="email" placeholder="Insira seu e-mail" />
      <button>Assinar newsletter</button>
    </div>
  )
}

export default AssinaturaNewsletter;