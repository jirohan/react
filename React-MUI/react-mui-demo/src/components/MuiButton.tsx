import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItallicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export const MuiButton = () => {
  return (
    <Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='text' color='success'  href='https://google.com'>Text</Button>
            <Button variant='contained' color='success' >Contained</Button>
            <Button variant='outlined' color='error' >Outlined</Button>
        </Stack>
        <Stack spacing={2} display='block' mt={5} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>    
        <Stack spacing={2} display='block' mt={5} direction='row'>
            <Button variant='contained' startIcon={<ArrowForwardOutlinedIcon />}>Arrow</Button>
            <Button variant='contained' endIcon={<ArrowForwardOutlinedIcon />}>Arrow</Button>
            <IconButton aria-label='arrow' color='success' size='large'>
                <ArrowForwardOutlinedIcon />
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup 
                variant='contained' 
                orientation='vertical' 
                size='small' 
                color='secondary'
            >
                <Button onClick={()=> alert('Hello, You clicked it')}>Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>    
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting'>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='itallic' aria-label='itallic'><FormatItallicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}