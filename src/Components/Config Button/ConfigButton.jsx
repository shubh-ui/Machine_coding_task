export const ConfigButton = ({title ,loding, variant = 'Primary', icon, disabled}) => {
    const config = {
        'Primary' : PrimaryVariant,
        'Outline' : OutlinedVariant
    }
    const Component = config[variant]
    return (
        <Component title={title} loding={loding} variant={variant} icon={icon} disabled={disabled} />
    )
}

const PrimaryVariant = ({title ,loding, variant = 'Primary', icon, disabled}) => {
    return (
        <button
            style={{
                padding:'10px 34px',
                border:'none',
                color:'#fff',
                borderRadius:'6px',
                background:'#1F51FF'
            }}
        >{title}</button>
    )
}


const OutlinedVariant = ({title ,loding, variant = 'Primary', icon, disabled}) => {
    return (
        <button
            style={{
                padding:'10px 34px',
                border:'1px solid #d8d8d8',
                color:'#606060',
                borderRadius:'6px',
                background:'transparent'
            }}
        >{title}</button>
    )
}