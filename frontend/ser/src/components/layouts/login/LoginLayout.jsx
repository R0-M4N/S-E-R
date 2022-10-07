import LoginForm from "../../molecules/LoginForm/LoginForm";
import HeaderLayout from "../header/HeaderLayout";

const LoginLayout = () => {
  return (
    <>
        <HeaderLayout title={"Login"}/>
        <LoginForm />
    </>
  )
}

export default LoginLayout;