import { Button} from "@mui/material"

const ShowResult = ({result}) => {
    console.log("result")
    return (
        <Button>
            {result.name ? result.name : "Recommended Swap"}
        </Button>
    )
}

export default ShowResult;