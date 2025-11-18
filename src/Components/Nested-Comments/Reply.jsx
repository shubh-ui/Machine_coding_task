const Reply = ({replyText, setReplyText, handlePost}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', width:'200px'}}>
            <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} />
            <button style={{width:'fit-content'}} onClick={handlePost}>Post</button>
        </div>
    )
}

export default Reply