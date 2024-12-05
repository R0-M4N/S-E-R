import { Button, Input } from '@mui/material'

const ButtonAtom = ({buttonType}) => {
    switch (buttonType) {
        case "logout": 
            return (
                <Button variant="contained" 
                id="logout-button"
                style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}>Log out</Button>
            )
        case "profile":
            return (
            <Button variant="contained" disabled={true}
            style={{
                position: "absolute",
                left: "80%",
                top: "5%",
                background: "orange"
                }}>Profile
        </Button>
            )
        case "login":
            return (
                <Button variant="contained" style={{
                    position: "absolute",
                    left: "81%",
                    top: "5%",
                    background: "orange"
                }}>Log in</Button>
            )
        case "register":
            return (
                <Button variant="contained" 
            style={{
                    position: "absolute",
                    left: "87%",
                    top: "5%",
                    background: "orange"
                }}
                >Sign up</Button>
            )
        case "submit":
            return (
                <Input
                type='submit'
                style={{
                    marginTop: "10px",
                    cursor: "pointer",
                    fontSize: "15px",
                    background: "orange",
                    color: "#fff",
                    padding: "10px 20px"
                }}>
                </Input>
            )
        default:
            return (
                <Button variant="contained">bruh</Button>
            )
    }
}

export default ButtonAtom
