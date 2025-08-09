import { useEffect, useState } from "react";

const AutoComplete = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([])
    const [cache, setCache] = useState({})
    useEffect(() => {
        let timer;
        const fetchData = async () => {
            const resp = await fetch(`https://dummyjson.com/recipes/search?q=${inputValue}`);
            const data = await resp.json();
            setCache(prev => ({...prev,[inputValue]: JSON.stringify(data.recipes) }))
            setData(data.recipes);
        }
        
        timer = setTimeout(() =>{
        if(cache[inputValue]) {
            setData(JSON.parse(cache[inputValue]));
            return;
        }
        fetchData();
        }, 200);

        return () => clearTimeout(timer)
    }, [inputValue])
    return <>
        <div style={{display:"flex", alighItems:"center", justifyContent:"center"}}>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{padding:"8px 16px", width:"300px"}} type="text" />
            <div>
                {
                    data.map((d) => (
                        <span key={d.id} style={{display:"flex", flexDirection:"column", padding:"6px 0", cursor:"pointer"}}>
                            {d.name}
                        </span>
                    ))
                }
            </div>
            </div>
        </div>
    </>
}

export default AutoComplete;