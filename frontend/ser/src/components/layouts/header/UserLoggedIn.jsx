import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserLoggedIn() {
    return (
        <>
            <Link to="/logout"> 
                <Button variant="contained" 
                id="logout-button"
                style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}>Log out</Button>
            </Link>

            <Button variant="contained" disabled={true}
                style={{
                    position: "absolute",
                    left: "80%",
                    top: "5%",
                    background: "orange"
                    }}>Profile
            </Button>
        </>
    )
}