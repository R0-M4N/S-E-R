import PropTypes from "prop-types";
import "./header.css";
import UserButtons from "./UserButtons";
import ToggleColorMode from "../../lightordarkmode/ToggleMode";

const HeaderLayout = ({title}) => {
    return (
        <div className="nav-bar">
            <div className="header">
                <h1>{title}</h1>
            </div>
            <div className="toggle-icon">
                <ToggleColorMode />
            </div>
            <UserButtons />
        </div>
    )
}


HeaderLayout.propsType = {
    title: PropTypes.string.isRequired
}
export default HeaderLayout;