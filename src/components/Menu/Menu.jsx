import './Menu.css';

function Menu() {
  return (
    <header>
      <img src="/logo-header.svg" alt="" />
      <div className="links">
        <a href="#">Como fazer</a>
        <span> / </span>
        <a href="#">Ofertas</a>
        <span> / </span>
        <a href="#">Depoimentos</a>
        <span> / </span>
        <a href="#">Videos</a>
        <span> / </span>
        <a href="#">Meu carrinho</a>
      </div>
    </header>
  )
}

export default Menu;