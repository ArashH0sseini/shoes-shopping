import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from './components/ThemeProvider/index'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LoginContextProvider>
        <MasterLayout />
      </LoginContextProvider>
    </ThemeProvider>
  )
}

export default App
