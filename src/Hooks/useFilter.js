import { useEffect, useState } from "react"

export const useFilter = (items, filters) => {
    const [filterdItems, setFilterdItems] = useState([]);
    useEffect(() => {
        let result = items;

        if (filters.category) {
            result = filters.category == "All" ? items : result.filter((item) => item.category == filters.category);
            
        }
        if (filters.price) {
            result = result.filter((item) => item.price > filters.priceRange[0] && item.price < filters.priceRange[1]);
        }

        setFilterdItems(result);

    }, [items, filters])

    return filterdItems;
}