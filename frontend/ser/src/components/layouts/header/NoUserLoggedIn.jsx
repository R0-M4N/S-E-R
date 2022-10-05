import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function NoUserLoggedIn() {
    return (
    <>
        <Link to="/register">
            <Button variant="contained" 
            style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}
                >Sign up</Button>
        </Link>
        <Link to="/login">
            <Button variant="contained" style={{
                    position: "absolute",
                    left: "81%",
                    top: "5%",
                    background: "orange"
                }}>Log in</Button>
        </Link>
    </>
    )
}