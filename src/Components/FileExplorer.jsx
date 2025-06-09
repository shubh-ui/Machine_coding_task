import { useState } from "react"

const FileExplorer = ({data}) => {
    console.log({data})
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    return (
        <div>
            {data.type == "folder" ? ( isFolderOpen ? "📂" :"📁") : "🗄️"}<span style={{marginLeft:'5px'}} onClick={() => setIsFolderOpen((preValue)=> !preValue)}>{data.name}</span>
            {isFolderOpen && data?.children?.length > 0 && 
               data.children.map((item, index) => {
                return <div style={{marginLeft: "14px"}} key={index}><FileExplorer data={item} /></div>
               })
            }
        </div>
    )
}

export default FileExplorer;