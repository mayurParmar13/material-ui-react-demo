import React, { useState } from 'react'
import { Typography, Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const MuiButton = () => {
  const [formate, setFormate] = useState<string[]>([])
  const handleChange = (e:React.MouseEvent<HTMLElement, MouseEvent>, updateFormates:string[]) => {
    setFormate(updateFormates)
  }
  return (
    <div>
      <Typography variant='h3' marginTop={2}>MuiButton</Typography>
      <Typography variant='h4' marginTop={3}>Button Variant Example</Typography>
      <Stack spacing={2} direction="row" marginTop={2}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='outlined' href='https://www.google.com/'>Button Link</Button>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button Toggle Example</Typography>
      <Stack spacing={2} direction="row" marginTop={2} >
        <ToggleButtonGroup orientation='vertical' aria-label='text formatting' color='success' value={formate} onChange={handleChange} size="medium" 
        // exclusive
        >
          <ToggleButton value={"A"} aria-label='A'>
            <AccessibilityNewIcon />
          </ToggleButton>
          <ToggleButton value={"C"} aria-label='C'>
            <AccountBoxIcon />
          </ToggleButton>
          <ToggleButton value={"B"} aria-label='B'>
            <AccessTimeFilledIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button Color Example</Typography>
      <Stack spacing={2} direction="row" marginTop={2}>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='warning'>warning</Button>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button Size Example</Typography>
      <Stack display={'block'} spacing={2} direction={"row"} marginTop={2}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button Icon Example</Typography>
      <Stack display={'block'} spacing={2} direction={"row"} marginTop={2}>
        <Button variant='contained' startIcon={<AccessAlarmIcon />}>Large</Button>
        <Button variant='contained' endIcon={<AccessAlarmIcon />}>Large</Button>
        <IconButton aria-label='send'>
          <AccessAlarmIcon />
        </IconButton>
        <IconButton aria-label='send' color='primary'>
          <AccessAlarmIcon />
        </IconButton>
        <IconButton aria-label='send' color='success' size='large'>
          <AccessAlarmIcon />
        </IconButton>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button disableEvent Example</Typography>
      <Stack display={'block'} spacing={2} direction={"row"} marginTop={2}>
        <Button variant='contained' disableElevation>disableElevation</Button>
        <Button variant='contained' disableRipple>disableRipple</Button>
      </Stack>
      <Typography variant='h4' marginTop={3}>Button Group Example</Typography>
      <Stack display={'block'} spacing={2} direction={"row"} marginTop={2}>
        <ButtonGroup variant='contained'>
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Rigth</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' size="large" color="warning">
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Rigth</Button>
        </ButtonGroup>
        <ButtonGroup variant='text' color='secondary'>
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Rigth</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' color="error" orientation='vertical'>
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Rigth</Button>
        </ButtonGroup>
        <ButtonGroup variant='contained' size='small' orientation='vertical' color='success' aria-label='alignment button group'>
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Rigth</Button>
        </ButtonGroup>
      </Stack>
    </div>
  )
}

export default MuiButton