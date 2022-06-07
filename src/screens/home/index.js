import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Slider from '../../components/Slider'
import Categories from '../../components/Category'

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" className="my-3">
        <Grid item lg={8} className="h-[500px] p-[10px] pr-0">
          <Slider />
        </Grid>
        <Grid item lg={4} className="h-[500px] p-[10px] pr-0">
          <Categories />
        </Grid>
      </Grid>
      <Grid container className="h-48 my-2">
        پرفروش های مردانه
      </Grid>
      <Grid container className="h-48 my-2">
        پرفروش های زنانه
      </Grid>
    </Container>
  )
}
