const Settings = ({formData, setFormData}) => {

    const {theme} = formData;

    const handleChange = (e) => {
        // console.log(e)
        setFormData(prevData => ({...prevData, theme: e.target.name}))
    }

    return (
        <div>
            <div>
                <label htmlFor="dark">
                    Dark:
                    <input type="radio" name="dark" checked={theme== 'dark'} onChange={handleChange}/>
                </label>
            </div>

            <div>
                <label htmlFor="light" >
                    Light:
                    <input type="radio" name="light" checked={theme =='light'} onChange={handleChange}/>
                </label>
            </div>
        </div>
    )
}

export default Settings;