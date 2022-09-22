import { Button} from "@mui/material"

const ShowResult = ({result}) => {
    return (
        <Button>
            {result.name ? result.name : ""}
        </Button>
    )
}

export default ShowResult;