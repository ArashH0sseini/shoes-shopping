import { Grid } from '@mui/material'
import React from 'react'
import Title from './Title'
import Sport from './Sport'
import HighHeel from './HighHeel'
import Formal from './Formal'

export default function Index() {
  return (
    <Grid container className="mb-8">
      <Title title="پاشنه بلندهای پرفروش" />
      <HighHeel />
      <Title title="اسپورت های پرفروش" />
      <Sport />
      <Title title="مجلسی های پرفروش" />
      <Formal />
    </Grid>
  )
}
