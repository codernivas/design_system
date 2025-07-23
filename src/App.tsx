import React, { useState } from "react"
import CustomDropdown from "./components/CustomDropdown/CustomDropdown"
import CustomInput from "./components/CustomInput/CustomInput"
import CustomButton from "./components/CustomButton/CustomButton"
import CustomIconButton from "./components/CustomIconButton/CustomIconButton"
import CustomCheckbox from "./components/CustomCheckbox/CustomCheckbox"
import CustomCodeSnippet from "./components/CustomCodeSnippet/CustomCodeSnippet"

function App() {
  const [selected, setSelected] = useState<string | number | null>("3")

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ]

  const handleDropdownChange = (value: string | number | null) => {
    setSelected(value)
    console.log("Selected:", value)
  }

  const [value, setValue] = useState<string | number>("")
  const [selectedFruits, setSelectedFruits] = useState<any[]>([])
  const optionsCheckbox = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌", disabled: true },
    { value: "cherry", label: "Cherry 🍒" },
  ]
  console.log("selectedFruits", selectedFruits)

  const installCmd = `yarn add carbon-components@latest carbon-components-react@latest`;

  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      {/* <CustomDropdown
        data={options}
        value={selected}
        onChange={handleDropdownChange}
        prefix={false}
        suffix={true}
        prefixImg="/asset/user.png"
        suffixImg="/asset/down-arrow.png"
        placeholder="Choose an option"
        disabled={false}
      /> */}

      {/* <CustomInput
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter value"
        // prefix={true}
        // suffix={true}
        // prefixImg="/asset/user.png"
        // suffixImg="/asset/down-arrow.png"
        type="text" // or "text"
        disabled={true}
      /> */}
      {/* <CustomButton
        title="Submit"
        onPress={() => alert("Button Pressed")}
        backgroundColor="#28a745"
        textColor="#fff"
        prefix={false}
        prefixImg="/asset/user.png"
        suffix={false}
        suffixImg="/asset/user.png"
        disabled={true}
      /> */}

      {/* <CustomIconButton
        iconImg="/asset/user.png"
        onPress={() => alert("Button Pressed")}
        showNotification={true}
        notificationCount={7}
        backgroundColor="#ffffff"
        size={50}
        disabled={true}
      /> */}

      {/* <CustomCheckbox
        options={optionsCheckbox}
        selectedValues={selectedFruits}
        onChange={setSelectedFruits}
        checkboxColor="#008cffff"
        direction="column"
        position="left"
        responsive={true}
        disabled={true}
      /> */}

      <CustomCodeSnippet code={installCmd} />
    </div>
  )
}

export default App
