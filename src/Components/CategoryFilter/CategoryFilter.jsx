import { useEffect, useState } from "react"

const data = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "desc": "A smooth and responsive wireless mouse for everyday use."
  },
  {
    "id": 2,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "desc": "Over-ear headphones with noise cancellation and long battery life."
  },
  {
    "id": 3,
    "name": "Smart Watch",
    "category": "Electronics",
    "desc": "Track your fitness, heart rate, and notifications on the go."
  },
  {
    "id": 4,
    "name": "USB-C Charger",
    "category": "Electronics",
    "desc": "Fast-charging USB-C power adapter for multiple devices."
  },
  {
    "id": 5,
    "name": "Portable Speaker",
    "category": "Electronics",
    "desc": "Compact speaker with powerful sound and Bluetooth support."
  },

  {
    "id": 6,
    "name": "Cotton T-Shirt",
    "category": "Clothing",
    "desc": "Comfortable cotton t-shirt suitable for everyday wear."
  },
  {
    "id": 7,
    "name": "Denim Jeans",
    "category": "Clothing",
    "desc": "Classic fit denim jeans with durable stitching."
  },
  {
    "id": 8,
    "name": "Hooded Sweatshirt",
    "category": "Clothing",
    "desc": "Warm hoodie made with soft fleece material."
  },
  {
    "id": 9,
    "name": "Running Shoes",
    "category": "Clothing",
    "desc": "Lightweight running shoes designed for comfort and support."
  },
  {
    "id": 10,
    "name": "Winter Jacket",
    "category": "Clothing",
    "desc": "Insulated jacket to keep you warm in cold weather."
  },

  {
    "id": 11,
    "name": "Fiction Novel",
    "category": "Books",
    "desc": "A gripping fictional story with engaging characters."
  },
  {
    "id": 12,
    "name": "Science Textbook",
    "category": "Books",
    "desc": "Comprehensive guide covering fundamental science concepts."
  },
  {
    "id": 13,
    "name": "History Book",
    "category": "Books",
    "desc": "Detailed account of important historical events."
  },
  {
    "id": 14,
    "name": "Self-Help Guide",
    "category": "Books",
    "desc": "Practical advice for personal growth and motivation."
  },
  {
    "id": 15,
    "name": "Programming Handbook",
    "category": "Books",
    "desc": "Beginner-friendly guide to learning programming concepts."
  },

  {
    "id": 16,
    "name": "Coffee Maker",
    "category": "Home Appliances",
    "desc": "Automatic coffee maker with multiple brew settings."
  },
  {
    "id": 17,
    "name": "Vacuum Cleaner",
    "category": "Home Appliances",
    "desc": "High-power vacuum cleaner for efficient home cleaning."
  },
  {
    "id": 18,
    "name": "Air Fryer",
    "category": "Home Appliances",
    "desc": "Cook crispy meals with little to no oil."
  },
  {
    "id": 19,
    "name": "Electric Kettle",
    "category": "Home Appliances",
    "desc": "Fast-boiling electric kettle with auto shut-off."
  },
  {
    "id": 20,
    "name": "Microwave Oven",
    "category": "Home Appliances",
    "desc": "Compact microwave oven with multiple cooking modes."
  }
]


export const CategoryFilter = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const categories = [...new Set(data.map((ele) => ele.category))]
    console.log(categories)
    const filteredCategories = data.filter((ele) => ele.category == categories[activeCategory])
    console.log(filteredCategories)

    const str1 = 'banana'

    const findeChar = (str) => {
        let charCount = {};
        for (let i = 0; i < str.length; i++) {
            if(charCount[str[i]]) {
              charCount[str[i]]++;
            } else {
              charCount[str[i]] = 1;
            }
        }
        return charCount
    }


    useEffect(() => {
      console.log('run');
      console.log(findeChar(str1))
      return () => {
        console.log('clean up')
      }
    },[])
    return (
        <div style={{display: "flex", alignItems:'center', flexDirection:'column'}}>
            <div style={{display:'flex', gap:'2s0px'}}>
                {categories.length > 0 && (
                    <>
                        {categories.map((category, index) => {
                            return <div key={category}
                                        onClick={() => setActiveCategory(index)}
                                        style={{
                                            border:'1px solid #000',
                                            padding:'6px',
                                            cursor:'pointer',
                                            background: index == activeCategory ? '#f0f0f0' : ''
                                        }}>
                                {category}
                            </div>
                        })}
                    </>
                )}
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                {
                    filteredCategories.length > 0 && (
                        <>
                         {
                            filteredCategories.map((category) => {
                                return <div style={{borderBottom:'1px solid coral'}}>
                                    {category.name}
                                </div>
                            })
                         }
                        </>
                    )
                }
            </div>
        </div>
    )
}

//185.35 free
//59.76 filled
//G chrome 1.33