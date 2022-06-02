import ThemeProvider from './components/ThemeProvider/index'
import CssBaseline from '@mui/material/CssBaseline'
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
