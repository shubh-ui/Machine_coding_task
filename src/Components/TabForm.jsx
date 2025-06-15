import { useState } from "react";
import Intrest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [formData, setFormData] = useState({
        name:"shubham",
        age:24,
        email:"shubhm@gmail.com",
        gender: 'female',
        hobbies: ['Coding', 'Running', 'Singing'],
        theme: "dark"
    })
    const formConfig = [
        { name: "Profile", component: Profile },
        { name: "Intrest", component: Intrest },
        { name: "Settings", component: Settings },
    ];


    const ActiveTabComponent = formConfig[activeTabIndex].component;
    const showData = () => {console.log(formData)}
    return (
        <div>
            <div className="heading-container">
                {formConfig.length && formConfig.map((config,index) => <span key={index} className="heading-name" onClick={() => setActiveTabIndex(index)}>{config.name}</span>)}
            </div>
            <div className="tab-component">
                <ActiveTabComponent formData={formData} setFormData={setFormData} />
            </div>
            <div>
                {activeTabIndex > 0 && <button onClick={() =>setActiveTabIndex(preValue => preValue-1)}>Prev</button>}
                {activeTabIndex < formConfig.length -1 && <button onClick={() => setActiveTabIndex(preValue=> preValue+1)}>Next</button>}
                {activeTabIndex == formConfig.length -1 && <button onClick={()=>showData()}>Submit</button>}
            </div>
        </div>
    )
}

export default TabForm;