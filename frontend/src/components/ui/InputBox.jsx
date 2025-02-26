import React from 'react'; // Import React and useState only once
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// DynamicInputField component definition
const DynamicInputField = ({
  type = 'text',             
  placeholder = '',         
  value,                    
  onChange,
               
  id,                       
  name,                     
  className = '',           
  label = 'Input Field',   
}) => {
  return (
    <TextField
      type={type}              
      placeholder={placeholder} 
      value={value}            
      onChange={onChange}      
      id={id}                  
      name={name}              
      className={className}    
      label={label}            
      variant="outlined"       
      fullWidth  
     
    />
  );
};

// InputBox component definition
const InputBox = ({ type = 'text', placeholder = '', value, onChange, id, name, className, label = 'Input Field' }) => {
  return (
    <DynamicInputField
      type={type}             
      placeholder={placeholder} 
      value={value}           
      onChange={onChange}     
      id={id}                 
      name={name}             
      className={className}   
      label={label}          
    />
  );
};

export default InputBox;

