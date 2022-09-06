import { useEffect, useState } from "react";


function Ingredients() {
    const [items, setItems] = useState([]);
}

useEffect(() => {
    fetch("http://localhost:3000/ingredients")
    .then(res => res.json())
    .then(
        (result) => {
            setItems(result)
        }
    )
})

if (items) {
    return<ul>
        {items.map(item => (
            <li>
                {item.name}
            </li>
        ))}
    </ul>
}

export default Ingredients