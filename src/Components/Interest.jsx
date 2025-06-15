const Intrest = ({ formData, setFormData }) => {
  const { hobbies } = formData;
  const handleChange = (e) => {
    const {checked, name} = e.target;
    setFormData((prevData) => {
        let updatedHobbies = checked ? [...prevData.hobbies, name] : prevData.hobbies.filter(hobbie => hobbie != name);

        return {
            ...prevData,
            hobbies: updatedHobbies
        }
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="Coding">
          <input
            type="checkbox"
            name="Coding"
            checked={hobbies.includes("Coding")}
            onChange={handleChange}
          />
          Coding
        </label>
        <label htmlFor="Running">
          <input
            type="checkbox"
            name="Running"
            checked={hobbies.includes("Running")}
            onChange={handleChange}
          />
          Running
        </label>
        <label htmlFor="Singing">
          <input
            type="checkbox"
            name="Singing"
            checked={hobbies.includes("Singing")}
            onChange={handleChange}
          />
          Singing
        </label>
      </div>
    </div>
  );
};

export default Intrest;
