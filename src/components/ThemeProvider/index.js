import { ThemeProvider } from '@mui/system'
import React from 'react'
import Theme from '../../theme/theme'

export default function index({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
