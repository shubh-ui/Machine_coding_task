const Profile = ({formData, setFormData}) => {
    const {name , age, email, gender } = formData;

    const handleChange = (e) => {
        setFormData(preData => ({...preData, [e.target.name]: e.target.value}))
    }

    const handleChecked = (e) => {
        console.log(formData)
        setFormData(preData => ({...preData, gender: [e.target.name]}))
    }
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'10px', alignItems:'start'}}>
            <div>
                <label htmlFor="name">
                    Name: 
                    <input type="text" value={name} onChange={handleChange} name="name" />
                </label>
            </div>
            <div>
                <label htmlFor="age">
                    Age: 
                    <input type="number" value={age} onChange={handleChange} name="age" />
                </label>
            </div>

            <div>
                <label htmlFor="email">
                    Email: 
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label htmlFor="gender">
                    Gender: 
                    <label htmlFor="male">
                        Male
                    <input type="radio" name="male" checked={gender == "male"} onChange={handleChecked} />
                    </label>

                    <label htmlFor="female">
                        Female
                    <input type="radio" name="female" checked={gender == "female"} onChange={handleChecked}/>
                    </label>
                </label>
            </div>
        </div>
    )
}

export default Profile;