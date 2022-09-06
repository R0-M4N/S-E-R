import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: "Dashboard 1",
}

Header.propsType = {
    title: PropTypes.string.isRequired
}

export default Header