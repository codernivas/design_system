import React, { useState } from "react"
import CustomDropdown from "./components/CustomDropdown/CustomDropdown"

function App() {
  const [selected, setSelected] = useState<string | number | null>("3");

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const handleDropdownChange = (value: string | number | null) => {
    setSelected(value);
    console.log("Selected:", value);
  };

  return (
    <div style={{  margin: "0 auto", padding: "20px" }}>
      <CustomDropdown
        data={options}
        value={selected}
        onChange={handleDropdownChange}
        prefix={false}
        suffix={true}
        prefixImg="/asset/user.png"
        suffixImg="/asset/down-arrow.png"
        placeholder="Choose an option"
      />
    
    </div>
  )
}

export default App
