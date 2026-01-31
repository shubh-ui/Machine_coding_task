import { useState } from "react"
import { StartRating } from "../Version 1/StartRating"

const Products = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "brand": "SoundMax",
    "price": 99.99,
    "rating": 4.5,
    "inStock": true,
    "color": "Black",
    "tags": ["wireless", "audio"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "category": "Footwear",
    "brand": "FastTrack",
    "price": 79.99,
    "rating": 4.2,
    "inStock": false,
    "color": "Blue",
    "tags": ["sports", "running"]
  },
  {
    "id": 3,
    "name": "Smart Watch",
    "category": "Electronics",
    "brand": "TimeTech",
    "price": 149.99,
    "rating": 4.7,
    "inStock": true,
    "color": "Silver",
    "tags": ["fitness", "wearable"]
  },
  {
    "id": 4,
    "name": "Cotton T-Shirt",
    "category": "Clothing",
    "brand": "UrbanWear",
    "price": 19.99,
    "rating": 4.0,
    "inStock": true,
    "color": "White",
    "tags": ["casual", "summer"]
  },
  {
    "id": 5,
    "name": "Gaming Mouse",
    "category": "Electronics",
    "brand": "ProClick",
    "price": 49.99,
    "rating": 4.6,
    "inStock": true,
    "color": "Black",
    "tags": ["gaming", "accessories"]
  },
  {
    "id": 6,
    "name": "Office Chair",
    "category": "Furniture",
    "brand": "ComfortSeat",
    "price": 199.99,
    "rating": 4.3,
    "inStock": false,
    "color": "Gray",
    "tags": ["office", "ergonomic"]
  },
  {
    "id": 7,
    "name": "Water Bottle",
    "category": "Accessories",
    "brand": "HydroPlus",
    "price": 14.99,
    "rating": 4.1,
    "inStock": true,
    "color": "Green",
    "tags": ["fitness", "outdoor"]
  },
  {
    "id": 8,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "brand": "BeatBox",
    "price": 59.99,
    "rating": 4.4,
    "inStock": true,
    "color": "Red",
    "tags": ["music", "portable"]
  },
  {
    "id": 9,
    "name": "Denim Jacket",
    "category": "Clothing",
    "brand": "StreetStyle",
    "price": 89.99,
    "rating": 4.5,
    "inStock": false,
    "color": "Blue",
    "tags": ["fashion", "winter"]
  },
  {
    "id": 10,
    "name": "Laptop Backpack",
    "category": "Accessories",
    "brand": "CarryAll",
    "price": 39.99,
    "rating": 4.3,
    "inStock": true,
    "color": "Black",
    "tags": ["travel", "work"]
  }
]


export const ProductFilter = ({data, filters}) => {
    const [filter, setFilter] = useState({
        category: [],  
        price: []  
    })
      const priceMatchUtil = (price, ranges) => {
        if(ranges.length == 0) {
            return true;
        }
        return ranges.some((range) => {
            const [min, max] = range.split('-').map(Number);
            return price >= min && price <= max;
        })
        
    }

    const filteredData = data.filter((ele) => {

        const categoryMatch = filter.category.length == 0 || filter.category.includes(ele.category);
        const priceMatch = priceMatchUtil(ele.price, filter.price)

        // check if item's category is selected
        return categoryMatch && priceMatch;
    }) 

    const handleFilter = (field, value) => {
        setFilter((prev) => {
            return {
                ...prev, 
                [field] : prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value]
            }
        })
    }
    return (
        <div style={{display:'flex'}}>
            <div style={{flex:'0 0 25%'}}>
                {
                    filters.length > 0 && (
                        filters.map((fi) => {
                            return <div key={fi.name}>
                                <h4>{fi.name}</h4>
                                {fi.list.length > 0 && (
                                    fi.list.map((fi_item) => {
                                        const checked = filter[fi.name]?.includes(fi_item)
                                        return (
                                            <div key={fi_item}>
                                                <input type="checkbox" value={checked} onChange={() => handleFilter(fi.name, fi_item)} />
                                                <span>{fi_item}</span>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        })
                    )
                }
            </div>
            <div style={{flex:'0 0 75%'}}>
                {
                    filteredData.length > 0 && (
                        filteredData.map((item) => {
                            return <div key={item.id} style={{display:'flex', flexDirection:'column', height:'60px'}}>
                                <div style={{display:'flex', gap:'40px'}}>
                                    <span>{item.name}</span> 
                                    <span style={{fontSize:'12px'}}>
                                        <StartRating defaultRating={item.rating} />
                                    </span>
                                </div>
                                <div style={{display:'flex', gap:'40px', fontSize:'12px'}}>
                                    <span>{item.category}</span> 
                                    <span >{item.price}</span>
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}


export const ProductFilterContainer = () => {
    const filters = [
        {
            name:'category',
            list: ['Accessories', 'Electronics']
        },
         {
            name:'price',
            list: ['50-100', '100-200']
        }
]
    return (
        <div>
            <ProductFilter data={Products} filters={filters}/>
        </div>
    )
}