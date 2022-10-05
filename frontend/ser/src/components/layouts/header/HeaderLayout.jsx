import PropTypes from "prop-types";
import "./header.css";
import MaskLayout from "../mask/MaskLayout";
import UserButtons from "./UserButtons";

const HeaderLayout = ({title}) => {
    return (
        <div className="nav-bar">
            <div className="header">
                <h1>{title}</h1>
            </div>
            <MaskLayout />
            <UserButtons />
        </div>
    )
}


HeaderLayout.propsType = {
    title: PropTypes.string.isRequired
}
export default HeaderLayout;