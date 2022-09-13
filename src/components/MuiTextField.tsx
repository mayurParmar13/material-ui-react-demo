import { Stack, TextField } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
  return (
    <Stack marginTop={2}>
        <TextField label="First">First</TextField>
        <TextField>Middle</TextField>
        <TextField>Last</TextField>
    </Stack>
  )
}

export default MuiTextField