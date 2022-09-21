import { Button} from "@mui/material"

const ShowResult = ({result}) => {
    return (
        <Button>
            {result.name ? result.name : "Recommended Swap"}
        </Button>
    )
}

export default ShowResult;