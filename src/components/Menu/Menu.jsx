import './Menu.css';
import PropTypes from 'prop-types';

function Menu(props) {
  const links = props.links

  return (
    <header>
      <img src="/logo-header.svg" alt="" />
      <div className="links">
        {
          links.map((link, index) => {
            if (index === links.length - 1) {
              return <a key={index} href={link.url} className="last">{link.text}</a>
            } else {
              return (
                <>
                  <a key={index} href={link.url}>{link.text}</a>
                  <span> / </span>
                </>
              )
            }
          })
        }
      </div>
    </header>
  )
}

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;