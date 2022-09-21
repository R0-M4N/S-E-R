import userIcon from "../../../assets/img/profileLogo.jpg";
import "./home.css";
import HeaderLayout from "../header/HeaderLayout";

const HomeLayout = () => {
  return (
    <>
    <HeaderLayout />
    <div className="profile-logo">
        <img src={userIcon} className='user-icon' alt='user icon' />
    </div>
    </>
  )
}

export default HomeLayout