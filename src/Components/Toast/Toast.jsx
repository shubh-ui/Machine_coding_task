const Toast = ({toast}) => {
    return (
        <div>
            <div style={{position:'relative', background:'yellow',width:'300px', height:'46px', display:'flex', alignItems:'center', gap:'10px'}}>

                <div>✅</div>
                <div>{toast.title}</div>
                <div style={{position:'absolute', top:'10px', right:'10px'}}>X</div>
            </div>
        </div>
    )
}

export default Toast;