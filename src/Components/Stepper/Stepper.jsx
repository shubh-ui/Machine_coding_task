import { useState } from "react"

const stepData = [
    {
        lable: "User Details",
        content: <div> User Deatails compoennt</div>
    },
     {
        lable: "Bank Details",
        content: <div> Bank Deatails compoennt</div>
    },
     {
        lable: "Collage Details",
        content: <div> Collage Deatails compoennt</div>
    },
    {
        lable: "Summary",
        content: <div> Summary of data</div>
    }
]

export const StepperContainer = () => {
    return (
        <div>
            <Stepper steps={stepData} />
        </div>
    )
}

const Stepper = ({steps}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handlePrev = () => {
        setCurrentStep((prev) => prev == 0 ? prev : prev -1);
    }

    const handleNext = () => {
        setCurrentStep((prev) => prev == steps.length -1 ? prev : prev + 1);
    }

    console.log(currentStep)
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>
                {
                    steps.length > 0 && (
                        steps.map((step, index) => {
                            return <div
                                key={step.lable}
                                style={{ display: 'flex', marginBottom: '20px', position: 'relative' }}
                            >
                                <div style={{
                                    height: '22px',
                                    width: '22px',
                                    background: index <= currentStep ? '#5c5cff' : 'gray',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color:'#fff'
                                }}>
                                    {index + 1}

                                    { index < steps.length - 1 && <div style={{
                                        height: '20px',
                                        width: '5px',
                                        background: index <= currentStep ? '#5c5cff' : 'gray',
                                        position: 'absolute',
                                        top: '22px'
                                    }}></div>}
                                </div>
                                <div>{step.lable}</div>
                            </div>
                        })
                    )
                }
            </div>
            <div>
                {steps[currentStep].content}
            </div>
            <div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}