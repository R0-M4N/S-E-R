import React from "react";
import { useEffect, useState } from "react";



function Ingredients() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch("http://localhost:8080/ingredients")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(items);
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} 
                    </li>
                ))}
            </ul>
        );
    }
}

export default Ingredients