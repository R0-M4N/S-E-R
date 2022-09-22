import PropTypes from "prop-types";
import userIcon from "../../../assets/img/profileLogo.jpg";
import "./header.css";

const HeaderLayout = ({title}) => {
    return (
        <div className="nav-bar">
        <div className="logo">
            <div className="ellipse-1"></div>
        </div>
        <header className='header'>
            <h1>{title}</h1>
        </header>
        <div className="profile-logo">
            <img src={userIcon} className='user-icon' alt='user icon' />
        </div>
        </div>
    )
}

HeaderLayout.defaultProps = {
    title: "Food Dashboard",
}

HeaderLayout.propsType = {
    title: PropTypes.string.isRequired
}
export default HeaderLayout;