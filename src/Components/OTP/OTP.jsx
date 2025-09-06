import { useRef, useState } from "react";

const OTP_COUNT = 5;

const OTP = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_COUNT).fill(""));
  const refArr = useRef([]);
  const inputStyle = {
    width: "44px",
    height: "44px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    fontSize: "18px",
  };

  const handleChange = (value, index) => {
        if(isNaN(value)) return;
        const newValue = [...inputArr];
        value.trim();
        newValue[index] = value.slice(-1);
        setInputArr(newValue);
        console.log(newValue)
        value && refArr.current[index + 1]?.focus();
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>OTP</h1>
        <div>
          {inputArr.map((input, index) => {
            return <input key={index} 
                          value={inputArr[index]} 
                          type="text" 
                          style={inputStyle}
                          ref={(input) => (refArr.current[index] = input)}
                          onChange={(e) => handleChange(e.target.value, index)} />;
          })}
        </div>
      </div>
    </>
  );
};

export default OTP;
