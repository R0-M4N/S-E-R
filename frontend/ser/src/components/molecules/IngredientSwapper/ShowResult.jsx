import { Button } from "@mui/material"

const ShowResult = ({result}) => {
    console.log(result)
    if (result.size > 0) {
        return (
            <Button>
                {result.name ? result.name : ""}
            </Button>
        )
    } return ""
}

export default ShowResult;