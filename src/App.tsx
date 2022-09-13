import React, { useState } from 'react';
import './App.css';
import { Button, Stack } from '@mui/material';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';

function App() {
  const [link, setLink] = useState("")

  const handleClick = (str: string) => {
    setLink(str)
  }

  return (
    <div className='App'>
      <Stack direction={'row'} spacing={2}>
        <Button variant='contained' onClick={() => handleClick("typography")}>Typography</Button>
        <Button variant='contained' onClick={() => handleClick("button")}>Button</Button>
        <Button variant='contained' onClick={() => handleClick("textField")}>Text Field</Button>
      </Stack>
      {
        link === "typography" ?
          <MuiTypography /> : null
      }
      {
        link === "button" ?
          <MuiButton /> : null
      }
      {
        link === "textField"
          ? <MuiTextField /> : null
      }

    </div>
  );
}

export default App;
