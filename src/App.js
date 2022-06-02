import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from './components/ThemeProvider/index'
import MasterLayout from './screens/MasterLayout'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MasterLayout />
    </ThemeProvider>
  )
}

export default App
