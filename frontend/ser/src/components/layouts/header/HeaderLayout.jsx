import PropTypes from "prop-types";
import "./header.css";
import UserButtons from "./UserButtons";
import TemporaryDrawer from '../../sidebar/TemporaryDrawer';

const HeaderLayout = ({title}) => {

    return (
        <div className="nav-bar">
            <div>
                <TemporaryDrawer />
            </div>
            <div className="header">
                <h1>{title}</h1>
            </div>
            <UserButtons />
        </div>
    )
}


HeaderLayout.propsType = {
    title: PropTypes.string.isRequired
}
export default HeaderLayout;