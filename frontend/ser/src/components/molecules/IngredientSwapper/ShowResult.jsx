const ShowResult = ({ result }) => {
        return (
            <div className="swap-result">
            {result.map((item) => 
                <p key={item.id}>
                    {item.name}
                </p>
            )}
            </div>
            
        )
}

export default ShowResult;