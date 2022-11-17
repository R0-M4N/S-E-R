import "./home.css";
import HeaderLayout from "../header/HeaderLayout";
import { Skeleton } from "@mui/material";

const HomeLayout = () => {
  return (
    <>
    <HeaderLayout title={"FooDashboard"}/>
    <Skeleton variant="rectangular" width={800} height={118} className='banner' />
    <Skeleton variant="circular" className="profile-pic" width={120} height={120}/>
    <Skeleton variant="rectangular" width={670} height={118} className='about-section' />
    </>
  )
}

export default HomeLayout