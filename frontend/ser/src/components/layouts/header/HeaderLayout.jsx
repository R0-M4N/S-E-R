import PropTypes from "prop-types";
import userIcon from "../../../assets/img/profileLogo.jpg";
import "./header.css";
import MaskLayout from "../mask/MaskLayout";

const HeaderLayout = ({title}) => {
    return (
        <div className="nav-bar">
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <MaskLayout />
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