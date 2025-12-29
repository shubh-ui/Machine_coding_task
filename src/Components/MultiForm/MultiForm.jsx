import { useState } from "react"

export const MultiForm = () => {
    const config = {
        "Personal information" : {
            name: "",
            email:"",
            phone:""
        },
        "Account security" : {
            password:"",
            security_ques: ""
        },
        "Financial information" : {
            income_range : "",
            employement_status: ""
        }
    }

    const componentConfig = {
        "Personal information" : PersonalInfo,
        "Account security" : AccountInfo,
        "Financial information" : FinancialInfo
    }
    const [data, setData] = useState(config)
    const [currentOpenKey, setCurrentOpenKay] = useState(0)
    const progresskeys = Object.keys(config);
    const Component = componentConfig[progresskeys[currentOpenKey]];
    const handleNext = () => {
        setCurrentOpenKay(prev => prev + 1)
    }

    const handlePrev = () => {
        setCurrentOpenKay(prev => prev - 1)

    }
    console.log(data)
        return (
            <div>
                <div 
                 style={{display:'flex', gap:'40px'}}
                >
                {progresskeys.map((key, index) => {
                    return <div key={key}
                            onClick={() => setCurrentOpenKay(index)}
                            style={{borderBottom: `${index == currentOpenKey ? '1px solid #000' : ''}`, cursor:'pointer'}}
                          >{key}</div>
                })}
                </div>
                <div>
                    <Component  data={data} setData={setData}/>
                </div>
                <div
                style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}
                >
                    {currentOpenKey > 0 && <button onClick={handlePrev}>Previous</button>}
                    {currentOpenKey < progresskeys.length -1 && <button onClick={handleNext}>Next</button>}
                </div>
            </div>
        )
}

const PersonalInfo = ({data, setData}) => {
    const handleChange = (e, field) => {
        const val = e.target.value;
        setData((prev) => {
            return {
                ...prev,
                "Personal information" : {
                    ...prev['Personal information'],
                    [field] : val
                }
            }
        })
    }
    return (
        <>
            <h3>Personal info</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Name</label>
                <input type="text" 
                       value={data['Personal information'].name} 
                       onChange={(e) => handleChange(e, 'name')}/>
                <label>Email</label>
                <input type="email" 
                       value={data['Personal information'].email} 
                       onChange={(e) => handleChange(e, 'email')} />
                <label>Phone</label>
                <input type="number" 
                       value={data['Personal information'].phone} 
                       onChange={(e) => handleChange(e, 'phone')} />
            </div>
        </>

    )
}

const AccountInfo = ({data, setData}) => {
     const handleChange = (e, field) => {
        const val = e.target.value;
        setData((prev) => {
            return {
                ...prev,
                "Account security" : {
                    ...prev['Account security'],
                    [field] : val
                }
            }
        })
    }

    return (
        <>
            <h3>Account info</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Password</label>
                <input type="password" 
                       value={data['Account security'].password} 
                       onChange={(e) => handleChange(e, 'password')} />
                <label>Sequrity Question</label>
                <input type="text" 
                       value={data['Account security'].security_ques} 
                       onChange={(e) => handleChange(e, 'security_ques')} />
            </div>
        </>
    )
}

const FinancialInfo = ({data, setData}) => {
    const handleChange = (e, field) => {
        const val = e.target.value;
        setData((prev) => {
            return {
                ...prev,
                "Financial information" : {
                    ...prev['Financial information'],
                    [field] : val
                }
            }
        })
    }
    return (
        <>
            <h3>Financial info</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Income Range</label>
                <input type="text"
                       value={data['Financial information'].income_range} 
                       onChange={(e) => handleChange(e, 'income_range')} />
                <label>Employement status</label>
                <input type="text" />
            </div>
        </>
    )
}