import userIcon from "../../../assets/img/profileLogo.jpg";
import "./home.css";
import Header from "../../header/Header";

const HomeLayout = () => {
  return (
    <>
    <Header />
    <div className="profile-logo">
        <div className="profile-vector">
          <img src={userIcon} className='user-icon' alt='user icon' />
        </div>
    </div>
    </>
  )
}

export default HomeLayout