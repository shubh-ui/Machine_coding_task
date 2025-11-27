import { useEffect, useState } from "react"
import { useFetchWithCache } from "../../Hooks/useFetchWithCache"

const MainComponent = () => {
      const state = useFetchWithCache('https://dummyjson.com/produc',{}, {retries: 3});
    console.log('state from Retrie component', state)
    return (
        <div>
            Main Component
        </div>
    )
}

const RetrieWithCache = () => {
const [showMain , setShowMain] = useState(false);

  
    return (
        <div>
            <button onClick={() => setShowMain(pre => !pre)}>Call API</button>
            {showMain && <MainComponent />}
        </div>
    )
}

export default RetrieWithCache;