import { Button } from "@mui/material";

export default function UserButtons() {
    const user = null;
    //check for user later #TODO
    if (!user) {
        return (
            <>
                <Button variant="contained" style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}>Sign up</Button>

                <Button variant="contained" style={{
                    position: "absolute",
                    left: "81%",
                    top: "5%",
                    background: "orange"
                }}>Log in</Button>
            </>
        )
    } else {
        return (
            <>
                <Button variant="contained" style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}>Log out</Button>
            </>
        )
    }
}