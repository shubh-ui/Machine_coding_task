import { useState, useEffect } from "react";
import Post from "./Post"

const InfiniteScroll = () => {

    const [data , setData] = useState([]);
    const [page, setPage] = useState(1);

    // https://picsum.photos/v2/list?page=1&limit=3

    useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`).then((resp)=>{
            // console.log(resp)
            return resp.json();
        }).then((arr) =>{
            console.log(arr);
            setData((preData) => [...preData, ...arr]);
        })
    }, [page])

    return (
        <div>
           <Post data={data} setPage={setPage}/>
        </div>
    )
}

export default InfiniteScroll;