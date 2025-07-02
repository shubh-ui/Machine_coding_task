import { useState, useCallback } from "react";

 const debounce = (fn, delay) => {
    let timer;
    return () => {
       clearTimeout(timer);
       timer = setTimeout(() => {
            fn();
        }, delay);
    }
  }


const DebounceFn = () => {
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
  }

  const debouncedFetchData = useCallback(debounce(fetchData, 1000), [])
  
  const handleChange = (e) => {
    const {value} = e.target;
    setValue(value);
    debouncedFetchData();
  };

  return (
    <div style={{ padding: "20px", width: "400px" }}>
      <input
        type="text"
        style={{ width: "100%", padding: "10px" }}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebounceFn;
