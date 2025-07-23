import { useState } from "react";
import CustomRadioButton from "./components/CustomRadioButton/CustomRadioButton"

function App() {
    const [selected, setSelected] = useState("apple");

  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      <h1>Components</h1>
      <CustomRadioButton
      options={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry", disabled: true },
      ]}
      selectedValue={selected}
      onChange={(val) => setSelected(val)}
      direction="row"
      position="left"
      color="#0088ffff"
    />
    </div>
  )
}

export default App
