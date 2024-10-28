import { useState } from 'react'
import Container from '@mui/material/Container';
import CarList from './components/CarList'
import { AppBar, Toolbar, Typography } from '@mui/material';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>  
        </Toolbar>
      </AppBar>
      <CarList />
    </Container>
  )
}

export default App
