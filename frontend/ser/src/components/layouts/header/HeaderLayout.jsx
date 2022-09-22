import PropTypes from "prop-types";

const HeaderLayout = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

HeaderLayout.defaultProps = {
    title: "Food Dashboard",
}

HeaderLayout.propsType = {
    title: PropTypes.string.isRequired
}
export default HeaderLayout;