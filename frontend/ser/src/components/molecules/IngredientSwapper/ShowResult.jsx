const ShowResult = ({result}) => {
        return (
            <p className='swap-result'>
                {result.name ? result.name : ''}
            </p>
        )
}

export default ShowResult;