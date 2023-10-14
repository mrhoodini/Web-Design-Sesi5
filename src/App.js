import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [labelValue, setLabelValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLabelChange = (e) => {
    setLabelValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>

      <form>
        <label>
          Label:
          <input type="text" value={labelValue} onChange={handleLabelChange} />
        </label>
      </form>

      <form>
        <label>
          Select:
          <select value={selectValue} onChange={handleSelectChange}>
            <option value="Web Design">Web Design</option>
            <option value="Web Programming">Web Programming</option>
            <option value="Web Aja">Web Aja</option>
          </select>
        </label>
      </form>

      <div>
        <h2>Form Values:</h2>
        <p>Input: {inputValue}</p>
        <p>Label: {labelValue}</p>
        <p>Select: {selectValue}</p>
      </div>
    </div>
  );
}

export default App;
