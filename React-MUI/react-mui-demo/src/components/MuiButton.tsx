import {Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

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
    </Stack>
  )
}