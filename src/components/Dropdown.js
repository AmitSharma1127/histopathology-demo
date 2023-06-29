import { useState } from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

const StyledDropdown = styled(Select)`
  && {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
  }
`;

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledDropdown value={selectedValue} onChange={handleChange}>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </StyledDropdown>
  );
};

export default Dropdown;